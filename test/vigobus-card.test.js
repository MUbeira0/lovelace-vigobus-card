// Plain Node regression tests for the card's vanilla-JS logic — no browser,
// no dependencies. Run with `node test/vigobus-card.test.js` (or `npm test`).
//
// This loads dist/vigobus-card.js into a vm context with minimal DOM stubs.
// Top-level `function` declarations in the card become properties on the
// sandbox object and are asserted on directly; top-level `class`/`const`
// declarations do not (a plain JS scoping fact, not a bug), so classes are
// captured through the customElements.define()/document.createElement()
// stubs below instead.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC_PATH = path.join(__dirname, "..", "dist", "vigobus-card.js");
const src = fs.readFileSync(SRC_PATH, "utf8");

let failures = 0;

function assertEqual(actual, expected, label) {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) {
    console.error(`FAIL ${label}: got ${a}, expected ${b}`);
    failures += 1;
  } else {
    console.log(`ok ${label}`);
  }
}

function assertTrue(value, label) {
  if (!value) {
    console.error(`FAIL ${label}: expected truthy value`);
    failures += 1;
  } else {
    console.log(`ok ${label}`);
  }
}

// --- sandbox / DOM stubs ---------------------------------------------------

class FakeHTMLElement {
  attachShadow() {
    this.shadowRoot = { innerHTML: "", querySelectorAll: () => [], getElementById: () => null };
    return this.shadowRoot;
  }
}

const definedElements = {};
let lastCreatedTag = null;

