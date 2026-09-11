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
    close: "Cerrar",
    no_alert_details: "Sin más información disponible.",
    alert_period: "Periodo",
    prev: "Ant.",
    next: "Sig.",
    line_filter: "Filtro de l\u00ednea",
    stop_line_filter: "L\u00ednea (opcional)",
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
    live: "En vivo",
    scheduled: "Horario",
    my_location_short: "tu parada",
    tie_break_hint_suffix: "paradas igual de cerca",
    card_style: "Estilo de tarjeta",
    card_style_glass: "Cristal clásico",
    card_style_glass_refined: "Cristal refinado",
    card_style_bold: "Bus urbano (Transit)",
    trip_planner_title: "Planificador de viaje",
    trip_planner_enable: "Activar planificador de viaje",
    trip_destination: "Destino",
    trip_destination_placeholder: "Busca una parada de destino…",
    trip_search_button: "Buscar",
    trip_searching: "Buscando paradas…",
    trip_change_destination: "Cambiar destino",
    trip_planning: "Calculando ruta…",
    trip_no_route: "No se encontró ninguna ruta a ese destino.",
    trip_no_service: "No hay servicio de autobús ese día.",
    trip_error: "No se pudo calcular la ruta. Inténtalo de nuevo.",
    trip_direct: "Directo, sin transbordos",
    trip_transfer_one: "transbordo",
    trip_transfers: "transbordos",
    trip_walk_to: "Camina hasta",
    trip_walk_from: "Camina desde",
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
    close: "Close",
    no_alert_details: "No further details available.",
    alert_period: "Period",
    prev: "Prev",
    next: "Next",
    line_filter: "Line filter",
    stop_line_filter: "Line (optional)",
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
    live: "Live",
    scheduled: "Scheduled",
    my_location_short: "your stop",
    tie_break_hint_suffix: "stops equally close",
    card_style: "Card style",
    card_style_glass: "Classic glass",
    card_style_glass_refined: "Refined glass",
    card_style_bold: "Urban bus (Transit)",
    trip_planner_title: "Trip planner",
    trip_planner_enable: "Enable trip planner",
    trip_destination: "Destination",
    trip_destination_placeholder: "Search for a destination stop…",
    trip_search_button: "Search",
    trip_searching: "Searching stops…",
    trip_change_destination: "Change destination",
    trip_planning: "Calculating route…",
    trip_no_route: "No route found to that destination.",
    trip_no_service: "There's no bus service that day.",
    trip_error: "Couldn't calculate the route. Please try again.",
    trip_direct: "Direct, no transfers",
    trip_transfer_one: "transfer",
    trip_transfers: "transfers",
    trip_walk_to: "Walk to",
    trip_walk_from: "Walk from",
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
    close: "Pechar",
    no_alert_details: "Sen máis información dispoñible.",
    alert_period: "Período",
    prev: "Ant.",
    next: "Seg.",
    line_filter: "Filtro de li\u00f1a",
    stop_line_filter: "Li\u00f1a (opcional)",
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
    live: "En directo",
    scheduled: "Horario",
    my_location_short: "a t\u00faa parada",
    tie_break_hint_suffix: "paradas igual de preto",
    card_style: "Estilo de tarxeta",
    card_style_glass: "Cristal cl\u00e1sico",
    card_style_glass_refined: "Cristal refinado",
    card_style_bold: "Bus urbano (Transit)",
    trip_planner_title: "Planificador de viaxe",
    trip_planner_enable: "Activar planificador de viaxe",
    trip_destination: "Destino",
    trip_destination_placeholder: "Busca unha parada de destino…",
    trip_search_button: "Buscar",
    trip_searching: "Buscando paradas…",
    trip_change_destination: "Cambiar destino",
    trip_planning: "Calculando ruta…",
    trip_no_route: "Non se atopou ningunha ruta a ese destino.",
    trip_no_service: "Non hai servizo de autobús ese día.",
    trip_error: "Non se puido calcular a ruta. Téntao de novo.",
    trip_direct: "Directo, sen transbordos",
    trip_transfer_one: "transbordo",
    trip_transfers: "transbordos",
    trip_walk_to: "Camiña até",
    trip_walk_from: "Camiña desde",
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

function isPlaceholderText(value) {
  // Home Assistant's own sentinel strings for "no state yet" — these are
  // valid entity.state values, not real line/route text, but a plain `||`
  // fallback chain treats them as truthy and displays them verbatim.
  const text = String(value ?? "").trim().toLowerCase();
  return !text || text === "unknown" || text === "unavailable" || text === "none";
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

function formatAlertDate(value, locale) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  const localeTag = locale === "gl" ? "gl-ES" : locale === "es" ? "es-ES" : "en-GB";
  return date.toLocaleDateString(localeTag, { day: "2-digit", month: "2-digit", year: "numeric" });
}

function formatAlertDateRange(alert, locale) {
  const start = formatAlertDate(alert?.inicio, locale);
  const end = formatAlertDate(alert?.fin, locale);
  if (start && end && start !== end) {
    return `${start} – ${end}`;
  }
  return start || end || null;
}

function normalizeStopSuggestions(serviceResult) {
  const stops = serviceResult?.response?.stops;
  return Array.isArray(stops) ? stops : [];
}

