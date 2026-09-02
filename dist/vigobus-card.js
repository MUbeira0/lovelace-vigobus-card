const DOMAIN_PREFIX = "sensor.vigobus_";
const STOP_SUFFIXES = ["_linea", "_ruta", "_proximos"];
const STOP_SLOT_COUNT = 6;

const TEXTS = {
  es: {
    unknown: "Desconocido",
    no_estimations: "Sin estimaciones",
    nearest: "M\u00e1s cercana",
    saved_stop: "Parada guardada",
    other_stops: "Otras paradas",
    following: "Siguientes",
    line: "L\u00ednea",
    route: "Ruta",
    routes: "Rutas",
    distance: "Distancia",
    no_data: "Sin datos",
    arrival: "llegada",
    debug_nearest: "Depuraci\u00f3n nearest",
    bus: "bus",
    buses: "buses",
    main_stop: "Parada principal",
    selected_stops: "Paradas seleccionadas",
    add_stop: "A\u00f1adir parada",
    entity: "Entidad",
    title: "T\u00edtulo",
    language: "Idioma",
    auto: "Autom\u00e1tico",
    spanish: "Espa\u00f1ol",
    english: "Ingl\u00e9s",
    galician: "Galego",
    next_count: "N\u00ba siguientes",
    compact: "Modo compacto",
    show_others: "Mostrar otras paradas",
    show_debug: "Mostrar debug",
    title_hint: "Si lo dejas vac\u00edo, se usar\u00e1 el nombre de la entidad.",
    entity_hint: "Elige una entidad sensor.vigobus_*.",
    stop_hint: "La primera parada seleccionada se mostrar\u00e1 como principal.",
    primary_label: "Entidad principal",
    updated: "Actualizado",
    unavailable: "No disponible",
    no_entities: "No hay entidades VigoBus disponibles.",
    no_upcoming: "Sin pr\u00f3ximos buses",
    stale: "Dato anterior",
    offline: "Sin conexi\u00f3n",
    alerts: "Alertas",
    no_alerts: "Sin alertas para l\u00edneas activas",
    show_alerts: "Mostrar alertas",
    alerts_only_main_line: "Solo l\u00ednea principal",
    alerts_max: "Max avisos",
    my_location: "Mi ubicaci\u00f3n",
    locating: "Buscando tu ubicaci\u00f3n\u2026",
    loading_stops: "Consultando paradas cercanas\u2026",
    location_permission_denied: "Activa el permiso de ubicaci\u00f3n para ver tu parada m\u00e1s cercana.",
    location_unavailable: "No se pudo obtener tu ubicaci\u00f3n. Int\u00e9ntalo de nuevo.",
    location_unsupported: "Este dispositivo no soporta geolocalizaci\u00f3n.",
    no_nearby_stops: "No se encontraron paradas cerca de ti.",
    device_location_enable: "Activar (usa la ubicaci\u00f3n del dispositivo)",
    device_location_margin: "Margen de empate (metros)",
    device_location_max_candidates: "M\u00e1x. paradas candidatas",
    device_location_refresh: "Refresco (segundos)",
    device_location_source: "Fuente de ubicaci\u00f3n",
    device_location_source_auto: "Autom\u00e1tica (navegador y, si falla, tu persona)",
    device_location_source_browser: "Solo navegador (GPS del dispositivo)",
    device_location_source_person: "Solo tu persona (recomendado en la app)",
    device_location_hint: "Cada dispositivo que vea esta tarjeta consultar\u00e1 su propia ubicaci\u00f3n; no depende de ninguna entidad.",
  },
  en: {
    unknown: "Unknown",
    no_estimations: "No estimations",
    nearest: "Nearest",
    saved_stop: "Saved stop",
    other_stops: "Other stops",
    following: "Next",
    line: "Line",
    route: "Route",
    routes: "Routes",
    distance: "Distance",
    no_data: "No data",
    arrival: "arrival",
    debug_nearest: "Nearest debug",
    bus: "bus",
    buses: "buses",
    main_stop: "Main stop",
    selected_stops: "Selected stops",
    add_stop: "Add stop",
    entity: "Entity",
    title: "Title",
    language: "Language",
    auto: "Auto",
    spanish: "Spanish",
    english: "English",
    galician: "Galician",
    next_count: "Next count",
    compact: "Compact mode",
    show_others: "Show other stops",
    show_debug: "Show debug",
    title_hint: "Leave empty to use the entity name.",
    entity_hint: "Pick a sensor.vigobus_* entity.",
    stop_hint: "The first selected stop will be shown as main.",
    primary_label: "Primary entity",
    updated: "Updated",
    unavailable: "Unavailable",
    no_entities: "No VigoBus entities available.",
    no_upcoming: "No upcoming buses",
    stale: "Stale data",
    offline: "Offline",
    alerts: "Alerts",
    no_alerts: "No alerts for active lines",
    show_alerts: "Show alerts",
    alerts_only_main_line: "Only main line",
    alerts_max: "Max alerts",
    my_location: "My location",
    locating: "Finding your location…",
    loading_stops: "Looking up nearby stops…",
    location_permission_denied: "Enable location permission to see your nearest stop.",
    location_unavailable: "Could not get your location. Please try again.",
    location_unsupported: "This device does not support geolocation.",
    no_nearby_stops: "No stops found near you.",
    device_location_enable: "Enable (uses the viewing device's location)",
    device_location_margin: "Tie margin (meters)",
    device_location_max_candidates: "Max candidate stops",
    device_location_refresh: "Refresh (seconds)",
    device_location_source: "Location source",
    device_location_source_auto: "Automatic (browser, falls back to your person)",
    device_location_source_browser: "Browser only (device GPS)",
    device_location_source_person: "Your person only (recommended in the app)",
    device_location_hint: "Every device viewing this card looks up its own location; it does not depend on any entity.",
  },
  gl: {
    unknown: "Desco\u00f1ecido",
    no_estimations: "Sen estimaci\u00f3ns",
    nearest: "M\u00e1is pr\u00f3xima",
    saved_stop: "Parada gardada",
    other_stops: "Outras paradas",
    following: "Seguintes",
    line: "Li\u00f1a",
    route: "Ruta",
    routes: "Rutas",
    distance: "Distancia",
    no_data: "Sen datos",
    arrival: "chegada",
    debug_nearest: "Depuraci\u00f3n nearest",
    bus: "bus",
    buses: "buses",
    main_stop: "Parada principal",
    selected_stops: "Paradas seleccionadas",
    add_stop: "Engadir parada",
    entity: "Entidade",
    title: "T\u00edtulo",
    language: "Idioma",
    auto: "Autom\u00e1tico",
    spanish: "Espa\u00f1ol",
    english: "Ingl\u00e9s",
    galician: "Galego",
    next_count: "N\u00ba seguintes",
    compact: "Modo compacto",
    show_others: "Amosar outras paradas",
    show_debug: "Amosar debug",
    title_hint: "Se o deixas baleiro, usarase o nome da entidade.",
    entity_hint: "Escolle unha entidade sensor.vigobus_*.",
    stop_hint: "A primeira parada seleccionada am\u00f3sase como principal.",
    primary_label: "Entidade principal",
    updated: "Actualizado",
    unavailable: "Non dispo\u00f1ible",
    no_entities: "Non hai entidades VigoBus dispo\u00f1ibles.",
    no_upcoming: "Sen vindeiros buses",
    stale: "Dato anterior",
    offline: "Sen conexi\u00f3n",
    alerts: "Alertas",
    no_alerts: "Sen alertas para li\u00f1as activas",
    show_alerts: "Amosar alertas",
    alerts_only_main_line: "S\u00f3 li\u00f1a principal",
    alerts_max: "Max avisos",
    my_location: "A mi\u00f1a ubicaci\u00f3n",
    locating: "Buscando a t\u00faa ubicaci\u00f3n\u2026",
    loading_stops: "Consultando paradas pr\u00f3ximas\u2026",
    location_permission_denied: "Activa o permiso de ubicaci\u00f3n para ver a t\u00faa parada m\u00e1is pr\u00f3xima.",
    location_unavailable: "Non se puido obter a t\u00faa ubicaci\u00f3n. T\u00e9ntao de novo.",
    location_unsupported: "Este dispositivo non soporta xeolocalizaci\u00f3n.",
    no_nearby_stops: "Non se atoparon paradas preto de ti.",
    device_location_enable: "Activar (usa a ubicaci\u00f3n do dispositivo)",
    device_location_margin: "Marxe de empate (metros)",
    device_location_max_candidates: "M\u00e1x. paradas candidatas",
    device_location_refresh: "Actualizaci\u00f3n (segundos)",
    device_location_source: "Fonte de ubicaci\u00f3n",
    device_location_source_auto: "Autom\u00e1tica (navegador e, se falla, a t\u00faa persoa)",
    device_location_source_browser: "S\u00f3 navegador (GPS do dispositivo)",
    device_location_source_person: "S\u00f3 a t\u00faa persoa (recomendado na app)",
    device_location_hint: "Cada dispositivo que vexa esta tarxeta consultar\u00e1 a s\u00faa propia ubicaci\u00f3n; non depende de ningunha entidade.",
  },
};

