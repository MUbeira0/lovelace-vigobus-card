<p align="center"><img src="https://raw.githubusercontent.com/MUbeira0/lovelace-vigobus-card/main/assets/logo.svg" alt="VigoBus Card" width="480"></p>

<p align="center">
  <b>English</b> ·
  <a href="https://github.com/MUbeira0/lovelace-vigobus-card/blob/main/README.es.md">Español</a> ·
  <a href="https://github.com/MUbeira0/lovelace-vigobus-card/blob/main/README.gl.md">Galego</a>
</p>

# VigoBus Card

Home Assistant dashboard card for the **buses of Vigo (Vitrasa)**: arrival times, routes, alerts, several stops, "my location" and a trip planner with a map.

[![Latest release](https://img.shields.io/github/v/release/MUbeira0/lovelace-vigobus-card?sort=semver)](https://github.com/MUbeira0/lovelace-vigobus-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.1.0%2B-blue.svg)](https://www.home-assistant.io/)
[![Marketplace](https://img.shields.io/badge/HA%20Marketplace-Dashboard-orange.svg)](https://www.home-assistant.io/integrations/marketplace/)

It needs the [VigoBus Pro integration](https://github.com/MUbeira0/vigobus-integration), which provides the sensors and services the card shows.

## What you get

- **Three visual styles** (`card_style`): `bold` (transit-app look, default), `glass` and `glass_refined`. Pick one from the visual editor, no YAML needed.
- **Colour-coded line badges** using Vitrasa's official colours when published (otherwise a colour-blind-checked palette).
- **Live or scheduled**: each bus has a small pill, green *Live* (GPS-tracked) or grey *Scheduled* (timetable only).
- **Main stop** plus **secondary stops** (your home nearest stop and any extra stop configured in the integration). Per-device nearest sensors are not listed automatically.
- Pagination when a stop has more buses than fit, optional **line filter** (global or per stop) and **alerts** per active line.
- **"My location"**: each phone or tablet sees the stop closest to *itself*.
- **Trip planner** with route options, a map and your live position.
- Spanish, English and Galician; compact mode; follows your light/dark theme.
- Efficient: it only redraws when the entities it shows change.

## Requirements

- Home Assistant **2024.1.0 or newer**.
- The **VigoBus Pro** integration. Some features need a minimum version:

| Feature | Integration version |
|---|---|
| Reliable per-device sensor detection (`is_device_nearest`) | 2.3.1+ |
| "My location" (`vigobus.nearest_stops`) | 2.1.0+ |
| Trip planner | 2.15.0+ |
| Street-level walking legs (OpenRouteService key) | 2.17.0+ |

## Installation

Since Home Assistant **2026.11**, HACS is built into Home Assistant as the [Marketplace](https://www.home-assistant.io/integrations/marketplace/).

1. Open the **Marketplace**, search for **VigoBus Card** and install it. The dashboard resource is added for you.
2. Reload the dashboard (clear the browser cache if the card does not show up).

Already installed with HACS? Nothing to do: Home Assistant migrates it automatically on the first start of 2026.11 and keeps updating it.

**Manual / older Home Assistant (with HACS):** add `https://github.com/MUbeira0/lovelace-vigobus-card` as a custom repository, category **Dashboard**, then install **VigoBus Card**.

### Resource

If the resource is not added automatically, add it under *Settings → Dashboards → ⋮ → Resources* (type `JavaScript module`):

```text
/local/community/lovelace-vigobus-card/vigobus-card.js
```

On HACS before 2026.11 the path is `/hacsfiles/lovelace-vigobus-card/vigobus-card.js`.

## Quick start

Add the card from the dashboard editor (**VigoBus Card**) and configure it in the visual editor, or use YAML:

```yaml
type: custom:vigobus-card
title: VigoBus
show_alerts: true
show_all_stops: true
```

By default it shows the `nearest` (home) sensor and every `sensor.vigobus_*` stop configured in the integration.

## Options

Everything is editable from the visual editor; YAML is shown for reference.

| Option | Default | What it does |
|---|---|---|
| `title` | `VigoBus` | Card title. |
| `card_style` | `bold` | `bold`, `glass` or `glass_refined`. |
| `accent_color` | `#ff6b35` | Accent colour (hero, pills, highlights). |
| `language` | `auto` | `auto` (follows Home Assistant), `es`, `en` or `gl`. |
| `compact` | `false` | Tighter layout. |
| `primary_entity` | empty | Sensor used as the main stop. Empty = automatic. |
| `show_all_stops` | `true` | Show the main stop plus the secondary ones. |
| `max_stops` | `6` | Maximum number of secondary stops. |
| `next_buses_count` | `3` | Buses per page before pagination. |
| `line_filter` | empty | Only show this line (e.g. `C1`) everywhere, unless a stop overrides it. |
| `stops` | – | List of stops; each accepts `entity`, `title` and an optional `line` that overrides `line_filter` for that stop. |
| `show_alerts` | `true` | Show active service alerts. |
| `alerts_only_main_line` | `false` | Only alerts of the main stop's current line. |
| `alerts_max` | `3` | Maximum alerts per stop. |
| `show_debug` | `false` | Shows technical info about the nearest stop (useful for bug reports). |
| `device_location_mode` | `false` | Enables "My location" (below). |
| `trip_planner_mode` | `false` | Enables the trip planner (below). |

A stop with no upcoming buses shows a clean "no estimates" message instead of placeholders.

```yaml
type: custom:vigobus-card
stops:
  - entity: sensor.vigobus_urzaiz
    title: Work
    line: C1
```

## "My location" mode

Normally every stop reflects one shared Home Assistant state, the same for everyone. With `device_location_mode: true` the card asks **each device's own browser/app** for its live location and shows the stop closest to *that* device, so a phone and a tablet on the same dashboard can show different stops.

The Home Assistant Companion app runs in a WebView where browser GPS is unreliable, so the card can fall back to the **`person` entity of the logged-in user**. If it matches, the section is titled with that person's name.

```yaml
type: custom:vigobus-card
device_location_mode: true
device_location_source: auto      # auto | browser | person
device_location_title: ""         # optional, replaces the automatic heading
device_location_tie_margin_m: 60  # also show stops this close to the nearest one
device_location_max_candidates: 3
device_location_refresh_seconds: 20  # minimum 10
```

| `device_location_source` | Behaviour |
|---|---|
| `auto` | Browser GPS, falling back to your `person` if it is unavailable or denied (works in the app). |
| `browser` | Browser GPS only, no fallback and no name. |
| `person` | Always use your `person` coordinates. |

For fresh `person` coordinates, enable *Background location* and *Single accurate location* in the Companion app sensors. If several stops are within `device_location_tie_margin_m` of the closest one (for example opposite sidewalks), chips let you choose which one to see. Each lookup forces a new GPS fix and pauses while the dashboard is not visible, so it does not waste battery. It needs integration 2.1.0+ and location permission in the browser/app.

## Trip planner

Set `trip_planner_mode: true` (or use the toggle in the visual editor) to plan a real bus trip, with transfers, from your current location to an address or place you search for (a school, a mall, a hospital). It needs integration **2.15.0+**.

```yaml
type: custom:vigobus-card
trip_planner_mode: true
trip_planner_ors_api_key: ""  # optional, see below
```

1. Type a destination and search. Each result shows its short name and full address.
2. Pick one: the card plans the trip from your live location (same geolocation / `person` fallback as "My location") and lists every reasonable option with departure and arrival times, duration, transfers and line badges.
3. Tap a row to **activate** it: a map shows the walk legs (dashed grey), each bus leg in its line colour following the real street route, your start (blue) and destination (red), and the full leg-by-leg breakdown.
4. A green dot follows **your live position** on the map. The trip stays active in this browser, even after a reload, until you tap *Cancel* or its arrival time passes.

**Walking routes:** walk legs are a straight line by default. Set `trip_planner_ors_api_key` to your own free [OpenRouteService](https://openrouteservice.org/dev) key (2000 requests/day) so the first and last walk legs follow real streets (integration 2.17.0+). It cannot be a shared key, because the free tier is per key. Without a key, nothing is requested.

**Known limits:** only the first bus leg is checked against live data (the rest is timetable only), a trip planned very late at night may miss a bus that started the previous service day, and a very new place may not be in OpenStreetMap yet.

## Privacy and attributions

- Destination search sends what you type to OpenStreetMap's public **Nominatim** service (through the integration). Results are credited to *OpenStreetMap contributors* in the card.
- The map uses [MapLibre GL JS](https://maplibre.org/) and [OpenFreeMap](https://openfreemap.org) tiles, loaded from a public CDN (`unpkg.com`) **only while the trip planner is in use**. OpenFreeMap is used because OpenStreetMap's own tile servers do not allow this kind of usage.
- Your OpenRouteService key, if you set one, is stored in the card configuration and is only sent to OpenRouteService.

## Troubleshooting

- **The card does not render:** check that the resource is loaded and refresh the dashboard cache.
- **It disappeared after moving from HACS to 2026.11:** check that the resource URL points to a file that exists (see *Resource*).
- **Changes do not appear:** reload the browser or the app cache.
- **Stops are missing:** confirm the VigoBus Pro integration is installed and its sensors exist.
- **"My location" shows nothing:** grant location permission, or use `device_location_source: person`.

## Development

```bash
npm test
```

Runs a dependency-free suite against `dist/vigobus-card.js` (stop grouping and line filters, the `card_style` selector, and regression checks for two bugs that shipped before). CI runs it on every push.

## Support

[Issues](https://github.com/MUbeira0/lovelace-vigobus-card/issues) · [Releases](https://github.com/MUbeira0/lovelace-vigobus-card/releases)