function normalizePlanTripResponse(serviceResult) {
  const response = serviceResult?.response;
  if (!response || typeof response !== "object") {
    return { itineraries: [], warnings: ["trip_error"] };
  }
  return {
    itineraries: Array.isArray(response.itineraries) ? response.itineraries : [],
    warnings: Array.isArray(response.warnings) ? response.warnings : [],
  };
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

function computeRenderSignature(hass) {
  // Home Assistant calls the `hass` setter on essentially every state
  // change anywhere in the system, not just for this card's own entities —
  // re-rendering the whole shadow DOM (innerHTML) on every one of those
  // ticks is what caused the visible "jumps" (restarted CSS animations,
  // lost hover/scroll state, needless reflow). Only the entities this card
  // actually reads can affect its output, so hash just those and let the
  // caller skip re-rendering when nothing relevant changed.
  const groups = buildStopGroups(hass);
  const relevant = groups.map((group) => [
    group.key,
    group.entity?.state,
    group.entity?.attributes,
    group.linea?.state,
    group.ruta?.state,
    group.proximos?.state,
  ]);
  return JSON.stringify([hass?.language, relevant]);
}

function normalizeConfiguredStops(configStops) {
  if (Array.isArray(configStops)) {
    return configStops
      .map((item) => ({
        entity: String(item?.entity || "").trim(),
        title: String(item?.title || "").trim(),
        line: String(item?.line || "").trim(),
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
    const line = String(configStops[`stop${index}_line`] || "").trim();
    if (entity) {
      stops.push({ entity, title, line });
    }
  }

  return stops;
}

function isPerDeviceNearestGroup(group) {
  // The integration auto-creates one "nearest_<slugified entity id>" sensor
  // set per tracked person/device_tracker (nearest_devices /
  // auto_nearest_devices). There can be many of these and they're personal,
  // not shared dashboard stops, so they're excluded from the automatic list
  // below. Per-viewer "nearest stop" is instead handled automatically by
  // device_location_mode (see _renderDeviceLocationSection), which resolves
  // to the logged-in viewer without any manual picker. The classic
  // home-based "nearest" key is untouched.
  //
  // The backend exposes this explicitly via the is_device_nearest attribute
  // (integration v2.3.1+); fall back to the "nearest_" key prefix for older
  // backend versions, though that's derived from the (localized) entity_id
  // and is a weaker signal.
  const attrFlag = group?.entity?.attributes?.is_device_nearest;
  if (typeof attrFlag === "boolean") {
    return attrFlag;
  }
  const key = group?.key;
  return typeof key === "string" && key !== "nearest" && key.startsWith("nearest_");
}

function buildSelectedGroups(hass, config) {
  const allGroups = buildStopGroups(hass);
  const configuredStops = normalizeConfiguredStops(config?.stops);
  const withoutDeviceNearest = () => allGroups.filter((group) => !isPerDeviceNearestGroup(group));

  if (!configuredStops.length) {
    return uniqueByKey(withoutDeviceNearest());
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
      lineFilter: stopConfig.line || "",
    });
  }

  return selected.length ? uniqueByKey(selected) : uniqueByKey(withoutDeviceNearest());
}

function resolveLineFilter(group, config) {
  const override = String(group?.lineFilter || "").trim();
  if (override) {
    return override;
  }
  return String(config?.line_filter || "").trim();
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

function getMinutesForGroup(group, lineFilter) {
  if (lineFilter) {
    const buses = getBusesFromGroup(group, lineFilter);
    return buses.length ? buses[0].minutos : null;
  }
  return getMinutesFromEntity(group?.entity);
}

function getLineFromGroup(group, lineFilter) {
  if (lineFilter) {
    return normalizeLine(lineFilter);
  }
  const attrLine = group?.entity?.attributes?.linea;
  if (!isPlaceholderText(attrLine)) {
    return attrLine;
  }
  const sensorLine = group?.linea?.state;
  if (!isPlaceholderText(sensorLine)) {
    return sensorLine;
  }
  return "-";
}

function getRouteFromGroup(group, lineFilter) {
  const routes = getRoutesFromGroup(group, lineFilter);
  return routes[0] || "-";
}

function getRoutesFromGroup(group, lineFilter) {
  const routes = [];
  const seen = new Set();

  const appendRoute = (value) => {
    if (isPlaceholderText(value)) {
      return;
    }
    const text = String(value).trim();
    if (text === "-") {
      return;
    }
    const key = text.toUpperCase();
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    routes.push(text);
  };

  if (!lineFilter) {
    const providedRoutes = group?.entity?.attributes?.rutas;
    if (Array.isArray(providedRoutes)) {
      for (const route of providedRoutes) {
        appendRoute(route);
      }
    }
  }

  for (const bus of getBusesFromGroup(group, lineFilter)) {
    appendRoute(bus?.ruta);
  }

  if (!lineFilter) {
    appendRoute(group?.entity?.attributes?.ruta);
    appendRoute(group?.ruta?.state);
  }

  return routes.length ? routes : ["-"];
}

function getRouteEntriesFromGroup(group, lineFilter) {
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

  const buses = getBusesFromGroup(group, lineFilter);
  if (buses.length) {
    for (const bus of buses) {
      appendEntry(bus?.linea, bus?.ruta);
    }
    return entries.length ? entries : [{ line: getLineFromGroup(group, lineFilter), route: getRouteFromGroup(group, lineFilter) }];
  }

  const fallbackLine = getLineFromGroup(group, lineFilter);
  for (const route of getRoutesFromGroup(group, lineFilter)) {
    appendEntry(fallbackLine, route);
  }

  return entries.length ? entries : [{ line: fallbackLine, route: getRouteFromGroup(group, lineFilter) }];
}

function getDistanceFromGroup(group) {
  const distance = group?.entity?.attributes?.nearest_dist_m;
  if (distance === undefined || distance === null || distance === "") {
    return null;
  }
  const number = Number(distance);
  return Number.isNaN(number) ? null : number;
}

function getBusesFromGroup(group, lineFilter) {
  const buses = group?.entity?.attributes?.buses;
  if (!Array.isArray(buses)) {
    return [];
  }

  const target = lineFilter ? normalizeLine(lineFilter) : "";

  const normalized = buses
    .filter((item) => item && typeof item === "object")
    .map((item) => ({
      linea: item.linea || "-",
      ruta: item.ruta || "-",
      minutos: parseMinutes(item.minutos),
      metros: item.metros,
      color: item.color || null,
    }))
    .filter((item) => item.minutos !== null)
    .filter((item) => !target || normalizeLine(item.linea) === target);

  normalized.sort((a, b) => a.minutos - b.minutos);
  return normalized;
}

function filterBusesByLine(buses, lineFilter) {
  const target = lineFilter ? normalizeLine(lineFilter) : "";
  const list = Array.isArray(buses) ? buses : [];
  if (!target) {
    return list;
  }
  return list.filter((bus) => normalizeLine(bus?.linea) === target);
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

// Validated categorical palette (8 hues, CVD-safe adjacent ordering) used to
// give each bus line a consistent, distinct badge color. Line codes are
// arbitrary runtime strings, so the color is a deterministic hash rather
// than a fixed per-line map.
const LINE_COLORS = [
  "#2a78d6", // blue
  "#eb6834", // orange
  "#1baf7a", // aqua
  "#eda100", // yellow
  "#e87ba4", // magenta
  "#008300", // green
  "#4a3aa7", // violet
  "#e34948", // red
];

function getLineColor(line, officialColor) {
  // Prefer Vitrasa's own published color for the line (integration
  // v2.5.0+, sourced from their public line-geometry data) so the badge
  // matches the real livery; only fall back to a synthetic hash-based
  // color for lines the backend doesn't know a color for, or an older
  // backend that doesn't send one yet.
  if (typeof officialColor === "string" && /^#[0-9a-f]{6}$/i.test(officialColor.trim())) {
    return officialColor.trim();
  }

  const text = String(line || "").trim().toUpperCase();
  if (!text) {
    return LINE_COLORS[0];
  }
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return LINE_COLORS[hash % LINE_COLORS.length];
}

function getContrastTextColor(hex) {
  const clean = String(hex || "").replace("#", "");
  if (clean.length !== 6) {
    return "#ffffff";
  }
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  const contrastWithWhite = 1.05 / (luminance + 0.05);
  const contrastWithBlack = (luminance + 0.05) / 0.05;
  return contrastWithBlack > contrastWithWhite ? "#161616" : "#ffffff";
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

// Three selectable visual styles: "glass" and "glass_refined" preserve the
// card's two earlier looks (a plain gradient hero, and that same hero with
// an accent border/pulse/hover polish added later) so nobody loses the look
// they picked before; "bold" is the current default. Only decoration
// differs between them — filtering, pagination, per-viewer location, etc.
// all work the same regardless of style.
const CARD_STYLES = {
  glass: {
    heroLayout: "big",
    busIndicator: "none",
    pagination: "pill",
    lineBadges: false,
    heroAccentBorder: false,
    numeralPolish: false,
    sectionTick: false,
    accentGlow: false,
    font: "system",
  },
  glass_refined: {
    heroLayout: "big",
    busIndicator: "dot",
    pagination: "pill",
    lineBadges: false,
    heroAccentBorder: true,
    numeralPolish: true,
    sectionTick: true,
    accentGlow: true,
    font: "system",
  },
  bold: {
    heroLayout: "compact",
    busIndicator: "pill",
    pagination: "circle",
    lineBadges: true,
    heroAccentBorder: false,
    numeralPolish: true,
    sectionTick: true,
    accentGlow: true,
    font: "poppins",
  },
};

function getCardStyle(config) {
  const key = String(config?.card_style || "bold");
  return CARD_STYLES[key] ? key : "bold";
}

function isLiveBus(bus) {
  // Vitrasa's API reports "metros" (remaining distance) only when the bus
  // has an active GPS fix; schedule-only projections (early/late buses with
  // no live position yet) come back with metros = -1. This is the same
  // signal Moovit-style apps use to mark an arrival as "live" vs "scheduled".
  const metros = Number(bus?.metros);
  return Number.isFinite(metros) && metros >= 0;
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
      accent_color: "#ff6b35",
      card_style: "bold",
      language: "auto",
      line_filter: "",
      device_location_mode: false,
      device_location_title: "",
      device_location_tie_margin_m: 60,
      device_location_max_candidates: 3,
      device_location_refresh_seconds: 20,
      device_location_source: "auto",
      trip_planner_mode: false,
      stops: [{ entity: "sensor.vigobus_nearest", title: "", line: "" }],
    };
  }

  static getConfigElement() {
    return document.createElement("vigobus-card-editor");
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
      accent_color: "#ff6b35",
      card_style: "bold",
      language: "auto",
      line_filter: "",
      device_location_mode: false,
      device_location_title: "",
      device_location_tie_margin_m: 60,
      device_location_max_candidates: 3,
      device_location_refresh_seconds: 20,
      device_location_source: "auto",
      trip_planner_mode: false,
      stops: [],
    };
    this._deviceLocationState = null;
    this._deviceLocationTimer = null;
    this._busPage = {};
    this._openAlert = null;
    this._alertLookup = new Map();
    this._tripState = {
      status: "idle",
      query: "",
      suggestions: [],
      destination: null,
      result: null,
      error: null,
    };
    this._tripSearchToken = 0;
    this._openTripItinerary = null;
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
      card_style: CARD_STYLES[config.card_style ?? this._config.card_style]
        ? config.card_style ?? this._config.card_style
        : "bold",
      device_location_mode: Boolean(config.device_location_mode ?? this._config.device_location_mode ?? false),
      device_location_tie_margin_m: Number(
        config.device_location_tie_margin_m ?? this._config.device_location_tie_margin_m ?? 60
      ),
      device_location_max_candidates: Number(
        config.device_location_max_candidates ?? this._config.device_location_max_candidates ?? 3
      ),
      device_location_refresh_seconds: Number(
        config.device_location_refresh_seconds ?? this._config.device_location_refresh_seconds ?? 20
      ),
      device_location_source: ["auto", "browser", "person"].includes(
        String(config.device_location_source ?? this._config.device_location_source ?? "auto").toLowerCase()
      )
        ? String(config.device_location_source ?? this._config.device_location_source ?? "auto").toLowerCase()
        : "auto",
      trip_planner_mode: Boolean(config.trip_planner_mode ?? this._config.trip_planner_mode ?? false),
      stops: normalizeConfiguredStops(config),
    };
    this._syncDeviceLocationLoop();
    // Config changes always re-render regardless of the hass-derived
    // signature (a new stop/filter can change the output even if no
    // entity's state changed) — keep the cached signature in sync so a
    // later hass tick with unchanged data doesn't force a redundant render.
    if (this._hass) {
      this._lastRenderSignature = computeRenderSignature(this._hass);
    }
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    const signature = computeRenderSignature(hass);
    if (signature === this._lastRenderSignature) {
      // Nothing this card actually displays changed — skip the render
      // entirely instead of tearing down and rebuilding the whole card on
      // every unrelated state change in the house.
      return;
    }
    this._lastRenderSignature = signature;
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
    const seconds = Math.max(10, Number(this._config.device_location_refresh_seconds) || 20);
    this._deviceLocationTimer = setInterval(() => {
      // Skip ticks while the dashboard tab/app isn't visible — no point
      // burning battery/network polling a location no one is looking at.
      if (document.visibilityState === "hidden") return;
      this._refreshDeviceLocation();
    }, seconds * 1000);

    // Jump straight to a fresh reading the moment the dashboard becomes
    // visible again, instead of waiting out the rest of the interval.
    this._visibilityHandler = () => {
      if (document.visibilityState === "visible") {
        this._refreshDeviceLocation();
      }
    };
    document.addEventListener("visibilitychange", this._visibilityHandler);
  }

  _stopDeviceLocationLoop() {
    if (this._deviceLocationTimer) {
      clearInterval(this._deviceLocationTimer);
      this._deviceLocationTimer = null;
    }
    if (this._visibilityHandler) {
      document.removeEventListener("visibilitychange", this._visibilityHandler);
      this._visibilityHandler = null;
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
        lang: getLocale(this._config, this._hass),
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

  _applyCandidates(candidates, source, personName) {
    const previousSelected = this._deviceLocationState?.selectedId;
    const stillValid = candidates.some((candidate) => candidate.id === previousSelected);
    this._deviceLocationState = {
      status: candidates.length ? "ready" : "empty",
      error: null,
      candidates,
      selectedId: stillValid ? previousSelected : candidates[0]?.id ?? null,
      updatedAt: new Date().toISOString(),
      source,
      personName: personName || null,
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
      this._applyCandidates(candidates, "person", person.attributes.friendly_name);
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
          const viewerPerson = this._findPersonForViewer();
          this._applyCandidates(candidates, "browser", viewerPerson?.attributes?.friendly_name);
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
      // maximumAge: 0 forces a brand new GPS fix on every call instead of
      // letting the browser hand back a stale cached position — "my
      // location" is meant to track wherever the viewer actually is right
      // now, not where they were up to maximumAge ms ago.
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  _selectDeviceCandidate(stopId) {
    if (!this._deviceLocationState) {
      return;
    }
    this._deviceLocationState = { ...this._deviceLocationState, selectedId: stopId };
    this._render();
  }

  _setBusPage(key, page) {
    this._busPage = { ...this._busPage, [key]: Math.max(0, page) };
    this._render();
  }

  _registerAlert(alert) {
    const key = `alert-${this._alertLookup.size}`;
    this._alertLookup.set(key, alert);
    return key;
  }

  _openAlertModal(alert) {
    this._openAlert = alert;
    this._render();
  }

  _closeAlertModal() {
    this._openAlert = null;
    this._render();
  }

  _renderBusList(key, allBuses, pageSize, locale, styleKey) {
    const style = CARD_STYLES[styleKey] || CARD_STYLES.bold;
    const buses = Array.isArray(allBuses) ? allBuses : [];
    const size = Math.max(1, Number(pageSize) || 3);
    const totalPages = Math.max(1, Math.ceil(buses.length / size));
    const page = Math.min(Math.max(0, this._busPage[key] || 0), totalPages - 1);
    const pageItems = buses.slice(page * size, page * size + size);

    if (!buses.length) {
      return `<div class="next-list"><div class="meta" style="font-size:12px;">${escapeHtml(t(locale, "no_upcoming"))}</div></div>`;
    }

    const rowsHtml = pageItems.map((bus) => {
      const live = isLiveBus(bus);

      if (style.lineBadges) {
        const color = getLineColor(bus.linea, bus.color);
        const textColor = getContrastTextColor(color);
        return `
          <div class="next-item" style="border-left-color: ${color};">
            <span class="line-badge" style="background: ${color}; color: ${textColor};">${escapeHtml(bus.linea || "-")}</span>
            <span class="next-route">${escapeHtml(String(bus.ruta || "-").trim())}</span>
            <span class="status-pill ${live ? "live" : "scheduled"}">${escapeHtml(live ? t(locale, "live") : t(locale, "scheduled"))}</span>
            <span class="next-minutes">${escapeHtml(formatShortDuration(bus.minutos))}</span>
          </div>
        `;
      }

      const indicator = style.busIndicator === "dot"
        ? `<span class="status-dot ${live ? "live" : "scheduled"}" title="${escapeHtml(live ? t(locale, "live") : t(locale, "scheduled"))}"><span class="visually-hidden">${escapeHtml(live ? t(locale, "live") : t(locale, "scheduled"))}</span></span>`
        : "";

      return `
        <div class="next-item next-item--legacy">
          <strong>${indicator}${escapeHtml(bus.linea || "-")}</strong>
          <span class="next-minutes">${escapeHtml(formatShortDuration(bus.minutos))}</span>
          <span class="next-route">${escapeHtml(formatRouteWithLine(bus.linea, bus.ruta))}</span>
        </div>
      `;
    }).join("");

    const pagination = totalPages <= 1 ? "" : (
      style.pagination === "circle"
        ? `
          <div class="page-controls">
            <button class="page-btn" type="button" aria-label="${escapeHtml(t(locale, "prev"))}" data-page-key="${escapeHtml(key)}" data-page-dir="-1" ${page <= 0 ? "disabled" : ""}>‹</button>
            <button class="page-btn" type="button" aria-label="${escapeHtml(t(locale, "next"))}" data-page-key="${escapeHtml(key)}" data-page-dir="1" ${page >= totalPages - 1 ? "disabled" : ""}>›</button>
          </div>
        `
        : `
          <div class="page-controls">
            <button class="page-btn page-btn--pill" type="button" data-page-key="${escapeHtml(key)}" data-page-dir="-1" ${page <= 0 ? "disabled" : ""}>‹ ${escapeHtml(t(locale, "prev"))}</button>
            <button class="page-btn page-btn--pill" type="button" data-page-key="${escapeHtml(key)}" data-page-dir="1" ${page >= totalPages - 1 ? "disabled" : ""}>${escapeHtml(t(locale, "next"))} ›</button>
          </div>
        `
    );

    return `
      <div class="next-list">
        <div class="next-list-head">
          <span class="next-list-title">${escapeHtml(t(locale, "following"))}</span>
          ${totalPages > 1 ? `<span class="page-indicator">${page + 1}/${totalPages}</span>` : ""}
        </div>
        ${rowsHtml}
        ${pagination}
      </div>
    `;
  }

  _renderStopItem(group, locale, nextBusCount, styleKey) {
    const style = CARD_STYLES[styleKey] || CARD_STYLES.bold;
    const lineFilter = resolveLineFilter(group, this._config);
    const line = getLineFromGroup(group, lineFilter);
    const distance = getDistanceFromGroup(group);
    const allStopBuses = getBusesFromGroup(group, lineFilter);
    const groupAlerts = getAlertsFromGroup(group);
    const filteredAlerts = filterAlerts(
      groupAlerts,
      line,
      Boolean(this._config.alerts_only_main_line),
      this._config.alerts_max
    );

    const header = style.heroLayout === "big"
      ? (() => {
          const minutes = getMinutesForGroup(group, lineFilter);
          const routeEntries = getRouteEntriesFromGroup(group, lineFilter);
          const route = routeEntries.map((item) => formatRouteWithLine(item.line || line, item.route)).join(" | ");
          const routeLabel = routeEntries.length > 1 ? t(locale, "routes") : t(locale, "route");
          const hasLineData = line !== "-" || route !== "-";
          return `
            <div class="hero-top">
              <div>
                <div class="stop-name">${escapeHtml(group.title)}</div>
                ${hasLineData ? `<div class="meta">${line !== "-" ? `${escapeHtml(t(locale, "line"))}: <b>${escapeHtml(line)}</b><br>` : ""}${escapeHtml(routeLabel)}: <b>${escapeHtml(route)}</b></div>` : ""}
              </div>
              <div class="main-time">${minutes === null ? escapeHtml(t(locale, "unavailable")) : escapeHtml(formatShortDuration(minutes))}</div>
            </div>
            <div class="mini-pill-row">
              <div class="pill">${allStopBuses.length} ${escapeHtml(allStopBuses.length === 1 ? t(locale, "bus") : t(locale, "buses"))}</div>
              ${this._config.show_alerts ? `<div class="pill">${filteredAlerts.length} ${escapeHtml(t(locale, "alerts"))}</div>` : ""}
            </div>
          `;
        })()
      : `
        <div class="hero-top">
          <div class="stop-name">${escapeHtml(group.title)}</div>
          ${distance !== null ? `<span class="pill">${distance.toFixed(0)} m</span>` : ""}
        </div>
      `;

    return `
      <div class="stop-item">
        ${header}

        ${this._renderBusList(`stop:${group.key}`, allStopBuses, nextBusCount, locale, styleKey)}

        ${this._config.show_alerts
          ? (filteredAlerts.length
            ? `<div class="next-list secondary-alerts">
                <div style="color: var(--vigobus-muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; margin-top: 2px;">${escapeHtml(t(locale, "alerts"))}</div>
                ${filteredAlerts.map((item) => `
                  <div class="next-item alert-item" data-alert-key="${escapeHtml(this._registerAlert(item))}" role="button" tabindex="0">
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
  }

  _renderDeviceLocationSection(locale, styleKey) {
    const state = this._deviceLocationState || { status: "locating", candidates: [], selectedId: null };
    const customTitle = String(this._config.device_location_title || "").trim();
    const genericTitle = customTitle || t(locale, "my_location");

    let heading = genericTitle;
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
      const lineFilter = String(this._config.line_filter || "").trim();
      const buses = filterBusesByLine(selected?.buses, lineFilter);
      const deviceAlerts = filterAlerts(
        selected?.alerts,
        lineFilter,
        Boolean(this._config.alerts_only_main_line),
        this._config.alerts_max
      );

      if (!customTitle) {
        heading = state.personName ? `${state.personName} · ${t(locale, "my_location_short")}` : genericTitle;
      }

      body = `
        ${
          state.candidates.length > 1
            ? `<div class="candidate-row" style="margin-bottom: 6px;">
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
              </div>
              <div class="tie-break-hint">${state.candidates.length} ${escapeHtml(t(locale, "tie_break_hint_suffix"))}</div>`
            : ""
        }
        <div class="stop-item">
          <div class="hero-top">
            <div class="stop-name">${escapeHtml(selected?.name || "-")}</div>
            <span class="pill">${Number(selected?.distance_m || 0).toFixed(0)} m</span>
          </div>
          ${this._renderBusList(`device:${selected?.id}`, buses, nextBusCount, locale, styleKey)}
          ${this._config.show_alerts
            ? (deviceAlerts.length
              ? `<div class="next-list secondary-alerts">
                  <div style="color: var(--vigobus-muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; margin-top: 2px;">${escapeHtml(t(locale, "alerts"))}</div>
                  ${deviceAlerts.map((item) => `
                    <div class="next-item alert-item" data-alert-key="${escapeHtml(this._registerAlert(item))}" role="button" tabindex="0">
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
    }

    return `
      <div class="section">
        <h4>${escapeHtml(heading)}</h4>
        ${body}
      </div>
    `;
  }

  _resolveMyLocationCoords() {
    return new Promise((resolve, reject) => {
      const fallbackToPerson = () => {
        const person = this._findPersonForViewer();
        if (person) {
          resolve({ lat: person.attributes.latitude, lon: person.attributes.longitude });
        } else {
          reject(new Error("no_geolocation"));
        }
      };

      if (!navigator.geolocation) {
        fallbackToPerson();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => resolve({ lat: position.coords.latitude, lon: position.coords.longitude }),
        fallbackToPerson,
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    });
  }

  async _searchTripDestinations() {
    const query = String(this._tripState.query || "").trim();
    if (query.length < 2) {
      this._tripState = { ...this._tripState, suggestions: [], error: null };
      this._render();
      return;
    }

    this._tripState = { ...this._tripState, status: "searching", error: null, suggestions: [] };
    this._render();

    try {
      const result = await this._hass.connection.sendMessagePromise({
        type: "call_service",
        domain: "vigobus",
        service: "search_stops",
        service_data: { query, limit: 8 },
        return_response: true,
      });
      const stops = normalizeStopSuggestions(result);
      this._tripState = { ...this._tripState, status: "idle", suggestions: stops };
    } catch (err) {
      this._tripState = { ...this._tripState, status: "idle", error: "trip_error" };
    }
    this._render();
  }

  _selectTripDestination(index) {
    const stop = this._tripState.suggestions[index];
    if (!stop) {
      return;
    }
    this._tripState = { ...this._tripState, destination: stop, suggestions: [], query: "" };
    this._planTrip();
  }

  _clearTripDestination() {
    this._tripState = { ...this._tripState, destination: null, result: null, error: null };
    this._openTripItinerary = null;
    this._render();
  }

  _openTripItineraryDetail(index) {
    this._openTripItinerary = index;
    this._render();
  }

  _closeTripItineraryDetail() {
    this._openTripItinerary = null;
    this._render();
  }

  async _planTrip() {
    const destination = this._tripState.destination;
    if (!destination) {
      return;
    }

    this._tripState = { ...this._tripState, status: "planning", error: null, result: null };
    this._openTripItinerary = null;
    this._render();

    try {
      const coords = await this._resolveMyLocationCoords();
      const response = await this._hass.connection.sendMessagePromise({
        type: "call_service",
        domain: "vigobus",
        service: "plan_trip",
        service_data: {
          origin_latitude: coords.lat,
          origin_longitude: coords.lon,
          destination_stop_id: destination.stop_id || destination.id,
        },
        return_response: true,
      });
      this._tripState = { ...this._tripState, status: "idle", result: normalizePlanTripResponse(response) };
    } catch (err) {
      this._tripState = {
        ...this._tripState,
        status: "idle",
        error: err?.message === "no_geolocation" ? "location_unavailable" : "trip_error",
      };
    }
    this._render();
  }

  _renderTripLeg(leg, locale) {
    if (leg.mode === "walk") {
      const stopName = leg.to_stop?.name || leg.from_stop?.name || "";
      const label = leg.to_stop
        ? t(locale, "trip_walk_to")
        : t(locale, "trip_walk_from");
      return `
        <div class="next-item">
          <strong>🚶</strong>
          <span class="next-route">${escapeHtml(label)} ${escapeHtml(stopName)}</span>
          <span class="next-minutes">${escapeHtml(formatHumanDuration(leg.duration_min))}</span>
        </div>
      `;
    }

    const color = getLineColor(leg.line, leg.line_color);
    const textColor = getContrastTextColor(color);
    const liveNote = leg.live?.is_live
      ? `<div class="meta" style="margin-left: 30px;">${escapeHtml(t(locale, "live"))}: ${escapeHtml(String(leg.live.minutos))} min</div>`
      : "";

    return `
      <div class="next-item">
        <span class="line-badge" style="background: ${color}; color: ${textColor};">${escapeHtml(leg.line || "-")}</span>
        <span class="next-route">${escapeHtml(leg.from_stop?.name || "-")} → ${escapeHtml(leg.to_stop?.name || "-")}</span>
        <span class="next-minutes">${escapeHtml(leg.depart || "")}–${escapeHtml(leg.arrive || "")}</span>
      </div>
      ${liveNote}
    `;
  }

  _tripTransferLabel(itinerary, locale) {
    return itinerary.transfers === 0
      ? t(locale, "trip_direct")
      : `${itinerary.transfers} ${t(locale, itinerary.transfers === 1 ? "trip_transfer_one" : "trip_transfers")}`;
  }

  _renderTripSummaryRow(itinerary, index, locale) {
    const chips = (itinerary.legs || [])
      .filter((leg) => leg.mode === "bus")
      .map((leg) => {
        const color = getLineColor(leg.line, leg.line_color);
        const textColor = getContrastTextColor(color);
        return `<span class="line-badge" style="background: ${color}; color: ${textColor};">${escapeHtml(leg.line || "-")}</span>`;
      })
      .join("");

    return `
      <div
        class="stop-item trip-itinerary-row"
        data-trip-itinerary-index="${index}"
        role="button"
        tabindex="0"
      >
        <div class="hero-top">
          <div class="stop-name">${escapeHtml(itinerary.depart || "")} → ${escapeHtml(itinerary.arrive || "")}</div>
          <span class="pill">${escapeHtml(formatHumanDuration(itinerary.duration_min))}</span>
        </div>
        <div class="meta">${escapeHtml(this._tripTransferLabel(itinerary, locale))}</div>
        <div class="mini-pill-row">${chips}</div>
      </div>
    `;
  }

  _renderTripResult(result, locale) {
    const itineraries = result?.itineraries || [];
    if (!itineraries.length) {
      const warning = result?.warnings?.[0];
      const key = warning === "no_service_on_date" ? "trip_no_service" : "trip_no_route";
      return `<div class="meta" style="margin-top: 6px;">${escapeHtml(t(locale, key))}</div>`;
    }

    return `
      <div class="trip-itinerary-list">
        ${itineraries.map((itinerary, index) => this._renderTripSummaryRow(itinerary, index, locale)).join("")}
      </div>
    `;
  }

  _renderTripDetailModal(locale) {
    if (this._openTripItinerary === null || this._openTripItinerary === undefined) {
      return "";
    }
    const itinerary = this._tripState.result?.itineraries?.[this._openTripItinerary];
    if (!itinerary) {
      return "";
    }

    return `
      <div class="alert-modal-backdrop" data-trip-backdrop>
        <div class="alert-modal" role="dialog" aria-modal="true">
          <button type="button" class="alert-modal-close" data-trip-detail-close aria-label="${escapeHtml(t(locale, "close"))}">&times;</button>
          <div class="alert-modal-title">${escapeHtml(itinerary.depart || "")} → ${escapeHtml(itinerary.arrive || "")} (${escapeHtml(formatHumanDuration(itinerary.duration_min))})</div>
          <div class="alert-modal-meta">${escapeHtml(this._tripTransferLabel(itinerary, locale))}</div>
          <div class="next-list" style="margin-top: 10px;">
            ${(itinerary.legs || []).map((leg) => this._renderTripLeg(leg, locale)).join("")}
          </div>
        </div>
      </div>
    `;
  }

  _renderTripPlannerSection(locale, styleKey) {
    const state = this._tripState;

    return `
      <div class="section">
        <h4>${escapeHtml(t(locale, "trip_planner_title"))}</h4>
        <div class="trip-planner">
          ${
            state.destination
              ? `
            <div class="trip-destination-row">
              <span class="meta">${escapeHtml(t(locale, "trip_destination"))}: <b>${escapeHtml(state.destination.name)}</b></span>
              <button type="button" class="page-btn page-btn--pill" data-trip-clear>${escapeHtml(t(locale, "trip_change_destination"))}</button>
            </div>
          `
              : `
            <div class="trip-search-row">
              <input
                type="text"
                class="trip-search-input"
                data-trip-query
                value="${escapeHtml(state.query)}"
                placeholder="${escapeHtml(t(locale, "trip_destination_placeholder"))}"
              />
              <button type="button" class="page-btn page-btn--pill" data-trip-search-btn>${escapeHtml(t(locale, "trip_search_button"))}</button>
            </div>
            ${state.status === "searching" ? `<div class="meta" style="margin-top: 6px;">${escapeHtml(t(locale, "trip_searching"))}</div>` : ""}
            ${
              state.suggestions.length
                ? `
              <div class="trip-suggestions">
                ${state.suggestions
                  .map(
                    (stop, index) => `
                  <button type="button" class="trip-suggestion" data-trip-suggestion-index="${index}">
                    ${escapeHtml(stop.name)}
                  </button>
                `
                  )
                  .join("")}
              </div>
            `
                : ""
            }
          `
          }
          ${state.status === "planning" ? `<div class="meta" style="margin-top: 6px;">${escapeHtml(t(locale, "trip_planning"))}</div>` : ""}
          ${state.error ? `<div class="meta" style="margin-top: 6px;">${escapeHtml(t(locale, state.error))}</div>` : ""}
          ${state.result ? this._renderTripResult(state.result, locale) : ""}
        </div>
      </div>
    `;
  }

  _render() {
    if (!this._hass || !this._config) {
      return;
    }

    this._alertLookup = new Map();
    const locale = getLocale(this._config, this._hass);
    const groups = sortGroupsForDisplay(buildSelectedGroups(this._hass, this._config));
    const primaryGroup = getPrimaryGroup(groups, this._config.primary_entity);
    const compact = Boolean(this._config.compact);
    const mainLineFilter = resolveLineFilter(primaryGroup, this._config);
    const mainMinutes = getMinutesForGroup(primaryGroup, mainLineFilter);
    const mainLine = getLineFromGroup(primaryGroup, mainLineFilter);
    const mainRouteEntries = getRouteEntriesFromGroup(primaryGroup, mainLineFilter);
    const mainRoute = mainRouteEntries[0]?.route || "-";
    const mainRouteFull = mainRouteEntries.map((item) => formatRouteWithLine(item.line || mainLine, item.route)).join(" | ");
    const mainRouteLabel = mainRouteEntries.length > 1 ? t(locale, "routes") : t(locale, "route");
    // Not just mainLine !== "-": a stop can have real per-bus route data
    // even when the top-level "linea" summary attribute itself is unset.
    // mainRouteEntries always has at least one padding entry ({line:"-",
    // route:"-"}) even for a genuinely empty stop, so check the resolved
    // text instead of the array length.
    const hasMainLineData = mainLine !== "-" || mainRouteFull !== "-";
    const mainDistance = getDistanceFromGroup(primaryGroup);
    const updatedAt = getUpdatedAtFromGroup(primaryGroup);
    const maxStops = Math.max(1, Number(this._config.max_stops) || 6);
    const nextBusCount = Math.max(1, Number(this._config.next_buses_count) || 3);

    const secondaryGroups = groups.filter((group) => group.key !== primaryGroup?.key);
    const visibleSecondary = this._config.show_all_stops ? secondaryGroups.slice(0, maxStops) : [];

    const statusShort = mainMinutes === null ? t(locale, "no_estimations") : formatShortDuration(mainMinutes);
    const accent = this._config.accent_color || "#ff6b35";
    const styleKey = getCardStyle(this._config);
    const style = CARD_STYLES[styleKey];
    const mainAllBuses = getBusesFromGroup(primaryGroup, mainLineFilter);
    const mainLineColor = getLineColor(mainLine, mainAllBuses[0]?.color);
    const mainLineTextColor = getContrastTextColor(mainLineColor);
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap');

        :host {
          display: block;
          max-width: 100%;
          overflow-x: hidden;
          box-sizing: border-box;
          /* Derived from Home Assistant's own theme variables so the card
             follows the active light/dark theme instead of forcing one
             look. The literal fallbacks only apply on very old HA frontends
             that don't define these variables yet. */
          --vigobus-bg: var(--ha-card-background, var(--card-background-color, #10151d));
          --vigobus-text: var(--primary-text-color, #ffffff);
          --vigobus-muted: var(--secondary-text-color, rgba(255,255,255,0.72));
          --vigobus-divider: var(--divider-color, rgba(255,255,255,0.14));
          --vigobus-accent: ${accent};
          /* "Glass" overlay tones mixed from the current text color, so they
             read as light veils on dark backgrounds and dark veils on light
             backgrounds automatically. color-mix() has broad support in
             current browsers/WebViews; the rgba() declared just before each
             one is the fallback for anything older. */
          --vigobus-veil-weak: rgba(255,255,255,0.06);
          --vigobus-veil-weak: color-mix(in srgb, var(--vigobus-text) 6%, transparent);
          --vigobus-veil: rgba(255,255,255,0.10);
          --vigobus-veil: color-mix(in srgb, var(--vigobus-text) 10%, transparent);
          --vigobus-veil-strong: rgba(255,255,255,0.16);
          --vigobus-veil-strong: color-mix(in srgb, var(--vigobus-text) 16%, transparent);
          /* Accent-tinted panel, mixed against the card's own background so
             it stays readable and theme-correct in both light and dark. */
          /* Mixed against the veil (not the raw background) so the tint
             stays clearly visible in dark mode too — mixing straight into a
             near-black background barely moves its lightness at all. */
          --vigobus-accent-tint: color-mix(in srgb, var(--vigobus-accent) 22%, var(--vigobus-veil));
          --vigobus-accent-tint-strong: color-mix(in srgb, var(--vigobus-accent) 36%, var(--vigobus-veil-strong));
          --vigobus-accent-border: color-mix(in srgb, var(--vigobus-accent) 45%, var(--vigobus-divider));
          color: var(--vigobus-text);
          font-family: "Poppins", var(--paper-font-body1_-_font-family, var(--ha-font-family, -apple-system, "Segoe UI", sans-serif));
        }

        ha-card {
          overflow: hidden;
          border-radius: 24px;
          background: var(--vigobus-bg);
          box-shadow: var(--ha-card-box-shadow, 0 10px 26px rgba(0,0,0,0.18)), inset 0 1px 0 var(--vigobus-veil-weak);
          border: 1px solid var(--vigobus-divider);
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
          background: linear-gradient(135deg, var(--vigobus-veil-strong), var(--vigobus-veil));
          border: 1px solid var(--vigobus-divider);
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
          margin: 0 20px 14px;
          padding: 14px 16px;
          border-radius: 16px;
          background: linear-gradient(135deg, var(--vigobus-accent-tint), var(--vigobus-bg));
          border: 1.5px solid var(--vigobus-accent-border);
          box-sizing: border-box;
          min-width: 0;
        }

        .hero-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 2px;
        }

        .hero-top > div {
          min-width: 0;
        }

        .hero-line-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 8px;
        }

        .hero-line-row .hero-line-info {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .hero-line-row .next-route {
          text-align: left;
        }

        .stop-name {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .meta {
          color: var(--vigobus-muted);
          font-size: 13px;
          line-height: 1.5;
        }

        .main-time {
          display: flex;
          align-items: baseline;
          gap: 4px;
          flex-shrink: 0;
          font-size: 26px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
          color: var(--vigobus-text);
          text-align: right;
        }

        .main-time small {
          font-size: 12px;
          font-weight: 700;
          color: var(--vigobus-muted);
        }

        .pill-row {
          margin-top: 10px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pill {
          padding: 3px 9px;
          border-radius: 999px;
          background: var(--vigobus-accent-tint-strong);
          color: color-mix(in srgb, var(--vigobus-accent) 70%, var(--vigobus-text));
          font-size: 10.5px;
          font-weight: 700;
        }

        .line-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 7px;
          flex-shrink: 0;
        }

        .next-list {
          display: grid;
          gap: 8px;
          margin-top: 14px;
        }

        .next-list-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--vigobus-muted);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .page-indicator {
          font-size: 11px;
          letter-spacing: normal;
          text-transform: none;
        }

        .page-controls {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          margin-top: 2px;
        }

        .page-btn {
          font: inherit;
          cursor: pointer;
          width: 28px;
          height: 28px;
          padding: 0;
          border-radius: 50%;
          border: 0;
          background: var(--vigobus-accent);
          color: #fff;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s ease, opacity 0.15s ease;
        }

        .page-btn:hover:not(:disabled) {
          opacity: 0.88;
        }

        .page-btn:active:not(:disabled) {
          transform: scale(0.92);
        }

        .page-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .next-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 12px;
          background: var(--vigobus-veil-weak);
          border-left: 3px solid var(--vigobus-divider);
          color: var(--vigobus-text);
          font-size: 13px;
          min-width: 0;
          box-sizing: border-box;
        }

        .next-item strong {
          font-weight: 800;
          flex-shrink: 0;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          padding: 3px 7px;
          border-radius: 999px;
          color: var(--vigobus-muted);
          background: var(--vigobus-veil);
        }

        .status-pill.live {
          color: #ffffff;
          background: #16a34a;
          animation: vigobus-live-pulse 2.2s ease-in-out infinite;
        }

        @keyframes vigobus-live-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.35); }
          50% { box-shadow: 0 0 0 4px rgba(22,163,74,0); }
        }

        .next-minutes {
          flex-shrink: 0;
          min-width: 44px;
          font-weight: 800;
          font-variant-numeric: tabular-nums;
          text-align: right;
        }

        .next-route {
          color: var(--vigobus-muted);
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .alert-title {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .alert-lines {
          flex-shrink: 0;
          color: var(--vigobus-muted);
          white-space: nowrap;
        }

        .alert-item {
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .alert-item:hover,
        .alert-item:focus-visible {
          background: var(--vigobus-veil);
          outline: none;
        }

        .alert-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.5);
        }

        .alert-modal {
          position: relative;
          width: 100%;
          max-width: 360px;
          max-height: 80vh;
          overflow-y: auto;
          box-sizing: border-box;
          padding: 20px;
          border-radius: 16px;
          background: var(--vigobus-bg);
          border: 1px solid var(--vigobus-divider);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
          color: var(--vigobus-text);
        }

        .alert-modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 999px;
          background: var(--vigobus-veil);
          color: var(--vigobus-text);
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
        }

        .alert-modal-close:hover {
          background: var(--vigobus-veil-strong);
        }

        .alert-modal-title {
          font-weight: 800;
          font-size: 16px;
          padding-right: 24px;
          margin-bottom: 10px;
        }

        .alert-modal-meta {
          font-size: 13px;
          color: var(--vigobus-muted);
          margin-bottom: 6px;
        }

        .alert-modal-body {
          margin-top: 10px;
          font-size: 13px;
          line-height: 1.5;
          white-space: pre-line;
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
          font-size: 22px;
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
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section h4::before {
          content: "";
          display: inline-block;
          width: 3px;
          height: 12px;
          border-radius: 2px;
          background: var(--vigobus-accent);
        }

        .stop-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .stop-item {
          padding: 14px 16px;
          border-radius: 16px;
          background: var(--vigobus-veil-weak);
          border: 1px solid var(--vigobus-divider);
          display: grid;
          gap: 10px;
          min-width: 0;
          box-sizing: border-box;
        }

        .secondary-alerts .next-item strong {
          min-width: 12px;
          text-align: center;
        }

        .debug {
          margin: 0 20px 20px;
          padding: 13px 15px;
          border-radius: 16px;
          background: rgba(0,0,0,0.12);
          background: color-mix(in srgb, var(--vigobus-text) 8%, transparent);
          border: 1px dashed var(--vigobus-divider);
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
          background: var(--vigobus-veil);
          border: 1px solid var(--vigobus-divider);
          color: var(--vigobus-text);
          font-size: 12px;
          transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
        }

        .candidate-pill:hover {
          border-color: var(--vigobus-accent);
        }

        .candidate-pill:active {
          transform: scale(0.96);
        }

        .candidate-pill.active {
          background: var(--vigobus-accent);
          border-color: var(--vigobus-accent);
          color: #fff;
          font-weight: 700;
        }

        .trip-search-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .trip-search-input {
          flex: 1;
          min-width: 0;
          font: inherit;
          font-size: 13px;
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid var(--vigobus-divider);
          background: var(--vigobus-veil-weak);
          color: var(--vigobus-text);
        }

        .trip-destination-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }

        .trip-suggestions {
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .trip-suggestion {
          font: inherit;
          text-align: left;
          cursor: pointer;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid var(--vigobus-divider);
          background: var(--vigobus-veil-weak);
          color: var(--vigobus-text);
          font-size: 13px;
        }

        .trip-suggestion:hover {
          background: var(--vigobus-veil);
        }

        .trip-itinerary-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .trip-itinerary-row {
          margin-top: 0;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .trip-itinerary-row:hover,
        .trip-itinerary-row:focus-visible {
          background: var(--vigobus-veil);
          outline: none;
        }

        .accent-line {
          height: 4px;
          background: linear-gradient(90deg, var(--vigobus-accent), rgba(255,255,255,0));
          box-shadow: 0 0 12px 0 color-mix(in srgb, var(--vigobus-accent) 55%, transparent);
        }

        .tie-break-hint {
          font-size: 10px;
          font-weight: 500;
          color: var(--vigobus-muted);
          padding: 0 2px 8px;
        }

        .mini-pill-row {
          margin-top: 8px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .next-item--legacy {
          display: grid;
          grid-template-columns: auto auto minmax(0, 1fr);
          align-items: center;
          gap: 10px;
          border-left: none;
        }

        .status-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
          vertical-align: middle;
          /* Scheduled = hollow ring, live = solid fill below — a shape
             difference, not just a color one, so it still reads for
             colorblind viewers or on a low-contrast screen. */
          background: transparent;
          border: 1.5px solid var(--vigobus-muted);
          box-sizing: border-box;
        }

        .status-dot.live {
          background: #16a34a;
          border-color: #16a34a;
          animation: vigobus-live-pulse 2.2s ease-in-out infinite;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .page-btn--pill {
          width: auto;
          height: auto;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
        }

        ha-card[data-style="glass"] .accent-line {
          box-shadow: none;
        }

        ha-card[data-style="glass"] .section h4::before {
          display: none;
        }

        ha-card[data-style="glass_refined"] .hero {
          border-left: 3px solid var(--vigobus-accent);
        }

        ha-card[data-style="glass"],
        ha-card[data-style="glass_refined"] {
          font-family: var(--paper-font-body1_-_font-family, var(--ha-font-family, -apple-system, "Segoe UI", sans-serif));
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

          .main-time {
            font-size: 22px;
          }

          .meta {
            font-size: 12px;
            line-height: 1.45;
          }

          .pill-row {
            margin-top: 10px;
            gap: 8px;
          }
        }
      </style>

      <ha-card class="${compact ? "compact" : ""}" data-style="${styleKey}">
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
            ${style.heroLayout === "big" ? `
              <div class="hero-top">
                <div>
                  <div class="stop-name">${escapeHtml(mainTitle)}</div>
                  ${hasMainLineData || mainDistance !== null ? `
                    <div class="meta">${hasMainLineData ? `${mainLine !== "-" ? `${escapeHtml(t(locale, "line"))}: <b>${escapeHtml(mainLine)}</b><br>` : ""}${escapeHtml(mainRouteLabel)}: <b>${escapeHtml(mainRouteFull)}</b>` : ""}${mainDistance !== null ? `${hasMainLineData ? "<br>" : ""}${escapeHtml(t(locale, "distance"))}: <b>${mainDistance.toFixed(0)} m</b>` : ""}</div>
                  ` : ""}
                </div>
                <div class="main-time">
                  ${escapeHtml(statusShort)}
                  <small>${escapeHtml(t(locale, "arrival"))}</small>
                </div>
              </div>
              <div class="pill-row">
                <div class="pill">${escapeHtml(primaryGroup.key === "nearest" ? t(locale, "nearest") : t(locale, "main_stop"))}</div>
                <div class="pill">${mainAllBuses.length} ${escapeHtml(mainAllBuses.length === 1 ? t(locale, "bus") : t(locale, "buses"))}</div>
                ${this._config.show_alerts ? `<div class="pill">${escapeHtml(visibleAlerts.length)} ${escapeHtml(t(locale, "alerts"))}</div>` : ""}
                ${stale ? `<div class="pill">${escapeHtml(t(locale, "stale"))}</div><div class="pill">${escapeHtml(t(locale, "offline"))}</div>` : ""}
              </div>
            ` : `
              <div class="hero-top">
                <div class="stop-name">${escapeHtml(mainTitle)}</div>
                ${mainDistance !== null ? `<span class="pill">${mainDistance.toFixed(0)} m</span>` : ""}
              </div>
              <div class="hero-line-row">
                ${hasMainLineData ? `
                  <div class="hero-line-info">
                    ${mainLine !== "-" ? `<span class="line-badge" style="background: ${mainLineColor}; color: ${mainLineTextColor};">${escapeHtml(mainLine)}</span>` : ""}
                    <span class="next-route">${escapeHtml(mainRoute)}</span>
                  </div>
                ` : `<div class="hero-line-info"></div>`}
                <div class="main-time">
                  ${escapeHtml(statusShort)}
                  <small>${escapeHtml(t(locale, "arrival"))}</small>
                </div>
              </div>
              ${stale ? `
                <div class="pill-row">
                  <div class="pill">${escapeHtml(t(locale, "stale"))}</div><div class="pill">${escapeHtml(t(locale, "offline"))}</div>
                </div>
              ` : ""}
            `}
            ${this._renderBusList(`stop:${primaryGroup.key}`, mainAllBuses, nextBusCount, locale, styleKey)}

            ${this._config.show_alerts ? `<div class="next-list">
              <div style="color: var(--vigobus-muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; margin-top: 4px;">${escapeHtml(t(locale, "alerts"))}</div>
              ${visibleAlerts.length ? visibleAlerts.map((alert) => `
                <div class="next-item alert-item" data-alert-key="${escapeHtml(this._registerAlert(alert))}" role="button" tabindex="0">
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
              ${visibleSecondary.map((group) => this._renderStopItem(group, locale, nextBusCount, styleKey)).join("")}
            </div>
          </div>
        ` : ""}

        ${this._config.device_location_mode ? this._renderDeviceLocationSection(locale, styleKey) : ""}

        ${this._config.trip_planner_mode ? this._renderTripPlannerSection(locale, styleKey) : ""}

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

        ${this._openAlert ? `
          <div class="alert-modal-backdrop" data-alert-backdrop>
            <div class="alert-modal" role="dialog" aria-modal="true">
              <button type="button" class="alert-modal-close" data-alert-close aria-label="${escapeHtml(t(locale, "close"))}">&times;</button>
              <div class="alert-modal-title">${escapeHtml(this._openAlert.title || "-")}</div>
              ${this._openAlert.lineas ? `<div class="alert-modal-meta">${escapeHtml(t(locale, "line"))}: <b>${escapeHtml(this._openAlert.lineas)}</b></div>` : ""}
              ${formatAlertDateRange(this._openAlert, locale) ? `<div class="alert-modal-meta">${escapeHtml(t(locale, "alert_period"))}: <b>${escapeHtml(formatAlertDateRange(this._openAlert, locale))}</b></div>` : ""}
              <div class="alert-modal-body">${escapeHtml(this._openAlert.description || t(locale, "no_alert_details"))}</div>
            </div>
          </div>
        ` : ""}

        ${this._config.trip_planner_mode ? this._renderTripDetailModal(locale) : ""}
      </ha-card>
    `;

    this.shadowRoot.querySelectorAll(".candidate-pill[data-candidate-id]").forEach((button) => {
      button.addEventListener("click", () => {
        this._selectDeviceCandidate(button.dataset.candidateId);
      });
    });

    this.shadowRoot.querySelectorAll(".page-btn[data-page-key]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.disabled) {
          return;
        }
        const key = button.dataset.pageKey;
        const dir = Number(button.dataset.pageDir) || 0;
        this._setBusPage(key, (this._busPage[key] || 0) + dir);
      });
    });

    this.shadowRoot.querySelectorAll(".alert-item[data-alert-key]").forEach((el) => {
      const openThisAlert = () => {
        const alert = this._alertLookup.get(el.dataset.alertKey);
        if (alert) {
          this._openAlertModal(alert);
        }
      };
      el.addEventListener("click", openThisAlert);
      el.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          openThisAlert();
        }
      });
    });

    this.shadowRoot.querySelectorAll("[data-alert-backdrop]").forEach((backdrop) => {
      backdrop.addEventListener("click", (ev) => {
        if (ev.target === backdrop) {
          this._closeAlertModal();
        }
      });
    });

    this.shadowRoot.querySelectorAll("[data-alert-close]").forEach((button) => {
      button.addEventListener("click", () => this._closeAlertModal());
    });

    if (this._config.trip_planner_mode) {
      this.shadowRoot.querySelectorAll("[data-trip-query]").forEach((input) => {
        // Mutate state without re-rendering on every keystroke — a full
        // _render() reassigns shadowRoot.innerHTML, which would destroy this
        // input (and its caret/focus) while the user is still typing. The
        // search only actually runs (and re-renders) on submit.
        input.addEventListener("input", (ev) => {
          this._tripState.query = ev.target.value;
        });
        input.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            this._searchTripDestinations();
          }
        });
      });

      this.shadowRoot.querySelectorAll("[data-trip-search-btn]").forEach((button) => {
        button.addEventListener("click", () => this._searchTripDestinations());
      });

      this.shadowRoot.querySelectorAll("[data-trip-suggestion-index]").forEach((button) => {
        button.addEventListener("click", () => {
          this._selectTripDestination(Number(button.dataset.tripSuggestionIndex));
        });
      });

      this.shadowRoot.querySelectorAll("[data-trip-clear]").forEach((button) => {
        button.addEventListener("click", () => this._clearTripDestination());
      });

      this.shadowRoot.querySelectorAll(".trip-itinerary-row[data-trip-itinerary-index]").forEach((el) => {
        const openThisItinerary = () => this._openTripItineraryDetail(Number(el.dataset.tripItineraryIndex));
        el.addEventListener("click", openThisItinerary);
        el.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            openThisItinerary();
          }
        });
      });

      this.shadowRoot.querySelectorAll("[data-trip-backdrop]").forEach((backdrop) => {
        backdrop.addEventListener("click", (ev) => {
          if (ev.target === backdrop) {
            this._closeTripItineraryDetail();
          }
        });
      });

      this.shadowRoot.querySelectorAll("[data-trip-detail-close]").forEach((button) => {
        button.addEventListener("click", () => this._closeTripItineraryDetail());
      });
    }
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
      accent_color: "#ff6b35",
      card_style: "bold",
      language: "auto",
      line_filter: "",
      device_location_mode: false,
      device_location_title: "",
      device_location_tie_margin_m: 60,
      device_location_max_candidates: 3,
      device_location_refresh_seconds: 20,
      device_location_source: "auto",
      trip_planner_mode: false,
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
    stops.push({ entity: "", title: "", line: "" });
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
          background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
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
          grid-template-columns: 1.4fr 1fr 0.7fr;
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
          <label style="display:grid; gap:6px;">
            <span class="small-hint">${escapeHtml(t(locale, "card_style"))}</span>
            <select id="card_style" style="padding: 10px 12px; border-radius: 12px; background: var(--card-background-color); color: var(--primary-text-color); border: 1px solid var(--divider-color);">
              <option value="glass">${escapeHtml(t(locale, "card_style_glass"))}</option>
              <option value="glass_refined">${escapeHtml(t(locale, "card_style_glass_refined"))}</option>
              <option value="bold">${escapeHtml(t(locale, "card_style_bold"))}</option>
            </select>
          </label>
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
              min="1"
              max="20"
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
            min="1"
            max="20"
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
            min="1"
            max="25"
          ></ha-textfield>
        </div>

        <div class="row">
          <ha-textfield
            id="line_filter"
            label="${escapeHtml(t(locale, "line_filter"))}"
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
              min="0"
              max="500"
            ></ha-textfield>
            <ha-textfield
              id="device_location_max_candidates"
              label="${escapeHtml(t(locale, "device_location_max_candidates"))}"
              type="number"
              min="1"
              max="5"
            ></ha-textfield>
          </div>
          <ha-textfield
            id="device_location_refresh_seconds"
            label="${escapeHtml(t(locale, "device_location_refresh"))}"
            type="number"
            min="10"
            max="300"
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
          <div class="section-title">${escapeHtml(t(locale, "trip_planner_title"))}</div>
          <label style="display:flex; align-items:center; gap:10px;">
            <ha-switch id="trip_planner_mode"></ha-switch>
            <span>${escapeHtml(t(locale, "trip_planner_enable"))}</span>
          </label>
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
    const cardStyle = this.shadowRoot.getElementById("card_style");
    const primaryEntity = this.shadowRoot.getElementById("primary_entity");
    const maxStops = this.shadowRoot.getElementById("max_stops");
    const nextBusesCount = this.shadowRoot.getElementById("next_buses_count");
    const compact = this.shadowRoot.getElementById("compact");
    const showAllStops = this.shadowRoot.getElementById("show_all_stops");
    const showDebug = this.shadowRoot.getElementById("show_debug");
    const showAlerts = this.shadowRoot.getElementById("show_alerts");
    const alertsOnlyMainLine = this.shadowRoot.getElementById("alerts_only_main_line");
    const alertsMax = this.shadowRoot.getElementById("alerts_max");
    const lineFilter = this.shadowRoot.getElementById("line_filter");
    const deviceLocationMode = this.shadowRoot.getElementById("device_location_mode");
    const deviceLocationTitle = this.shadowRoot.getElementById("device_location_title");
    const deviceLocationTieMarginM = this.shadowRoot.getElementById("device_location_tie_margin_m");
    const deviceLocationMaxCandidates = this.shadowRoot.getElementById("device_location_max_candidates");
    const deviceLocationRefreshSeconds = this.shadowRoot.getElementById("device_location_refresh_seconds");
    const deviceLocationSource = this.shadowRoot.getElementById("device_location_source");
    const tripPlannerMode = this.shadowRoot.getElementById("trip_planner_mode");
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
    if (cardStyle) {
      cardStyle.value = CARD_STYLES[config.card_style] ? config.card_style : "bold";
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
    if (lineFilter) {
      lineFilter.value = config.line_filter || "";
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
    if (tripPlannerMode) {
      tripPlannerMode.checked = Boolean(config.trip_planner_mode ?? false);
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
                <ha-textfield class="stop-line" data-index="${index}" label="${escapeHtml(t(locale, "stop_line_filter"))}"></ha-textfield>
              </div>
              <div class="small-hint">${escapeHtml(t(locale, "entity_hint"))}</div>
            </div>
          `).join("")
        : `<div class="hint">${escapeHtml(t(locale, "entity_hint"))}</div>`;

      const rowEntities = this.shadowRoot.querySelectorAll(".stop-entity");
      const rowTitles = this.shadowRoot.querySelectorAll(".stop-title");
      const rowLines = this.shadowRoot.querySelectorAll(".stop-line");
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

      rowLines.forEach((element, index) => {
        element.value = stops[index]?.line || "";
        element.addEventListener("input", (ev) => this._updateStop(index, { line: ev.target.value }));
      });

      removeButtons.forEach((button) => {
        button.addEventListener("click", () => this._removeStop(Number(button.dataset.remove)));
      });
    }

    title?.addEventListener("input", (ev) => this._emitConfig({ title: ev.target.value }));
    accentColor?.addEventListener("input", (ev) => this._emitConfig({ accent_color: ev.target.value }));
    language?.addEventListener("change", (ev) => this._emitConfig({ language: ev.target.value }));
    cardStyle?.addEventListener("change", (ev) => this._emitConfig({ card_style: ev.target.value }));
    primaryEntity?.addEventListener("value-changed", (ev) => this._emitConfig({ primary_entity: ev.detail.value }));
    maxStops?.addEventListener("input", (ev) => this._emitConfig({ max_stops: Number(ev.target.value) || 6 }));
    nextBusesCount?.addEventListener("input", (ev) => this._emitConfig({ next_buses_count: Number(ev.target.value) || 3 }));
    compact?.addEventListener("change", (ev) => this._emitConfig({ compact: ev.target.checked }));
    showAllStops?.addEventListener("change", (ev) => this._emitConfig({ show_all_stops: ev.target.checked }));
    showDebug?.addEventListener("change", (ev) => this._emitConfig({ show_debug: ev.target.checked }));
    showAlerts?.addEventListener("change", (ev) => this._emitConfig({ show_alerts: ev.target.checked }));
    alertsOnlyMainLine?.addEventListener("change", (ev) => this._emitConfig({ alerts_only_main_line: ev.target.checked }));
    alertsMax?.addEventListener("input", (ev) => this._emitConfig({ alerts_max: Number(ev.target.value) || 3 }));
    lineFilter?.addEventListener("input", (ev) => this._emitConfig({ line_filter: ev.target.value }));
    deviceLocationMode?.addEventListener("change", (ev) => this._emitConfig({ device_location_mode: ev.target.checked }));
    deviceLocationTitle?.addEventListener("input", (ev) => this._emitConfig({ device_location_title: ev.target.value }));
    deviceLocationTieMarginM?.addEventListener("input", (ev) => this._emitConfig({ device_location_tie_margin_m: Number(ev.target.value) || 60 }));
    deviceLocationMaxCandidates?.addEventListener("input", (ev) => this._emitConfig({ device_location_max_candidates: Number(ev.target.value) || 3 }));
    deviceLocationRefreshSeconds?.addEventListener("input", (ev) => this._emitConfig({ device_location_refresh_seconds: Number(ev.target.value) || 45 }));
    deviceLocationSource?.addEventListener("change", (ev) => this._emitConfig({ device_location_source: ev.target.value || "auto" }));
    tripPlannerMode?.addEventListener("change", (ev) => this._emitConfig({ trip_planner_mode: ev.target.checked }));
    addStop?.addEventListener("click", () => this._addStop());
  }
}

customElements.define("vigobus-card", VigoBusCard);
customElements.define("vigobus-card-editor", VigoBusCardEditor);

if (!customElements.get("hui-panel-view")) {
  // No-op, solo para evitar warnings en algunos entornos.
}
