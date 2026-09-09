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
    return { innerHTML: "", querySelectorAll: () => [], getElementById: () => null };
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

console.log(failures === 0 ? "\nall tests passed" : `\n${failures} test(s) failed`);
process.exitCode = failures === 0 ? 0 : 1;