window.customCards = window.customCards || [];
window.customCards.push({
  type: "vigobus-card",
  name: "VigoBus Card",
  description: "Tarjeta bonita y configurable para mostrar paradas VigoBus",
});

function prettifyKey(value) {
  return String(value || "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getLocale(config, hass) {
  const requested = String(config?.language || "auto").toLowerCase();
  if (requested === "es" || requested === "en" || requested === "gl") {
    return requested;
  }

  const hassLang = String(hass?.language || "").toLowerCase();
  if (hassLang.startsWith("es")) {
    return "es";
  }
  if (hassLang.startsWith("gl")) {
    return "gl";
  }

  return "en";
}

function t(locale, key) {
  return (TEXTS[locale] && TEXTS[locale][key]) || TEXTS.es[key] || key;
}

function parseMinutes(value) {
  if (value === null || value === undefined || value === "" || value === "unknown") {
    return null;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.max(0, Math.floor(value));
  }

  const text = String(value).trim();
  const direct = Number(text);
  if (!Number.isNaN(direct)) {
    return Math.max(0, Math.floor(direct));
  }

  const match = text.match(/\d+/);
  if (!match) {
    return null;
  }

  return Math.max(0, Math.floor(Number(match[0])));
}

function formatHumanDuration(value) {
  if (value === null || value === undefined || value === "" || value === "unknown") {
    return "--";
  }

  const number = Number(value);
  if (Number.isNaN(number)) {
    return String(value);
  }

  const hours = Math.floor(number / 60);
  const minutes = number % 60;

  if (hours <= 0) {
    return `${number} min`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
}

function formatShortDuration(value) {
  return formatHumanDuration(value);
}

function formatUpdatedAt(value, locale) {
  if (!value) {
    return "--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  const localeTag = locale === "gl" ? "gl-ES" : locale === "es" ? "es-ES" : "en-GB";
  return date.toLocaleTimeString(localeTag, { hour: "2-digit", minute: "2-digit" });
}

function getBaseStopKey(entityId) {
  if (!entityId || !entityId.startsWith(DOMAIN_PREFIX)) {
    return null;
  }

  let key = entityId.slice(DOMAIN_PREFIX.length);
  for (const suffix of STOP_SUFFIXES) {
    if (key.endsWith(suffix)) {
      key = key.slice(0, -suffix.length);
      break;
    }
  }
  return key;
}

function buildStopGroups(hass) {
  const groups = new Map();
  const entities = Object.values(hass.states || {}).filter((entity) =>
    entity.entity_id?.startsWith(DOMAIN_PREFIX)
  );

  for (const entity of entities) {
    const baseKey = getBaseStopKey(entity.entity_id);
    if (!baseKey) {
      continue;
    }

    if (!groups.has(baseKey)) {
      const titleFromAttrs =
        entity?.attributes?.stop_name || entity?.attributes?.friendly_name || prettifyKey(baseKey);
      groups.set(baseKey, {
        key: baseKey,
        title: String(titleFromAttrs),
        entity: null,
        linea: null,
        ruta: null,
        proximos: null,
        sensors: {},
      });
    }

    const group = groups.get(baseKey);
    const suffix = entity.entity_id.slice(DOMAIN_PREFIX.length + baseKey.length);

    if (suffix === "") {
      group.entity = entity;
    } else if (suffix === "_linea") {
      group.linea = entity;
      group.sensors.linea = entity;
    } else if (suffix === "_ruta") {
      group.ruta = entity;
      group.sensors.ruta = entity;
    } else if (suffix === "_proximos") {
      group.proximos = entity;
      group.sensors.proximos = entity;
    }
  }

  return [...groups.values()].sort((a, b) => a.title.localeCompare(b.title, "es"));
}

function normalizeConfiguredStops(configStops) {
  if (Array.isArray(configStops)) {
    return configStops
      .map((item) => ({
        entity: String(item?.entity || "").trim(),
        title: String(item?.title || "").trim(),
      }))
      .filter((item) => item.entity);
  }

  if (!configStops || typeof configStops !== "object") {
    return [];
  }

  if (Array.isArray(configStops.stops)) {
    return normalizeConfiguredStops(configStops.stops);
  }

  const stops = [];
  for (let index = 1; index <= STOP_SLOT_COUNT; index += 1) {
    const entity = String(configStops[`stop${index}_entity`] || "").trim();
    const title = String(configStops[`stop${index}_title`] || "").trim();
    if (entity) {
      stops.push({ entity, title });
    }
  }

  return stops;
}

function buildSelectedGroups(hass, config) {
  const allGroups = buildStopGroups(hass);
  const configuredStops = normalizeConfiguredStops(config?.stops);

  if (!configuredStops.length) {
    return uniqueByKey(allGroups);
  }

  const selected = [];

  for (const stopConfig of configuredStops) {
    const baseKey = getBaseStopKey(stopConfig.entity);
    if (!baseKey) {
      continue;
    }

    const group = allGroups.find((item) => item.key === baseKey);
    if (!group) {
      continue;
    }

    selected.push({
      ...group,
      title: stopConfig.title || group.title,
      entityId: stopConfig.entity,
      manualTitle: stopConfig.title || "",
    });
  }

  return selected.length ? uniqueByKey(selected) : uniqueByKey(allGroups);
}

function getNextBuses(group, count) {
  const buses = getBusesFromGroup(group);
  const limit = Math.max(0, Number(count) || 0);

  return buses.slice(0, limit).map((bus) => ({
    line: bus?.linea || "-",
    route: formatRouteWithLine(bus?.linea, bus?.ruta),
    minutes: bus?.minutos,
  }));
}

function formatNextBusSummaryItem(item) {
  const line = String(item?.line || "-").trim() || "-";
  const duration = formatShortDuration(item?.minutes);
  const route = String(item?.route || "").trim();

  if (!route || route === "-") {
    return `${line} ${duration}`;
  }

  return `${line} ${duration} (${route})`;
}

function getPrimaryGroup(groups, primaryEntity) {
  if (primaryEntity) {
    const primaryKey = getBaseStopKey(primaryEntity);
    if (primaryKey) {
      const found = groups.find((group) => group.key === primaryKey);
      if (found) {
        return found;
      }
    }
  }

  const nearest = groups.find((group) => group.key === "nearest");
  if (nearest) {
    return nearest;
  }

  return groups[0] || null;
}

function sortGroupsForDisplay(groups) {
  const nearest = [];
  const rest = [];
  for (const group of groups || []) {
    if (group?.key === "nearest") {
      nearest.push(group);
    } else {
      rest.push(group);
    }
  }
  return [...nearest, ...rest];
}

function getMinutesFromEntity(entity) {
  if (!entity) {
    return null;
  }

  return parseMinutes(entity.state);
}

function getLineFromGroup(group) {
  return group?.entity?.attributes?.linea || group?.linea?.state || "-";
}

function getRouteFromGroup(group) {
  const routes = getRoutesFromGroup(group);
  return routes[0] || "-";
}

function getRoutesFromGroup(group) {
  const routes = [];
  const seen = new Set();

  const appendRoute = (value) => {
    const text = String(value || "").trim();
    if (!text || text === "-") {
      return;
    }
    const key = text.toUpperCase();
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    routes.push(text);
  };

  const providedRoutes = group?.entity?.attributes?.rutas;
  if (Array.isArray(providedRoutes)) {
    for (const route of providedRoutes) {
      appendRoute(route);
    }
  }

  for (const bus of getBusesFromGroup(group)) {
    appendRoute(bus?.ruta);
  }
  appendRoute(group?.entity?.attributes?.ruta);
  appendRoute(group?.ruta?.state);

  return routes.length ? routes : ["-"];
}

function getRouteEntriesFromGroup(group) {
  const entries = [];
  const seen = new Set();

  const appendEntry = (line, route) => {
    const normalizedLine = String(line || "").trim();
    const normalizedRoute = String(route || "").trim();
    if (!normalizedRoute || normalizedRoute === "-") {
      return;
    }

    const key = `${normalizedLine.toUpperCase()}|${normalizedRoute.toUpperCase()}`;
    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    entries.push({ line: normalizedLine, route: normalizedRoute });
  };

  const buses = getBusesFromGroup(group);
  if (buses.length) {
    for (const bus of buses) {
      appendEntry(bus?.linea, bus?.ruta);
    }
    return entries.length ? entries : [{ line: getLineFromGroup(group), route: getRouteFromGroup(group) }];
  }

  const fallbackLine = getLineFromGroup(group);
  for (const route of getRoutesFromGroup(group)) {
    appendEntry(fallbackLine, route);
  }

  return entries.length ? entries : [{ line: fallbackLine, route: getRouteFromGroup(group) }];
}

function formatRouteWithLine(line, route) {
  const normalizedLine = String(line || "").trim();
  const normalizedRoute = String(route || "").trim();

  if (!normalizedRoute || normalizedRoute === "-") {
    return normalizedLine || "-";
  }

  if (!normalizedLine || normalizedLine === "-") {
    return normalizedRoute;
  }

  const linePattern = normalizedLine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const prefixPattern = new RegExp(`^${linePattern}\s*[-–—:]\s*`, "i");
  const strippedRoute = normalizedRoute.replace(prefixPattern, "").trim();

  if (!strippedRoute) {
    return normalizedLine;
  }

  return `${normalizedLine} - ${strippedRoute}`;
}

function getDistanceFromGroup(group) {
  const distance = group?.entity?.attributes?.nearest_dist_m;
  if (distance === undefined || distance === null || distance === "") {
    return null;
  }
  const number = Number(distance);
  return Number.isNaN(number) ? null : number;
}

function getBusesFromGroup(group) {
  const buses = group?.entity?.attributes?.buses;
  if (!Array.isArray(buses)) {
    return [];
  }

  const normalized = buses
    .filter((item) => item && typeof item === "object")
    .map((item) => ({
      linea: item.linea || "-",
      ruta: item.ruta || "-",
      minutos: parseMinutes(item.minutos),
    }))
    .filter((item) => item.minutos !== null);

  normalized.sort((a, b) => a.minutos - b.minutos);
  return normalized;
}

function getUpdatedAtFromGroup(group) {
  return group?.entity?.attributes?.updated_at || null;
}

function getAlertsFromGroup(group) {
  const alerts = group?.entity?.attributes?.alerts;
  return Array.isArray(alerts) ? alerts : [];
}

function normalizeLine(value) {
  return String(value || "").trim().toUpperCase().replaceAll(" ", "");
}

function filterAlerts(alerts, mainLine, onlyMainLine, limit) {
  const list = Array.isArray(alerts) ? alerts : [];
  const filtered = onlyMainLine && mainLine
    ? list.filter((item) => normalizeLine(item?.lineas || "").includes(normalizeLine(mainLine)))
    : list;

  return filtered.slice(0, Math.max(1, Number(limit) || 3));
}

function isGroupStale(group) {
  return Boolean(group?.entity?.attributes?.stale);
}

function getDisplayTitle(group, fallback) {
  const fromAttr = group?.entity?.attributes?.stop_name;
  const fromGroup = group?.title;
  return String(fromAttr || fromGroup || fallback || "VigoBus").trim();
}

function uniqueByKey(groups) {
  const seen = new Set();
  const out = [];
  for (const group of groups) {
    if (!group?.key || seen.has(group.key)) {
      continue;
    }
    seen.add(group.key);
    out.push(group);
  }
  return out;
}

class VigoBusCard extends HTMLElement {
  static getStubConfig() {
    return {
      title: "VigoBus",
      primary_entity: "",
      max_stops: 6,
      next_buses_count: 3,
      compact: false,
      show_all_stops: true,
      show_debug: false,
      show_alerts: true,
      alerts_only_main_line: false,
      alerts_max: 3,
      accent_color: "#2a7fff",
      language: "auto",
      device_location_mode: false,
      device_location_title: "",
      device_location_tie_margin_m: 60,
      device_location_max_candidates: 3,
      device_location_refresh_seconds: 45,
      device_location_source: "auto",
      stop1_entity: "sensor.vigobus_nearest",
      stop1_title: "",
      stop2_entity: "",
      stop2_title: "",
      stop3_entity: "",
      stop3_title: "",
      stop4_entity: "",
      stop4_title: "",
      stop5_entity: "",
      stop5_title: "",
      stop6_entity: "",
      stop6_title: "",
    };
  }

  static getConfigForm() {
    const labels = {
      title: "T\u00edtulo",
      primary_entity: "Entidad principal",
      language: "Idioma",
      next_buses_count: "Nº siguientes",
      accent_color: "Color acento",
      compact: "Modo compacto",
      show_all_stops: "Mostrar otras paradas",
      show_debug: "Mostrar debug",
      show_alerts: "Mostrar alertas",
      alerts_only_main_line: "Solo l\u00ednea principal",
      alerts_max: "Max avisos",
      max_stops: "M\u00e1ximo de paradas",
      stop1_entity: "Parada 1",
      stop1_title: "T\u00edtulo 1",
      stop2_entity: "Parada 2",
      stop2_title: "T\u00edtulo 2",
      stop3_entity: "Parada 3",
      stop3_title: "T\u00edtulo 3",
      stop4_entity: "Parada 4",
      stop4_title: "T\u00edtulo 4",
      stop5_entity: "Parada 5",
      stop5_title: "T\u00edtulo 5",
      stop6_entity: "Parada 6",
      stop6_title: "T\u00edtulo 6",
    };

    const helpers = {
      primary_entity: "Se usa si quieres forzar una parada principal concreta.",
      stop1_entity: "Entidad sensor.vigobus_* que quieras mostrar.",
      stop2_entity: "Entidad sensor.vigobus_* que quieras mostrar.",
      stop3_entity: "Entidad sensor.vigobus_* que quieras mostrar.",
      stop4_entity: "Entidad sensor.vigobus_* que quieras mostrar.",
      stop5_entity: "Entidad sensor.vigobus_* que quieras mostrar.",
      stop6_entity: "Entidad sensor.vigobus_* que quieras mostrar.",
      language: "Auto usa el idioma de Home Assistant.",
      next_buses_count: "Cu\u00e1ntos pr\u00f3ximos buses se muestran por parada.",
      max_stops: "M\u00e1ximo de paradas secundarias visibles.",
      show_alerts: "Mostrar bloque de avisos por l\u00ednea en la tarjeta.",
      alerts_only_main_line: "Filtra avisos solo para la l\u00ednea principal actual.",
      alerts_max: "M\u00e1ximo de avisos a mostrar.",
    };

    const schema = [
      { name: "title", selector: { text: {} } },
      {
        name: "language",
        selector: {
          select: {
            options: [
              { label: "Auto", value: "auto" },
              { label: "Espa\u00f1ol", value: "es" },
              { label: "Galego", value: "gl" },
              { label: "English", value: "en" },
            ],
          },
        },
      },
      { name: "accent_color", selector: { text: {} } },
      { name: "primary_entity", selector: { entity: {} } },
      { name: "next_buses_count", selector: { number: { min: 1, max: 6, mode: "box" } } },
      { name: "max_stops", selector: { number: { min: 1, max: 6, mode: "box" } } },
      { name: "compact", selector: { boolean: {} } },
      { name: "show_all_stops", selector: { boolean: {} } },
      { name: "show_debug", selector: { boolean: {} } },
      { name: "show_alerts", selector: { boolean: {} } },
      { name: "alerts_only_main_line", selector: { boolean: {} } },
      { name: "alerts_max", selector: { number: { min: 1, max: 10, mode: "box" } } },
      { type: "expandable", name: "stops", title: "Paradas seleccionadas", schema: [
        { name: "stop1_entity", selector: { entity: {} } },
        { name: "stop1_title", selector: { text: {} } },
        { name: "stop2_entity", selector: { entity: {} } },
        { name: "stop2_title", selector: { text: {} } },
        { name: "stop3_entity", selector: { entity: {} } },
        { name: "stop3_title", selector: { text: {} } },
        { name: "stop4_entity", selector: { entity: {} } },
        { name: "stop4_title", selector: { text: {} } },
        { name: "stop5_entity", selector: { entity: {} } },
        { name: "stop5_title", selector: { text: {} } },
        { name: "stop6_entity", selector: { entity: {} } },
        { name: "stop6_title", selector: { text: {} } },
      ] },
    ];

    return {
      schema,
      computeLabel: (field) => labels[field.name],
      computeHelper: (field) => helpers[field.name],
    };
  }

  constructor() {
    super();
    this._config = {
      title: "VigoBus",
      primary_entity: "",
      max_stops: 6,
      next_buses_count: 3,
      compact: false,
      show_all_stops: true,
      show_debug: false,
      show_alerts: true,
      alerts_only_main_line: false,
      alerts_max: 3,
      accent_color: "#2a7fff",
      language: "auto",
      device_location_mode: false,
      device_location_title: "",
      device_location_tie_margin_m: 60,
      device_location_max_candidates: 3,
      device_location_refresh_seconds: 45,
      device_location_source: "auto",
      stops: [],
    };
    this._deviceLocationState = null;
    this._deviceLocationTimer = null;
    this.attachShadow({ mode: "open" });
  }

  setConfig(config) {
    if (!config) {
      throw new Error("Config is required");
    }

    this._config = {
      ...this._config,
      ...config,
      max_stops: Number(config.max_stops ?? this._config.max_stops ?? 6),
      next_buses_count: Number(config.next_buses_count ?? this._config.next_buses_count ?? 3),
      alerts_max: Number(config.alerts_max ?? this._config.alerts_max ?? 3),
      device_location_mode: Boolean(config.device_location_mode ?? this._config.device_location_mode ?? false),
      device_location_tie_margin_m: Number(
        config.device_location_tie_margin_m ?? this._config.device_location_tie_margin_m ?? 60
      ),
      device_location_max_candidates: Number(
        config.device_location_max_candidates ?? this._config.device_location_max_candidates ?? 3
      ),
      device_location_refresh_seconds: Number(
        config.device_location_refresh_seconds ?? this._config.device_location_refresh_seconds ?? 45
      ),
      device_location_source: ["auto", "browser", "person"].includes(
        String(config.device_location_source ?? this._config.device_location_source ?? "auto").toLowerCase()
      )
        ? String(config.device_location_source ?? this._config.device_location_source ?? "auto").toLowerCase()
        : "auto",
      stops: normalizeConfiguredStops(config),
    };
    this._syncDeviceLocationLoop();
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  getCardSize() {
    return this._config.compact ? 3 : 6;
  }

  connectedCallback() {
    this._syncDeviceLocationLoop();
  }

  disconnectedCallback() {
    this._stopDeviceLocationLoop();
  }

  _syncDeviceLocationLoop() {
    if (!this._config?.device_location_mode || !this.isConnected) {
      this._stopDeviceLocationLoop();
      return;
    }

    if (this._deviceLocationTimer) {
      return;
    }

    this._refreshDeviceLocation();
    const seconds = Math.max(15, Number(this._config.device_location_refresh_seconds) || 45);
    this._deviceLocationTimer = setInterval(() => this._refreshDeviceLocation(), seconds * 1000);
  }

  _stopDeviceLocationLoop() {
    if (this._deviceLocationTimer) {
      clearInterval(this._deviceLocationTimer);
      this._deviceLocationTimer = null;
    }
  }

  async _lookupNearestByCoords(lat, lon) {
    if (!this._hass?.connection) {
      throw new Error("no_connection");
    }
    const result = await this._hass.connection.sendMessagePromise({
      type: "call_service",
      domain: "vigobus",
      service: "nearest_stops",
      service_data: {
        latitude: lat,
        longitude: lon,
        tie_margin_m: Number(this._config.device_location_tie_margin_m) || 60,
        max_candidates: Number(this._config.device_location_max_candidates) || 3,
      },
      return_response: true,
    });
    return Array.isArray(result?.response?.candidates) ? result.response.candidates : [];
  }

  _findPersonForViewer() {
    const uid = this._hass?.user?.id;
    const states = this._hass?.states || {};
    if (!uid) {
      return null;
    }
    for (const entityId of Object.keys(states)) {
      if (!entityId.startsWith("person.")) {
        continue;
      }
      const attrs = states[entityId]?.attributes || {};
      if (
        attrs.user_id === uid &&
        attrs.latitude !== null &&
        attrs.latitude !== undefined &&
        attrs.longitude !== null &&
        attrs.longitude !== undefined
      ) {
        return states[entityId];
      }
    }
    return null;
  }

  _applyCandidates(candidates, source) {
    const previousSelected = this._deviceLocationState?.selectedId;
    const stillValid = candidates.some((candidate) => candidate.id === previousSelected);
    this._deviceLocationState = {
      status: candidates.length ? "ready" : "empty",
      error: null,
      candidates,
      selectedId: stillValid ? previousSelected : candidates[0]?.id ?? null,
      updatedAt: new Date().toISOString(),
      source,
    };
    this._render();
  }

  async _fallbackToPerson(fallbackError) {
    const person = this._findPersonForViewer();
    if (!person) {
      this._deviceLocationState = {
        ...this._deviceLocationState,
        status: "error",
        error: fallbackError || "no_geolocation",
        candidates: this._deviceLocationState?.candidates || [],
        selectedId: this._deviceLocationState?.selectedId ?? null,
      };
      this._render();
      return;
    }
    try {
      this._deviceLocationState = { ...this._deviceLocationState, status: "loading" };
      this._render();
      const candidates = await this._lookupNearestByCoords(
        person.attributes.latitude,
        person.attributes.longitude
      );
      this._applyCandidates(candidates, "person");
    } catch (err) {
      this._deviceLocationState = {
        ...this._deviceLocationState,
        status: "error",
        error: "service_error",
      };
      this._render();
    }
  }

  _refreshDeviceLocation() {
    const source = String(this._config.device_location_source || "auto").toLowerCase();

    // Person-only mode, or a WebView/browser without geolocation (e.g. the
    // Home Assistant Companion app): use the viewer's person entity, whose
    // coordinates the app already reports to the server.
    if (source === "person" || !navigator.geolocation) {
      if (source === "browser") {
        this._deviceLocationState = {
          status: "error",
          error: "no_geolocation",
          candidates: [],
          selectedId: null,
          updatedAt: null,
        };
        this._render();
        return;
      }
      this._deviceLocationState = {
        status: "locating",
        error: null,
        candidates: this._deviceLocationState?.candidates || [],
        selectedId: this._deviceLocationState?.selectedId ?? null,
        updatedAt: this._deviceLocationState?.updatedAt ?? null,
      };
      this._render();
      this._fallbackToPerson("no_geolocation");
      return;
    }

    this._deviceLocationState = {
      status: "locating",
      error: null,
      candidates: this._deviceLocationState?.candidates || [],
      selectedId: this._deviceLocationState?.selectedId ?? null,
      updatedAt: this._deviceLocationState?.updatedAt ?? null,
    };
    this._render();

    const allowPersonFallback = source !== "browser";

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          this._deviceLocationState = { ...this._deviceLocationState, status: "loading" };
          this._render();
          const candidates = await this._lookupNearestByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
          this._applyCandidates(candidates, "browser");
        } catch (err) {
          this._deviceLocationState = {
            ...this._deviceLocationState,
            status: "error",
            error: "service_error",
          };
          this._render();
        }
      },
      (geoError) => {
        // Geolocation denied/unavailable is the typical Companion-app case:
        // fall back to the viewer's person coordinates when allowed.
        const mappedError = geoError?.code === 1 ? "permission_denied" : "position_unavailable";
        if (allowPersonFallback) {
          this._fallbackToPerson(mappedError);
        } else {
          this._deviceLocationState = {
            ...this._deviceLocationState,
            status: "error",
            error: mappedError,
          };
          this._render();
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 20000 }
    );
  }

  _selectDeviceCandidate(stopId) {
    if (!this._deviceLocationState) {
      return;
    }
    this._deviceLocationState = { ...this._deviceLocationState, selectedId: stopId };
    this._render();
  }

  _renderDeviceLocationSection(locale) {
    const state = this._deviceLocationState || { status: "locating", candidates: [], selectedId: null };
    const title = String(this._config.device_location_title || "").trim() || t(locale, "my_location");

    let body;
    if (state.status === "error") {
      const key =
        state.error === "permission_denied"
          ? "location_permission_denied"
          : state.error === "no_geolocation"
          ? "location_unsupported"
          : "location_unavailable";
      body = `<div class="meta">${escapeHtml(t(locale, key))}</div>`;
    } else if (state.status === "loading") {
      body = `<div class="meta">${escapeHtml(t(locale, "loading_stops"))}</div>`;
    } else if (state.status === "empty") {
      body = `<div class="meta">${escapeHtml(t(locale, "no_nearby_stops"))}</div>`;
    } else if (!state.candidates.length) {
      body = `<div class="meta">${escapeHtml(t(locale, "locating"))}</div>`;
    } else {
      const selected =
        state.candidates.find((candidate) => candidate.id === state.selectedId) || state.candidates[0];
      const nextBusCount = Math.max(1, Number(this._config.next_buses_count) || 3);
      const buses = Array.isArray(selected?.buses) ? selected.buses.slice(0, nextBusCount) : [];
      const minutes = selected?.next_minutes;

      body = `
        ${
          state.candidates.length > 1
            ? `<div class="candidate-row">
                ${state.candidates
                  .map(
                    (candidate) => `
                  <button
                    class="candidate-pill${candidate.id === selected.id ? " active" : ""}"
                    type="button"
                    data-candidate-id="${escapeHtml(candidate.id)}"
                  >${escapeHtml(candidate.name || candidate.id)} · ${Number(candidate.distance_m || 0).toFixed(0)} m</button>
                `
                  )
                  .join("")}
              </div>`
            : ""
        }
        <div class="hero-top" style="margin-top: ${state.candidates.length > 1 ? "12px" : "0"};">
          <div>
            <div class="stop-name">${escapeHtml(selected?.name || "-")}</div>
            <div class="meta">${escapeHtml(t(locale, "distance"))}: <b>${Number(selected?.distance_m || 0).toFixed(0)} m</b></div>
          </div>
          <div class="main-time">
            ${minutes === null || minutes === undefined ? escapeHtml(t(locale, "no_estimations")) : escapeHtml(formatShortDuration(minutes))}
            <small>${escapeHtml(t(locale, "arrival"))}</small>
          </div>
        </div>
        ${
          buses.length
            ? `<div class="next-list">
                ${buses
                  .map(
                    (bus) => `
                  <div class="next-item">
                    <strong>${escapeHtml(bus.linea || "-")}</strong>
                    <span>${escapeHtml(formatShortDuration(bus.minutos))}</span>
                    <span class="next-route">${escapeHtml(bus.ruta || "-")}</span>
                  </div>
                `
                  )
                  .join("")}
              </div>`
            : `<div class="meta" style="margin-top:6px;">${escapeHtml(t(locale, "no_upcoming"))}</div>`
        }
      `;
    }

    return `
      <div class="section device-location-section">
        <h4>${escapeHtml(title)}</h4>
        <div class="hero" style="margin:0;">
          ${body}
        </div>
      </div>
    `;
  }

  _render() {
    if (!this._hass || !this._config) {
      return;
    }

    const locale = getLocale(this._config, this._hass);
    const groups = sortGroupsForDisplay(buildSelectedGroups(this._hass, this._config));
    const primaryGroup = getPrimaryGroup(groups, this._config.primary_entity);
    const compact = Boolean(this._config.compact);
    const mainMinutes = getMinutesFromEntity(primaryGroup?.entity);
    const mainLine = getLineFromGroup(primaryGroup);
    const mainRouteEntries = getRouteEntriesFromGroup(primaryGroup);
    const mainRoute = mainRouteEntries.map((item) => formatRouteWithLine(item.line || mainLine, item.route)).join(" | ");
    const mainRouteLabel = mainRouteEntries.length > 1 ? t(locale, "routes") : t(locale, "route");
    const mainDistance = getDistanceFromGroup(primaryGroup);
    const updatedAt = getUpdatedAtFromGroup(primaryGroup);
    const maxStops = Math.max(1, Number(this._config.max_stops) || 6);
    const nextBusCount = Math.max(1, Number(this._config.next_buses_count) || 3);

    const secondaryGroups = groups.filter((group) => group.key !== primaryGroup?.key);
    const visibleSecondary = this._config.show_all_stops ? secondaryGroups.slice(0, maxStops) : [];

    const statusShort = mainMinutes === null ? t(locale, "no_estimations") : formatShortDuration(mainMinutes);
    const accent = this._config.accent_color || "#2a7fff";
    const nextBuses = getNextBuses(primaryGroup, nextBusCount);
    const mainTitle = getDisplayTitle(primaryGroup, t(locale, "selected_stops"));
    const stale = isGroupStale(primaryGroup);
    const alerts = getAlertsFromGroup(primaryGroup);
    const visibleAlerts = filterAlerts(
      alerts,
      mainLine,
      Boolean(this._config.alerts_only_main_line),
      this._config.alerts_max
    );

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          --vigobus-bg: linear-gradient(135deg, rgba(17,24,39,0.96), rgba(15,118,110,0.86));
          --vigobus-surface: rgba(255,255,255,0.08);
          --vigobus-text: #ffffff;
          --vigobus-muted: rgba(255,255,255,0.72);
          --vigobus-accent: ${accent};
          --vigobus-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
          color: var(--vigobus-text);
          font-family: var(--paper-font-body1_-_font-family, var(--ha-font-family, sans-serif));
        }

        ha-card {
          overflow: hidden;
          border-radius: 24px;
          background: var(--vigobus-bg);
          box-shadow: var(--vigobus-shadow);
          border: 1px solid rgba(255,255,255,0.12);
        }

        ha-card.compact {
          border-radius: 18px;
        }

        .header {
          padding: 20px 20px 10px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .title {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .title h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .title .subtitle {
          margin: 0;
          color: var(--vigobus-muted);
          font-size: 13px;
        }

        .badge {
          min-width: 86px;
          padding: 10px 12px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.08));
          border: 1px solid rgba(255,255,255,0.12);
          text-align: right;
          backdrop-filter: blur(6px);
        }

        .badge .minutes {
          font-size: 22px;
          font-weight: 900;
          line-height: 1;
        }

        .badge .label {
          margin-top: 4px;
          color: var(--vigobus-muted);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .hero {
          margin: 0 20px 18px;
          padding: 18px;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
          border: 1px solid rgba(255,255,255,0.10);
        }

        .hero-top {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
        }

        .hero-top > div {
          min-width: 0;
        }

        .stop-name {
          font-size: 17px;
          font-weight: 800;
          margin: 0 0 6px;
        }

        .meta {
          color: var(--vigobus-muted);
          font-size: 13px;
          line-height: 1.5;
        }

        .main-time {
          font-size: 36px;
          font-weight: 900;
          line-height: 1;
          color: #fff;
          text-align: right;
        }

        .main-time small {
          font-size: 14px;
          font-weight: 700;
          color: var(--vigobus-muted);
        }

        .pill-row {
          margin-top: 16px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pill {
          padding: 8px 11px;
          border-radius: 999px;
          background: rgba(255,255,255,0.11);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-size: 12px;
        }

        .next-list {
          display: grid;
          gap: 8px;
          margin-top: 14px;
        }

        .next-item {
          display: grid;
          grid-template-columns: auto auto minmax(0, 1fr);
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 14px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-size: 13px;
        }

        .next-item strong {
          font-weight: 800;
        }

        .next-route {
          color: var(--vigobus-muted);
          min-width: 0;
          text-align: right;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .alert-item {
          grid-template-columns: auto minmax(0, 1fr) auto;
        }

        .alert-title {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .alert-lines {
          color: var(--vigobus-muted);
          white-space: nowrap;
        }

        .section {
          padding: 0 20px 20px;
        }

        ha-card.compact .header {
          padding: 14px 14px 8px;
        }

        ha-card.compact .title h3 {
          font-size: 18px;
        }

        ha-card.compact .hero {
          margin: 0 14px 12px;
          padding: 12px;
          border-radius: 14px;
        }

        ha-card.compact .stop-name {
          font-size: 15px;
          margin: 0 0 4px;
        }

        ha-card.compact .meta {
          font-size: 12px;
        }

        ha-card.compact .main-time {
          font-size: 30px;
        }

        ha-card.compact .pill-row {
          margin-top: 10px;
          gap: 8px;
        }

        ha-card.compact .pill {
          font-size: 11px;
          padding: 6px 9px;
        }

        ha-card.compact .next-list {
          margin-top: 10px;
        }

        ha-card.compact .next-item {
          padding: 7px 8px;
          font-size: 12px;
        }

        ha-card.compact .section {
          padding: 0 14px 14px;
        }

        ha-card.compact .stop-list {
          gap: 8px;
        }

        ha-card.compact .stop-item {
          padding: 10px;
          border-radius: 12px;
        }

        ha-card.compact .stop-item .main-time {
          font-size: 24px;
        }

        ha-card.compact .debug {
          margin: 0 14px 14px;
          padding: 10px 12px;
          font-size: 11px;
        }

        .section h4 {
          margin: 0 0 10px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--vigobus-muted);
        }

        .stop-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .stop-item {
          padding: 18px;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
          border: 1px solid rgba(255,255,255,0.10);
          display: grid;
          gap: 12px;
        }

        .mini-pill-row {
          margin-top: 2px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .stop-item .main-time {
          font-size: 30px;
        }

        .secondary-alerts .next-item strong {
          min-width: 12px;
          text-align: center;
        }

        .debug {
          margin: 0 20px 20px;
          padding: 13px 15px;
          border-radius: 16px;
          background: rgba(0,0,0,0.18);
          border: 1px dashed rgba(255,255,255,0.18);
          color: var(--vigobus-muted);
          font-size: 12px;
          line-height: 1.5;
        }

        .empty {
          padding: 18px;
          color: var(--vigobus-muted);
        }

        .candidate-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .candidate-pill {
          font: inherit;
          cursor: pointer;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.14);
          color: #fff;
          font-size: 12px;
        }

        .candidate-pill.active {
          background: var(--vigobus-accent);
          border-color: var(--vigobus-accent);
          font-weight: 700;
        }

        .device-location-section .hero {
          padding: 16px;
          border-radius: 18px;
        }

        .accent-line {
          height: 4px;
          background: linear-gradient(90deg, var(--vigobus-accent), rgba(255,255,255,0));
        }

        @media (max-width: 600px) {
          .header {
            padding: 14px 14px 8px;
          }

          .title h3 {
            font-size: 18px;
          }

          .section {
            padding: 0 14px 14px;
          }

          .hero {
            margin: 0 14px 12px;
            padding: 12px;
            border-radius: 14px;
          }

          .hero-top {
            flex-direction: column;
            gap: 8px;
          }

          .main-time {
            text-align: left;
            font-size: 30px;
          }

          .meta {
            font-size: 12px;
            line-height: 1.45;
          }

          .pill-row {
            margin-top: 10px;
            gap: 8px;
          }

          .pill {
            font-size: 11px;
            padding: 6px 9px;
          }

          .next-item {
            grid-template-columns: auto minmax(0, 1fr);
            row-gap: 4px;
            align-items: start;
          }

          .next-route {
            grid-column: 1 / -1;
            text-align: left;
            white-space: normal;
            overflow-wrap: anywhere;
          }

          .alert-item {
            grid-template-columns: auto minmax(0, 1fr);
          }

          .alert-title {
            white-space: normal;
            overflow-wrap: anywhere;
          }

          .alert-lines {
            grid-column: 1 / -1;
            white-space: normal;
            overflow-wrap: anywhere;
            font-size: 11px;
          }
        }
      </style>

      <ha-card class="${compact ? "compact" : ""}">
        <div class="accent-line"></div>
        <div class="header">
          <div class="title">
            <h3>${escapeHtml(this._config.title || "VigoBus")}</h3>
            <div class="subtitle">${escapeHtml(mainTitle)}</div>
            ${primaryGroup ? `<div class="subtitle">${escapeHtml(t(locale, "updated"))}: ${escapeHtml(formatUpdatedAt(updatedAt, locale))}</div>` : ""}
          </div>
        </div>

        ${primaryGroup ? `
          <div class="hero">
            <div class="hero-top">
              <div>
                <div class="stop-name">${escapeHtml(mainTitle)}</div>
                <div class="meta">${escapeHtml(t(locale, "line"))}: <b>${escapeHtml(mainLine)}</b><br>${escapeHtml(mainRouteLabel)}: <b>${escapeHtml(mainRoute)}</b>${mainDistance !== null ? `<br>${escapeHtml(t(locale, "distance"))}: <b>${mainDistance.toFixed(0)} m</b>` : ""}</div>
              </div>
              <div class="main-time">
                ${escapeHtml(statusShort)}
                <small>${escapeHtml(t(locale, "arrival"))}</small>
              </div>
            </div>
            <div class="pill-row">
              <div class="pill">${escapeHtml(primaryGroup.key === "nearest" ? t(locale, "nearest") : t(locale, "main_stop"))}</div>
              <div class="pill">${nextBuses.length} ${escapeHtml(nextBuses.length === 1 ? t(locale, "bus") : t(locale, "buses"))}</div>
              ${this._config.show_alerts ? `<div class="pill">${escapeHtml(visibleAlerts.length)} ${escapeHtml(t(locale, "alerts"))}</div>` : ""}
              ${stale ? `<div class="pill">${escapeHtml(t(locale, "stale"))}</div><div class="pill">${escapeHtml(t(locale, "offline"))}</div>` : ""}
              ${primaryGroup.entity?.state === "unknown" ? `<div class="pill">${escapeHtml(t(locale, "no_data"))}</div>` : ""}
            </div>
            ${nextBuses.length ? `
              <div class="next-list">
                <div style="color: var(--vigobus-muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; margin-top: 4px;">${escapeHtml(t(locale, "following"))}</div>
                ${nextBuses.map((bus) => `
                  <div class="next-item">
                    <strong>${escapeHtml(bus.line)}</strong>
                    <span>${escapeHtml(formatShortDuration(bus.minutes))}</span>
                    <span class="next-route">${escapeHtml(bus.route)}</span>
                  </div>
                `).join("")}
              </div>
            ` : `<div class="next-list"><div style="color: var(--vigobus-muted); font-size: 12px;">${escapeHtml(t(locale, "no_upcoming"))}</div></div>`}

            ${this._config.show_alerts ? `<div class="next-list">
              <div style="color: var(--vigobus-muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; margin-top: 4px;">${escapeHtml(t(locale, "alerts"))}</div>
              ${visibleAlerts.length ? visibleAlerts.map((alert) => `
                <div class="next-item alert-item">
                  <strong>!</strong>
                  <span class="alert-title">${escapeHtml(alert?.title || "-")}</span>
                  <span class="alert-lines">${escapeHtml(alert?.lineas || "")}</span>
                </div>
              `).join("") : `<div style="color: var(--vigobus-muted); font-size: 12px;">${escapeHtml(t(locale, "no_alerts"))}</div>`}
            </div>` : ""}
          </div>
        ` : `
          <div class="empty">${escapeHtml(t(locale, "no_entities"))}</div>
        `}

        ${visibleSecondary.length ? `
          <div class="section">
            <h4>${escapeHtml(t(locale, "other_stops"))}</h4>
            <div class="stop-list">
              ${visibleSecondary.map((group) => {
                const minutes = getMinutesFromEntity(group.entity);
                const line = getLineFromGroup(group);
                const routeEntries = getRouteEntriesFromGroup(group);
                const route = routeEntries.map((item) => formatRouteWithLine(item.line || line, item.route)).join(" | ");
                const routeLabel = routeEntries.length > 1 ? t(locale, "routes") : t(locale, "route");
                const nextStops = getNextBuses(group, nextBusCount);
                const groupAlerts = getAlertsFromGroup(group);
                const filteredAlerts = filterAlerts(
                  groupAlerts,
                  line,
                  Boolean(this._config.alerts_only_main_line),
                  this._config.alerts_max
                );
                return `
                  <div class="stop-item">
                    <div class="hero-top">
                      <div>
                        <div class="stop-name">${escapeHtml(group.title)}</div>
                        <div class="meta">${escapeHtml(t(locale, "line"))}: <b>${escapeHtml(line)}</b><br>${escapeHtml(routeLabel)}: <b>${escapeHtml(route)}</b></div>
                      </div>
                      <div class="main-time">${minutes === null ? escapeHtml(t(locale, "unavailable")) : escapeHtml(formatShortDuration(minutes))}</div>
                    </div>

                    <div class="mini-pill-row">
                      <div class="pill">${nextStops.length} ${escapeHtml(nextStops.length === 1 ? t(locale, "bus") : t(locale, "buses"))}</div>
                      ${this._config.show_alerts ? `<div class="pill">${filteredAlerts.length} ${escapeHtml(t(locale, "alerts"))}</div>` : ""}
                    </div>

                    ${nextStops.length ? `
                      <div class="next-list">
                        <div style="color: var(--vigobus-muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; margin-top: 2px;">${escapeHtml(t(locale, "following"))}</div>
                        ${nextStops.map((item) => `
                          <div class="next-item">
                            <strong>${escapeHtml(item.line)}</strong>
                            <span>${escapeHtml(formatShortDuration(item.minutes))}</span>
                            <span class="next-route">${escapeHtml(item.route || "-")}</span>
                          </div>
                        `).join("")}
                      </div>
                    ` : `<div class="meta" style="margin-top: 2px;">${escapeHtml(t(locale, "no_upcoming"))}</div>`}

                    ${this._config.show_alerts
                      ? (filteredAlerts.length
                        ? `<div class="next-list secondary-alerts">
                            <div style="color: var(--vigobus-muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; margin-top: 2px;">${escapeHtml(t(locale, "alerts"))}</div>
                            ${filteredAlerts.map((item) => `
                              <div class="next-item alert-item">
                                <strong>!</strong>
                                <span class="alert-title">${escapeHtml(item?.title || "-")}</span>
                                <span class="alert-lines">${escapeHtml(item?.lineas || "")}</span>
                              </div>
                            `).join("")}
                          </div>`
                        : `<div class="meta" style="margin-top: 2px;">${escapeHtml(t(locale, "no_alerts"))}</div>`)
                      : ""}
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        ` : ""}

        ${this._config.device_location_mode ? this._renderDeviceLocationSection(locale) : ""}

        ${this._config.show_debug && primaryGroup ? `
          <div class="debug">
            ${escapeHtml(t(locale, "debug_nearest"))}:<br>
            id: ${escapeHtml(primaryGroup.entity?.attributes?.nearest_id ?? "-")}<br>
            stop_id: ${escapeHtml(primaryGroup.entity?.attributes?.nearest_stop_id ?? "-")}<br>
            home: ${escapeHtml(primaryGroup.entity?.attributes?.home_lat ?? "-")}, ${escapeHtml(primaryGroup.entity?.attributes?.home_lon ?? "-")}<br>
            distancia: ${escapeHtml(primaryGroup.entity?.attributes?.nearest_dist_m ?? "-")}<br>
            stops_count: ${escapeHtml(primaryGroup.entity?.attributes?.stops_count ?? "-")}
          </div>
        ` : ""}
      </ha-card>
    `;

    this.shadowRoot.querySelectorAll(".candidate-pill[data-candidate-id]").forEach((button) => {
      button.addEventListener("click", () => {
        this._selectDeviceCandidate(button.dataset.candidateId);
      });
    });
  }
}

class VigoBusCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  setConfig(config) {
    this._config = {
      title: "VigoBus",
      primary_entity: "",
      max_stops: 6,
      next_buses_count: 3,
      compact: false,
      show_all_stops: true,
      show_debug: false,
      show_alerts: true,
      alerts_only_main_line: false,
      alerts_max: 3,
      accent_color: "#2a7fff",
      language: "auto",
      device_location_mode: false,
      device_location_title: "",
      device_location_tie_margin_m: 60,
      device_location_max_candidates: 3,
      device_location_refresh_seconds: 45,
      device_location_source: "auto",
      stops: [],
      ...config,
    };
    this._config.stops = normalizeConfiguredStops(this._config.stops);
    this._render();
  }

  _emitConfig(changes) {
    const config = { ...this._config, ...changes };
    if (changes.stops !== undefined) {
      config.stops = normalizeConfiguredStops(changes.stops);
    }
    this._config = config;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
    this._render();
  }

  _updateStop(index, changes) {
    const stops = normalizeConfiguredStops(this._config.stops);
    const current = stops[index] || { entity: "", title: "" };
    stops[index] = { ...current, ...changes };
    this._emitConfig({ stops });
  }

  _removeStop(index) {
    const stops = normalizeConfiguredStops(this._config.stops);
    stops.splice(index, 1);
    this._emitConfig({ stops });
  }

  _addStop() {
    const stops = normalizeConfiguredStops(this._config.stops);
    stops.push({ entity: "", title: "" });
    this._emitConfig({ stops });
  }

  _render() {
    if (!this.shadowRoot) {
      return;
    }

    const config = this._config || {};
    const locale = getLocale(config, this._hass);
    const stops = normalizeConfiguredStops(config.stops);
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: grid;
          gap: 14px;
          padding: 12px 4px 8px;
        }

        .row {
          display: grid;
          gap: 8px;
        }

        .grid2 {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .hint {
          color: var(--secondary-text-color);
          font-size: 12px;
          line-height: 1.4;
        }

        .section-title {
          font-weight: 700;
          margin-top: 4px;
        }

        .stop-list {
          display: grid;
          gap: 10px;
        }

        .stop-row {
          padding: 12px;
          border-radius: 16px;
          border: 1px solid var(--divider-color);
          background: rgba(255, 255, 255, 0.03);
          display: grid;
          gap: 10px;
        }

        .stop-row-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .stop-row-title {
          font-weight: 700;
          color: var(--primary-text-color);
        }

        .stop-row-actions button,
        .add-stop {
          border: 0;
          border-radius: 12px;
          padding: 10px 12px;
          font: inherit;
          cursor: pointer;
          background: var(--primary-color);
          color: var(--text-primary-color, white);
        }

        .stop-row-actions .remove {
          background: rgba(255, 0, 0, 0.14);
          color: var(--error-color);
        }

        .stop-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr auto;
          gap: 10px;
        }

        .small-hint {
          color: var(--secondary-text-color);
          font-size: 12px;
        }
      </style>

      <div class="container">
        <div class="row">
          <div class="section-title">Apariencia</div>
          <ha-textfield
            id="title"
            label="T\u00edtulo"
          ></ha-textfield>
          <ha-textfield
            id="accent_color"
            label="Color acento"
          ></ha-textfield>
          <div class="grid2">
            <label style="display:grid; gap:6px;">
              <span class="small-hint">${escapeHtml(t(locale, "language"))}</span>
              <select id="language" style="padding: 10px 12px; border-radius: 12px; background: var(--card-background-color); color: var(--primary-text-color); border: 1px solid var(--divider-color);">
                <option value="auto">${escapeHtml(t(locale, "auto"))}</option>
                <option value="es">${escapeHtml(t(locale, "spanish"))}</option>
                <option value="gl">${escapeHtml(t(locale, "galician"))}</option>
                <option value="en">${escapeHtml(t(locale, "english"))}</option>
              </select>
            </label>
            <ha-textfield
              id="next_buses_count"
              label="${escapeHtml(t(locale, "next_count"))}"
              type="number"
            ></ha-textfield>
          </div>
        </div>

        <div class="row">
          <div class="section-title">Parada principal</div>
          <ha-entity-picker
            id="primary_entity"
          ></ha-entity-picker>
          <div class="hint">${escapeHtml(t(locale, "stop_hint"))}</div>
        </div>

        <div class="grid2">
          <ha-textfield
            id="max_stops"
            label="M\u00e1ximo de paradas"
            type="number"
          ></ha-textfield>
          <div>
            <label style="display:flex; align-items:center; gap:10px; padding-top: 20px;">
              <ha-switch
                id="compact"
              ></ha-switch>
              <span>Modo compacto</span>
            </label>
          </div>
        </div>

        <div class="grid2">
          <div>
            <label style="display:flex; align-items:center; gap:10px;">
              <ha-switch
                id="show_all_stops"
              ></ha-switch>
              <span>Mostrar otras paradas</span>
            </label>
          </div>
          <div>
            <label style="display:flex; align-items:center; gap:10px;">
              <ha-switch
                id="show_debug"
              ></ha-switch>
              <span>${escapeHtml(t(locale, "show_debug"))}</span>
            </label>
          </div>
        </div>

        <div class="grid2">
          <div>
            <label style="display:flex; align-items:center; gap:10px;">
              <ha-switch
                id="show_alerts"
              ></ha-switch>
              <span>${escapeHtml(t(locale, "show_alerts"))}</span>
            </label>
          </div>
          <div>
            <label style="display:flex; align-items:center; gap:10px;">
              <ha-switch
                id="alerts_only_main_line"
              ></ha-switch>
              <span>${escapeHtml(t(locale, "alerts_only_main_line"))}</span>
            </label>
          </div>
        </div>

        <div class="row">
          <ha-textfield
            id="alerts_max"
            label="${escapeHtml(t(locale, "alerts_max"))}"
            type="number"
          ></ha-textfield>
        </div>

        <div class="hint">
          ${escapeHtml(t(locale, "stop_hint"))}
        </div>

        <div class="row">
          <div class="section-title">${escapeHtml(t(locale, "my_location"))}</div>
          <label style="display:flex; align-items:center; gap:10px;">
            <ha-switch id="device_location_mode"></ha-switch>
            <span>${escapeHtml(t(locale, "device_location_enable"))}</span>
          </label>
          <ha-textfield id="device_location_title" label="${escapeHtml(t(locale, "title"))}"></ha-textfield>
          <div class="grid2">
            <ha-textfield
              id="device_location_tie_margin_m"
              label="${escapeHtml(t(locale, "device_location_margin"))}"
              type="number"
            ></ha-textfield>
            <ha-textfield
              id="device_location_max_candidates"
              label="${escapeHtml(t(locale, "device_location_max_candidates"))}"
              type="number"
            ></ha-textfield>
          </div>
          <ha-textfield
            id="device_location_refresh_seconds"
            label="${escapeHtml(t(locale, "device_location_refresh"))}"
            type="number"
          ></ha-textfield>
          <label style="display:flex; flex-direction:column; gap:4px;">
            <span>${escapeHtml(t(locale, "device_location_source"))}</span>
            <select id="device_location_source">
              <option value="auto">${escapeHtml(t(locale, "device_location_source_auto"))}</option>
              <option value="browser">${escapeHtml(t(locale, "device_location_source_browser"))}</option>
              <option value="person">${escapeHtml(t(locale, "device_location_source_person"))}</option>
            </select>
          </label>
          <div class="hint">${escapeHtml(t(locale, "device_location_hint"))}</div>
        </div>

        <div class="row">
          <div class="section-title">${escapeHtml(t(locale, "selected_stops"))}</div>
          <div class="stop-list" id="stops-list"></div>
          <button class="add-stop" id="add-stop" type="button">+ ${escapeHtml(t(locale, "add_stop"))}</button>
        </div>
      </div>
    `;

    const title = this.shadowRoot.getElementById("title");
    const accentColor = this.shadowRoot.getElementById("accent_color");
    const language = this.shadowRoot.getElementById("language");
    const primaryEntity = this.shadowRoot.getElementById("primary_entity");
    const maxStops = this.shadowRoot.getElementById("max_stops");
    const nextBusesCount = this.shadowRoot.getElementById("next_buses_count");
    const compact = this.shadowRoot.getElementById("compact");
    const showAllStops = this.shadowRoot.getElementById("show_all_stops");
    const showDebug = this.shadowRoot.getElementById("show_debug");
    const showAlerts = this.shadowRoot.getElementById("show_alerts");
    const alertsOnlyMainLine = this.shadowRoot.getElementById("alerts_only_main_line");
    const alertsMax = this.shadowRoot.getElementById("alerts_max");
    const deviceLocationMode = this.shadowRoot.getElementById("device_location_mode");
    const deviceLocationTitle = this.shadowRoot.getElementById("device_location_title");
    const deviceLocationTieMarginM = this.shadowRoot.getElementById("device_location_tie_margin_m");
    const deviceLocationMaxCandidates = this.shadowRoot.getElementById("device_location_max_candidates");
    const deviceLocationRefreshSeconds = this.shadowRoot.getElementById("device_location_refresh_seconds");
    const deviceLocationSource = this.shadowRoot.getElementById("device_location_source");
    const addStop = this.shadowRoot.getElementById("add-stop");
    const stopsList = this.shadowRoot.getElementById("stops-list");

    if (title) {
      title.value = config.title || "VigoBus";
    }
    if (accentColor) {
      accentColor.value = config.accent_color || "#2a7fff";
    }
    if (language) {
      language.value = config.language || "auto";
    }
    if (primaryEntity) {
      primaryEntity.hass = this._hass;
      primaryEntity.value = config.primary_entity || "";
      primaryEntity.includeDomains = ["sensor"];
      primaryEntity.label = t(locale, "primary_label");
    }
    if (maxStops) {
      maxStops.value = String(config.max_stops ?? 6);
    }
    if (nextBusesCount) {
      nextBusesCount.value = String(config.next_buses_count ?? 3);
    }
    if (compact) {
      compact.checked = Boolean(config.compact);
    }
    if (showAllStops) {
      showAllStops.checked = Boolean(config.show_all_stops);
    }
    if (showDebug) {
      showDebug.checked = Boolean(config.show_debug);
    }
    if (showAlerts) {
      showAlerts.checked = Boolean(config.show_alerts ?? true);
    }
    if (alertsOnlyMainLine) {
      alertsOnlyMainLine.checked = Boolean(config.alerts_only_main_line ?? false);
    }
    if (alertsMax) {
      alertsMax.value = String(config.alerts_max ?? 3);
    }
    if (deviceLocationMode) {
      deviceLocationMode.checked = Boolean(config.device_location_mode ?? false);
    }
    if (deviceLocationTitle) {
      deviceLocationTitle.value = config.device_location_title || "";
    }
    if (deviceLocationTieMarginM) {
      deviceLocationTieMarginM.value = String(config.device_location_tie_margin_m ?? 60);
    }
    if (deviceLocationMaxCandidates) {
      deviceLocationMaxCandidates.value = String(config.device_location_max_candidates ?? 3);
    }
    if (deviceLocationRefreshSeconds) {
      deviceLocationRefreshSeconds.value = String(config.device_location_refresh_seconds ?? 45);
    }
    if (deviceLocationSource) {
      deviceLocationSource.value = String(config.device_location_source ?? "auto");
    }

    if (stopsList) {
      stopsList.innerHTML = stops.length
        ? stops.map((stop, index) => `
            <div class="stop-row" data-index="${index}">
              <div class="stop-row-head">
                <div class="stop-row-title">${escapeHtml(t(locale, "main_stop"))} ${index + 1}</div>
                <div class="stop-row-actions">
                  <button class="remove" type="button" data-remove="${index}">✕</button>
                </div>
              </div>
              <div class="stop-grid">
                <ha-entity-picker class="stop-entity" data-index="${index}"></ha-entity-picker>
                <ha-textfield class="stop-title" data-index="${index}" label="${escapeHtml(t(locale, "title"))}"></ha-textfield>
                <div class="small-hint" style="align-self:center;">${escapeHtml(t(locale, "entity_hint"))}</div>
              </div>
            </div>
          `).join("")
        : `<div class="hint">${escapeHtml(t(locale, "entity_hint"))}</div>`;

      const rowEntities = this.shadowRoot.querySelectorAll(".stop-entity");
      const rowTitles = this.shadowRoot.querySelectorAll(".stop-title");
      const removeButtons = this.shadowRoot.querySelectorAll("button[data-remove]");

      rowEntities.forEach((element, index) => {
        element.hass = this._hass;
        element.value = stops[index]?.entity || "";
        element.includeDomains = ["sensor"];
        element.label = t(locale, "entity");
        element.addEventListener("value-changed", (ev) => this._updateStop(index, { entity: ev.detail.value }));
      });

      rowTitles.forEach((element, index) => {
        element.value = stops[index]?.title || "";
        element.addEventListener("input", (ev) => this._updateStop(index, { title: ev.target.value }));
      });

      removeButtons.forEach((button) => {
        button.addEventListener("click", () => this._removeStop(Number(button.dataset.remove)));
      });
    }

    title?.addEventListener("input", (ev) => this._emitConfig({ title: ev.target.value }));
    accentColor?.addEventListener("input", (ev) => this._emitConfig({ accent_color: ev.target.value }));
    language?.addEventListener("change", (ev) => this._emitConfig({ language: ev.target.value }));
    primaryEntity?.addEventListener("value-changed", (ev) => this._emitConfig({ primary_entity: ev.detail.value }));
    maxStops?.addEventListener("input", (ev) => this._emitConfig({ max_stops: Number(ev.target.value) || 6 }));
    nextBusesCount?.addEventListener("input", (ev) => this._emitConfig({ next_buses_count: Number(ev.target.value) || 3 }));
    compact?.addEventListener("change", (ev) => this._emitConfig({ compact: ev.target.checked }));
    showAllStops?.addEventListener("change", (ev) => this._emitConfig({ show_all_stops: ev.target.checked }));
    showDebug?.addEventListener("change", (ev) => this._emitConfig({ show_debug: ev.target.checked }));
    showAlerts?.addEventListener("change", (ev) => this._emitConfig({ show_alerts: ev.target.checked }));
    alertsOnlyMainLine?.addEventListener("change", (ev) => this._emitConfig({ alerts_only_main_line: ev.target.checked }));
    alertsMax?.addEventListener("input", (ev) => this._emitConfig({ alerts_max: Number(ev.target.value) || 3 }));
    deviceLocationMode?.addEventListener("change", (ev) => this._emitConfig({ device_location_mode: ev.target.checked }));
    deviceLocationTitle?.addEventListener("input", (ev) => this._emitConfig({ device_location_title: ev.target.value }));
    deviceLocationTieMarginM?.addEventListener("input", (ev) => this._emitConfig({ device_location_tie_margin_m: Number(ev.target.value) || 60 }));
    deviceLocationMaxCandidates?.addEventListener("input", (ev) => this._emitConfig({ device_location_max_candidates: Number(ev.target.value) || 3 }));
    deviceLocationRefreshSeconds?.addEventListener("input", (ev) => this._emitConfig({ device_location_refresh_seconds: Number(ev.target.value) || 45 }));
    deviceLocationSource?.addEventListener("change", (ev) => this._emitConfig({ device_location_source: ev.target.value || "auto" }));
    addStop?.addEventListener("click", () => this._addStop());
  }
}

customElements.define("vigobus-card", VigoBusCard);
customElements.define("vigobus-card-editor", VigoBusCardEditor);

if (!customElements.get("hui-panel-view")) {
  // No-op, solo para evitar warnings en algunos entornos.
}
