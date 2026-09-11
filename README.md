# VigoBus Card

![VigoBus Card](assets/logo.svg)

Dashboard card for Home Assistant that displays VigoBus and Vitrasa arrival times, routes, alerts, and multiple configured stops.

[![Latest Release](https://img.shields.io/github/v/release/MUbeira0/lovelace-vigobus-card?sort=semver)](https://github.com/MUbeira0/lovelace-vigobus-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.1.0%2B-blue.svg)](https://www.home-assistant.io/)
[![HACS](https://img.shields.io/badge/HACS-Dashboard-orange.svg)](https://hacs.xyz/)

## Features

- Three selectable visual styles (`card_style`): classic gradient glass, refined glass, and a bold transit-app look — pick whichever fits your dashboard from the card editor, no YAML needed
- Bold, transit-app-inspired look: each bus line gets its own color-coded badge (using Vitrasa's own official line color when published, falling back to a fixed colorblind-checked palette), with a matching accent border on its row
- Main stop hero layout, sized to stay in proportion with the rest of the card instead of dominating it
- Secondary stops with matching style — the home `nearest` stop and any manually configured extra stops show automatically; per-device nearest sensors (one per tracked phone/person) are excluded from this automatic list (see "My location" below for the per-viewer alternative)
- Each upcoming bus is marked live (GPS-tracked) or scheduled (timetable only) with a small pill, the same distinction apps like Moovit show
- Route-aware upcoming buses, with pagination when a stop has more than a page of buses
- Optional line filter (global or per stop) to only show arrivals for one bus line
- Alerts per active line
- Spanish, English, and Galician UI
- Compact mode and card editor
- Follows your Home Assistant light/dark theme instead of a fixed dark look
- Only re-renders when the entities it actually shows change, instead of on every unrelated state change in the house — no more restarted animations or visual "jumps" from background dashboard activity
- A stop with no upcoming buses shows a clean "no estimations" message instead of stray placeholder dashes or a raw "unknown"

## Installation with HACS

1. Open HACS.
2. Add a custom repository.
3. Use the repository URL for this card.
4. Select the category `Dashboard`.
5. Install `VigoBus Card`.

Repository URL: `https://github.com/MUbeira0/lovelace-vigobus-card`

## Resource

If HACS does not add the resource automatically, add:

`/hacsfiles/lovelace-vigobus-card/vigobus-card.js`

## Configuration options

Everything below is editable from the card's visual editor (click "Edit" on
the card in a dashboard) — you don't need to write YAML for any of it. The
YAML form is shown here just as reference.

- `title`: Card title
- `card_style`: `glass` (classic gradient hero), `glass_refined` (glass with live-pulse dots and accent border), or `bold` (transit badges, default)
- `accent_color`: Accent color used for the hero gradient, pills, and highlights
- `language`: `auto` (follows Home Assistant), `es`, `en`, or `gl`
- `next_buses_count`: How many upcoming buses to show per page before pagination kicks in
- `show_alerts`: Show active service alerts
- `alerts_only_main_line`: Restrict alerts to the main stop's current line
- `alerts_max`: Maximum number of alerts to show per stop
- `show_all_stops`: Show main stop plus extra configured stops
- `max_stops`: Maximum number of secondary stops to show
- `compact`: Use compact mode for tighter dashboards
- `line_filter`: Only show buses for this line (e.g. `C1`) everywhere on the card, unless a stop overrides it
- `stops`: each entry accepts `entity`, `title`, and an optional `line` that overrides `line_filter` for that stop only

By default the card shows the `nearest` (home) sensor plus any `sensor.vigobus_*` stop the `vigobus-integration` backend was configured with (its `extra_stops`). If the backend also creates per-device nearest sensors (`nearest_devices` / `auto_nearest_devices`, one per tracked phone or person), those are **not** included in that automatic list — the per-viewer "My location" mode below is the intended way to show someone their own nearest stop, without a manual switcher. Explicitly add a `sensor.vigobus_*` entity to `stops` if you want a specific device sensor pinned on the dashboard regardless of these defaults.

The card identifies per-device sensors from their `is_device_nearest` attribute (`vigobus-integration` v2.3.1+), which works regardless of your Home Assistant language; with an older backend it falls back to guessing from the entity_id (`nearest_<device>`), which can miss stops on some locales.

When a stop has more upcoming buses than fit on one page, a "next/prev" control appears below the list instead of hiding them. Each bus row also shows a small pill: green **"En vivo"/"Live"** means the estimate comes from the bus's live GPS position, gray **"Horario"/"Scheduled"** means it's a schedule-only projection (the vehicle hasn't reported a position yet).

## "My location" mode (per-viewer nearest stop)

Every entity-based stop on this card (including the `nearest` one) reflects
a single shared Home Assistant state, the same for anyone looking at the
dashboard. Set `device_location_mode: true` to add an extra section that
instead asks **each viewing device's own browser/app** for its live GPS
location and shows the stop(s) closest to *that* device — a phone and a
tablet looking at the same dashboard can see different stops, automatically,
with no picker to tap. It requires the `vigobus-integration` backend
(v2.1.0+) for the stateless `vigobus.nearest_stops` service, and the
browser/app must grant the page location permission. All of this section's
options are in the card's visual editor, under "Mi ubicación" — the YAML
below is only shown for reference.

Because the Home Assistant Companion **app** runs inside a WebView where
`navigator.geolocation` is unreliable, the card falls back to the coordinates
of the **viewer's `person` entity** (matched by the logged-in user) — the
location the app already reports to the server. When that match succeeds,
the section heads itself with that person's name (e.g. "Miguel · tu
parada") instead of a generic label. Control the source with
`device_location_source`:

- `auto` (default): try the browser GPS, fall back to your `person` if it is
  unavailable or denied (works in the app).
- `browser`: browser GPS only, no fallback (no name is shown, since there is
  no `person` match).
- `person`: skip the browser and always use your `person` coordinates.

For the `person` fallback to have fresh coordinates, enable *Background
location* and *Single accurate location* in the Companion app sensors.

```yaml
type: custom:vigobus-card
title: VigoBus
device_location_mode: true
device_location_source: auto # auto | browser | person
device_location_title: "" # optional, overrides the auto-generated heading
device_location_tie_margin_m: 60 # also show stops within this many meters of the closest one
device_location_max_candidates: 3
device_location_refresh_seconds: 20 # minimum 10
```

Which stop to show is always automatic — there is no picker for *who* it is.
The one exception: when more than one stop is within
`device_location_tie_margin_m` of the closest one for that person, a row of
chips lets them pick *which stop* to see, since the nearest stop alone is
genuinely ambiguous (e.g. stops on opposite sidewalks).

This mode is intentionally as live as possible: every lookup forces a brand
new GPS fix instead of letting the browser hand back a stale cached
position, and it pauses on its own while the dashboard tab/app isn't
visible — jumping straight to a fresh reading the moment you switch back to
it — so lowering `device_location_refresh_seconds` doesn't cost battery or
network while you're not even looking at the screen.

## Trip planner

Set `trip_planner_mode: true` (toggle in the card's visual editor, under
"Planificador de viaje") to add a section that plans a real bus trip — with
transfers — from your current location to an address or named place (a
school, a shopping mall, a hospital) you search for. It requires the
`vigobus-integration` backend (v2.15.0+) for the stateless `vigobus.geocode`
and `vigobus.plan_trip` services; `geocode` uses OpenStreetMap's public
Nominatim service to turn what you typed into coordinates.

```yaml
type: custom:vigobus-card
title: VigoBus
trip_planner_mode: true
```

Type a destination and search; each result shows its short name and full
address. Picking one immediately plans the trip using your device's live
location as the origin (same geolocation/`person` fallback as "My location"
above), and shows every reasonable route option Moovit/Google Maps-style —
not just the fastest one — as its own row: depart/arrive times, total
duration, transfer count, and line badges. Tap a row to see its full
walk/bus leg breakdown. Click "Cambiar destino" to search again.

Because destination search sends what you type to OpenStreetMap's public
Nominatim service, results are attributed to "OpenStreetMap contributors"
right in the search UI, as their usage policy requires.

Known limitations (shared with the backend): only the itinerary's first bus
leg is cross-checked against live arrival data, the rest is timetable-only;
a trip planned very late at night may miss a bus that started running the
previous service day; and a very new or obscure place may not be in
OpenStreetMap's data yet.

## Troubleshooting

- If the card does not render, verify the resource is loaded and refresh the dashboard cache.
- If updates do not appear, restart Home Assistant frontend and reload browser/app cache.
- If entities are missing, confirm the VigoBus integration is installed and sensors exist.

## Example

```yaml
type: custom:vigobus-card
title: VigoBus
show_alerts: true
show_all_stops: true
```

## Development

`npm test` (or `node test/vigobus-card.test.js`) runs a dependency-free
regression suite against `dist/vigobus-card.js` — stop grouping/line-filter
logic, the `card_style` selector, and a couple of tripwires for two bugs that
previously shipped silently (a missing visual editor, a mobile layout
overflow). It runs on every push/PR via GitHub Actions.

## Support

- Issues: https://github.com/MUbeira0/lovelace-vigobus-card/issues
- Releases: https://github.com/MUbeira0/lovelace-vigobus-card/releases