const sandbox = {
  window: { customCards: [] },
  HTMLElement: FakeHTMLElement,
  customElements: {
    define: (tag, cls) => {
      definedElements[tag] = cls;
    },
    get: (tag) => definedElements[tag],
  },
  document: {
    createElement: (tag) => {
      lastCreatedTag = tag;
      return { tagName: String(tag).toUpperCase() };
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    visibilityState: "visible",
  },
  navigator: {},
  console,
};
vm.createContext(sandbox);
vm.runInContext(src, sandbox, { filename: "vigobus-card.js" });

// --- default stop selection -------------------------------------------------
// Per explicit product decision: hide only per-device/phone "nearest_*"
// sensors by default, but keep showing the home stop plus any other
// manually configured extra stop — NOT "nearest only".

const hass = {
  language: "es",
  states: {
    "sensor.vigobus_nearest": {
      entity_id: "sensor.vigobus_nearest",
      state: "5",
      attributes: {
        friendly_name: "VigoBus Cercana",
        stop_name: "Cercana",
        buses: [
          { linea: "C1", ruta: "Ruta A", minutos: 5 },
          { linea: "N1", ruta: "Ruta B", minutos: 8 },
        ],
      },
    },
    "sensor.vigobus_urzaiz": {
      entity_id: "sensor.vigobus_urzaiz",
      state: "3",
      attributes: {
        friendly_name: "VigoBus Urzaiz",
        stop_name: "Urzaiz",
        buses: [{ linea: "4A", ruta: "Ruta C", minutos: 3 }],
      },
    },
    "sensor.vigobus_nearest_person_miguel": {
      entity_id: "sensor.vigobus_nearest_person_miguel",
      state: "7",
      attributes: {
        friendly_name: "VigoBus Cercana Miguel",
        stop_name: "Cercana a Miguel",
        is_device_nearest: true,
        buses: [{ linea: "9B", ruta: "Ruta D", minutos: 7 }],
      },
    },
  },
};

const groupsDefault = sandbox.buildSelectedGroups(hass, {});
assertEqual(
  groupsDefault.map((g) => g.key).sort(),
  ["nearest", "urzaiz"],
  "default groups keep home + extra stops, exclude per-device nearest"
);

const groupsExplicit = sandbox.buildSelectedGroups(hass, {
  stops: [{ entity: "sensor.vigobus_urzaiz", title: "", line: "" }],
});
assertEqual(groupsExplicit.map((g) => g.key), ["urzaiz"], "explicit stops config overrides default");

// --- line filter threading --------------------------------------------------

const nearestGroup = groupsDefault.find((g) => g.key === "nearest");
const allBuses = sandbox.getBusesFromGroup(nearestGroup, "");
assertEqual(allBuses.map((b) => b.linea), ["C1", "N1"], "unfiltered buses sorted by minutes");

const filtered = sandbox.getBusesFromGroup(nearestGroup, "c1");
assertEqual(filtered.map((b) => b.linea), ["C1"], "line filter matches case-insensitively");

const filteredNone = sandbox.getBusesFromGroup(nearestGroup, "ZZZ");
assertEqual(filteredNone, [], "unknown line filter yields empty list");

assertEqual(sandbox.getLineFromGroup(nearestGroup, "c1"), "C1", "getLineFromGroup echoes normalized filter");

// --- "unknown"/"unavailable" leak regression ---------------------------------
// A stop with no upcoming buses has no "linea"/"ruta" attribute at all, so
// the code used to fall back to the separate line/route sensor's own raw
// HA state — which is the literal string "unknown" when that sensor also
// has no data, and a bare `||` fallback treats a non-empty string as valid.

const emptyStopHass = {
  language: "es",
  states: {
    "sensor.vigobus_nearest": {
      entity_id: "sensor.vigobus_nearest",
      state: "unknown",
      attributes: { friendly_name: "VigoBus Cercana", stop_name: "Cercana" },
    },
    "sensor.vigobus_nearest_linea": {
      entity_id: "sensor.vigobus_nearest_linea",
      state: "unknown",
      attributes: {},
    },
    "sensor.vigobus_nearest_ruta": {
      entity_id: "sensor.vigobus_nearest_ruta",
      state: "unavailable",
      attributes: {},
    },
  },
};

const emptyGroups = sandbox.buildSelectedGroups(emptyStopHass, {});
const emptyGroup = emptyGroups.find((g) => g.key === "nearest");
assertEqual(sandbox.getLineFromGroup(emptyGroup, ""), "-", "getLineFromGroup never surfaces a raw 'unknown' sensor state");
assertEqual(sandbox.getRoutesFromGroup(emptyGroup, ""), ["-"], "getRoutesFromGroup never surfaces a raw 'unknown'/'unavailable' sensor state");

// getRouteEntriesFromGroup always pads to one {line:"-", route:"-"} entry
// even for a genuinely empty stop — callers must check the *resolved text*
// (e.g. route !== "-"), not entries.length, to detect "no real data". This
// non-obvious contract caused a real bug (an empty stop briefly showed a
// bare "-" badge and "Línea: -" instead of hiding that row entirely).
assertEqual(
  sandbox.getRouteEntriesFromGroup(emptyGroup, ""),
  [{ line: "-", route: "-" }],
  "getRouteEntriesFromGroup pads to a placeholder entry for an empty stop (callers must check route !== '-', not array length)"
);

// --- filterBusesByLine (device-location helper) -----------------------------

const deviceBuses = [
  { linea: "17", ruta: "x", minutos: 4 },
  { linea: "4A", ruta: "y", minutos: 9 },
];
assertEqual(
  sandbox.filterBusesByLine(deviceBuses, "4a").map((b) => b.linea),
  ["4A"],
  "filterBusesByLine case-insensitive"
);
assertEqual(sandbox.filterBusesByLine(deviceBuses, ""), deviceBuses, "empty filter returns all");

// --- card_style selector -----------------------------------------------------

assertEqual(sandbox.getCardStyle({ card_style: "glass" }), "glass", "getCardStyle accepts glass");
assertEqual(
  sandbox.getCardStyle({ card_style: "glass_refined" }),
  "glass_refined",
  "getCardStyle accepts glass_refined"
);
assertEqual(sandbox.getCardStyle({ card_style: "bold" }), "bold", "getCardStyle accepts bold");
assertEqual(sandbox.getCardStyle({ card_style: "made_up" }), "bold", "unknown card_style falls back to bold");
assertEqual(sandbox.getCardStyle({}), "bold", "missing card_style falls back to bold");

// --- getConfigElement wiring -------------------------------------------------
// Regression guard: the card was once missing this method entirely, so Home
// Assistant fell back to the raw YAML editor for every option instead of
// showing the visual editor.

const CardClass = definedElements["vigobus-card"];
assertTrue(CardClass, "vigobus-card is registered via customElements.define");
assertTrue(
  typeof CardClass.getConfigElement === "function",
  "VigoBusCard exposes a static getConfigElement()"
);

lastCreatedTag = null;
CardClass.getConfigElement();
assertEqual(lastCreatedTag, "vigobus-card-editor", "getConfigElement creates a vigobus-card-editor element");

assertTrue(!CardClass.getConfigForm, "the stale getConfigForm schema was removed, not left dangling");

const EditorClass = definedElements["vigobus-card-editor"];
assertTrue(EditorClass, "vigobus-card-editor is registered via customElements.define");

// --- alert click-to-detail ---------------------------------------------------
// Alerts only carried a title + affected lines; clicking one now opens a
// modal with the full description/date range the backend started sending
// alongside "resumen"/"fecha_inicio"/"fecha_fin".

assertEqual(
  sandbox.formatAlertDateRange({ inicio: "2026-09-10", fin: "2026-09-13" }, "es"),
  "10/09/2026 – 13/09/2026",
  "formatAlertDateRange renders a start–end range"
);
assertEqual(
  sandbox.formatAlertDateRange({ inicio: "2026-09-10", fin: "2026-09-10" }, "es"),
  "10/09/2026",
  "formatAlertDateRange collapses to one date when start and end match"
);
assertEqual(
  sandbox.formatAlertDateRange({ inicio: "2026-09-10", fin: null }, "es"),
  "10/09/2026",
  "formatAlertDateRange falls back to just the start date"
);
assertEqual(sandbox.formatAlertDateRange({}, "es"), null, "formatAlertDateRange returns null with no dates");

const alertHass = {
  language: "es",
  states: {
    "sensor.vigobus_nearest": {
      entity_id: "sensor.vigobus_nearest",
      state: "5",
      attributes: {
        friendly_name: "VigoBus Cercana",
        stop_name: "Cercana",
        buses: [{ linea: "C1", ruta: "Ruta A", minutos: 5 }],
        alerts: [
          {
            id_publicacion: "3850",
            title: "CORTE TRAFICO SAA DO MONTE",
            lineas: "18B",
            inicio: "2026-09-09",
            fin: "2026-09-10",
            description: "Habra un corte de trafico durante el jueves.",
            category: "Informacion general",
          },
        ],
      },
    },
  },
};

const alertCardInstance = new CardClass();
alertCardInstance.setConfig({ title: "VigoBus", stops: [{ entity: "sensor.vigobus_nearest", title: "" }] });
alertCardInstance.hass = alertHass;

assertTrue(
  /class="next-item alert-item" data-alert-key="alert-0"/.test(alertCardInstance.shadowRoot.innerHTML),
  "rendered alert item carries a data-alert-key hook for the click handler"
);
assertTrue(
  !/data-alert-backdrop/.test(alertCardInstance.shadowRoot.innerHTML),
  "no alert modal is rendered until an alert is clicked"
);

const registeredAlert = alertCardInstance._alertLookup.get("alert-0");
assertTrue(Boolean(registeredAlert), "_registerAlert makes the alert retrievable by its data-alert-key");

alertCardInstance._openAlertModal(registeredAlert);
assertEqual(alertCardInstance._openAlert, registeredAlert, "_openAlertModal stores the clicked alert");
assertTrue(
  alertCardInstance.shadowRoot.innerHTML.includes("CORTE TRAFICO SAA DO MONTE") &&
    alertCardInstance.shadowRoot.innerHTML.includes("Habra un corte de trafico durante el jueves.") &&
    alertCardInstance.shadowRoot.innerHTML.includes("data-alert-backdrop"),
  "opening an alert renders its title, description and the modal backdrop"
);

alertCardInstance._closeAlertModal();
assertEqual(alertCardInstance._openAlert, null, "_closeAlertModal clears the open alert");
assertTrue(
  !/data-alert-backdrop/.test(alertCardInstance.shadowRoot.innerHTML),
  "closing the alert removes the modal from the rendered output"
);

// --- "my location" (device location) alerts ---------------------------------
// The stateless nearest_stops service now also returns each candidate's line
// alerts (previously it only returned buses), so the card should both ask
// for them in the viewer's language and render them the same clickable way
// as the fixed-stop sections.

let capturedServiceCall = null;
const deviceLocationInstance = new CardClass();
deviceLocationInstance.setConfig({
  title: "VigoBus",
  stops: [{ entity: "sensor.vigobus_nearest", title: "" }],
  device_location_mode: true,
});
deviceLocationInstance._hass = {
  language: "gl",
  states: {},
  connection: {
    sendMessagePromise: async (message) => {
      capturedServiceCall = message;
      return { response: { candidates: [] } };
    },
  },
};

// _lookupNearestByCoords is async only because the real sendMessagePromise
// is, but our stub has no internal await, so it (and the assignment below)
// runs synchronously up to that call — no need to await the outer promise
// here, which keeps this a plain CommonJS script (no top-level await).
deviceLocationInstance._lookupNearestByCoords(42.0, -8.0);
assertEqual(
  capturedServiceCall?.service_data?.lang,
  "gl",
  "_lookupNearestByCoords asks the nearest_stops service for alerts in the viewer's language"
);

deviceLocationInstance._applyCandidates(
  [
    {
      id: "s1",
      name: "Stop A",
      distance_m: 42,
      buses: [{ linea: "C1", ruta: "Centro", minutos: 5, metros: 300 }],
      alerts: [{ title: "Corte C1", lineas: "C1", inicio: null, fin: null, description: "Obras en la via." }],
    },
  ],
  "browser",
  null
);

assertTrue(
  /class="next-item alert-item" data-alert-key="alert-0"/.test(deviceLocationInstance.shadowRoot.innerHTML) &&
    deviceLocationInstance.shadowRoot.innerHTML.includes("Corte C1"),
  "the 'my location' section renders its selected candidate's alerts as clickable items"
);

// --- mobile overflow fix: CSS regression guard ------------------------------
// A long, unbreakable line/route name used to push the whole card past the
// screen edge because these grid items had no min-width: 0. Not a full
// layout test (that needs a real browser — verified manually with
// Playwright during development), just a tripwire against silently
// dropping the fix again.

function ruleBody(selector) {
  // Anchored to the start of a line (after indentation) so e.g. ".stop-item"
  // doesn't accidentally match inside "ha-card.compact .stop-item".
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = src.match(new RegExp(`^[ \\t]*${escaped}\\s*\\{([^}]*)\\}`, "m"));
  return match ? match[1] : "";
}

for (const selector of [".next-item", ".stop-item", ".hero"]) {
  assertTrue(
    /min-width:\s*0/.test(ruleBody(selector)),
    `${selector} keeps min-width: 0 (prevents long text from forcing the card wider than the screen)`
  );
}

assertTrue(
  /overflow-x:\s*hidden/.test(ruleBody(":host")) && /max-width:\s*100%/.test(ruleBody(":host")),
  ":host keeps its overflow-x/max-width safety net"
);

// --- render-skip regression: hass ticks with unchanged data should not ------
// re-render at all. Home Assistant calls the hass setter on essentially
// every state change system-wide, and rebuilding the whole shadow DOM
// (innerHTML) on every one of those ticks caused visible "jumps" (restarted
// CSS animations, lost hover state). Needs its own vm context with an
// instrumented attachShadow(), since VigoBusCard is already bound to the
// main sandbox's plain FakeHTMLElement.

{
  let renderCount = 0;

  class CountingHTMLElement {
    attachShadow() {
      const shadow = { querySelectorAll: () => [], getElementById: () => null };
      let html = "";
      Object.defineProperty(shadow, "innerHTML", {
        get: () => html,
        set: (value) => {
          html = value;
          renderCount += 1;
        },
      });
      this.shadowRoot = shadow;
      return shadow;
    }
  }

  let CapturedCardClass = null;
  const renderSandbox = {
    window: { customCards: [] },
    HTMLElement: CountingHTMLElement,
    customElements: {
      define: (tag, cls) => {
        if (tag === "vigobus-card") CapturedCardClass = cls;
      },
      get: () => undefined,
    },
    document: { createElement: () => ({}), addEventListener: () => {}, removeEventListener: () => {} },
    navigator: {},
    console,
  };
  vm.createContext(renderSandbox);
  vm.runInContext(src, renderSandbox, { filename: "vigobus-card.js (render-skip test)" });

  const hassV1 = {
    language: "es",
    states: {
      "sensor.vigobus_nearest": {
        entity_id: "sensor.vigobus_nearest",
        state: "5",
        attributes: { stop_name: "Cercana", buses: [{ linea: "C1", ruta: "Centro", minutos: 5 }] },
      },
    },
  };
  // A fresh object with identical *content* — simulates HA handing the card
  // a new hass reference on an unrelated state change elsewhere in the house.
  const hassV1Clone = JSON.parse(JSON.stringify(hassV1));
  const hassV2 = {
    language: "es",
    states: {
      "sensor.vigobus_nearest": {
        entity_id: "sensor.vigobus_nearest",
        state: "3",
        attributes: { stop_name: "Cercana", buses: [{ linea: "C1", ruta: "Centro", minutos: 3 }] },
      },
    },
  };

  // VigoBusCard is a top-level `class`, not exposed on the sandbox object
  // directly — CapturedCardClass was captured via customElements.define()
  // above, the same way Home Assistant obtains it.
  const instance = new CapturedCardClass();
  instance.setConfig({ title: "VigoBus", stops: [{ entity: "sensor.vigobus_nearest", title: "" }] });

  instance.hass = hassV1;
  const afterFirst = renderCount;
  assertTrue(afterFirst >= 1, "first hass assignment renders");

  instance.hass = hassV1Clone;
  assertEqual(renderCount, afterFirst, "hass tick with unchanged data does not re-render");

  instance.hass = hassV2;
  assertEqual(renderCount, afterFirst + 1, "hass tick with actually-changed data re-renders exactly once");
}

console.log(failures === 0 ? "\nall tests passed" : `\n${failures} test(s) failed`);
process.exitCode = failures === 0 ? 0 : 1;
