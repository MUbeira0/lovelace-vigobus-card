# VigoBus Card

![VigoBus Card](assets/logo.svg)

Dashboard card for Home Assistant that displays VigoBus and Vitrasa arrival times, routes, alerts, and multiple configured stops.

[![Latest Release](https://img.shields.io/github/v/release/MUbeira0/lovelace-vigobus-card?sort=semver)](https://github.com/MUbeira0/lovelace-vigobus-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.1.0%2B-blue.svg)](https://www.home-assistant.io/)
[![HACS](https://img.shields.io/badge/HACS-Dashboard-orange.svg)](https://hacs.xyz/)

## Features

- Main stop hero layout
- Secondary stops with matching style — the home `nearest` stop and any manually configured extra stops show automatically; per-device nearest sensors (one per tracked phone/person) are grouped separately instead of cluttering this list (see below)
- Per-device nearest stops shown as a compact tab picker instead of one card per device, when you have several
- Each upcoming bus is marked as live (GPS-tracked) or scheduled (timetable only), the same distinction apps like Moovit show
- Route-aware upcoming buses, with pagination when a stop has more than a page of buses
- Optional line filter (global or per stop) to only show arrivals for one bus line
- Multiple route variants shown per line when available
- Alerts per active line
- Spanish, English, and Galician UI
- Compact mode and card editor
- Follows your Home Assistant light/dark theme instead of a fixed dark look

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

- `title`: Card title
- `show_alerts`: Show active service alerts
- `show_all_stops`: Show main stop plus extra configured stops
- `compact`: Use compact mode for tighter dashboards
- `line_filter`: Only show buses for this line (e.g. `C1`) everywhere on the card, unless a stop overrides it
- `stops`: each entry accepts `entity`, `title`, and an optional `line` that overrides `line_filter` for that stop only

By default the card shows the `nearest` (home) sensor plus any `sensor.vigobus_*` stop the `vigobus-integration` backend was configured with (its `extra_stops`). If the backend also creates per-device nearest sensors (`nearest_devices` / `auto_nearest_devices`, one per tracked phone or person), those are **not** included in that automatic list — with several devices they'd be a wall of near-identical cards. Instead they get their own "By device" section with a compact tab picker, so you switch between devices instead of scrolling past all of them. Explicitly add a `sensor.vigobus_*` entity to `stops` if you want a specific stop pinned regardless of these defaults.

The card identifies per-device sensors from their `is_device_nearest` attribute (`vigobus-integration` v2.3.1+), which works regardless of your Home Assistant language; with an older backend it falls back to guessing from the entity_id (`nearest_<device>`), which can miss stops on some locales.

When a stop has more upcoming buses than fit on one page, a "next/prev" control appears below the list instead of hiding them. Each bus row also shows a small dot: green means the estimate comes from the bus's live GPS position, gray means it's a schedule-only projection (the vehicle hasn't reported a position yet) — hover it for the label.

## "My location" mode (per-viewer nearest stop)

Every entity-based stop on this card (including the `nearest` one) reflects
a single shared Home Assistant state, the same for anyone looking at the
dashboard. Set `device_location_mode: true` to add an extra section that
instead asks **each viewing device's own browser/app** for its live GPS
location and shows the stop(s) closest to *that* device — a phone and a
tablet looking at the same dashboard can see different stops. It requires
the `vigobus-integration` backend (v2.1.0+) for the stateless
`vigobus.nearest_stops` service, and the browser/app must grant the page
location permission.

Because the Home Assistant Companion **app** runs inside a WebView where
`navigator.geolocation` is unreliable, the card falls back to the coordinates
of the **viewer's `person` entity** (matched by the logged-in user) — the
location the app already reports to the server. Control this with
`device_location_source`:

- `auto` (default): try the browser GPS, fall back to your `person` if it is
  unavailable or denied (works in the app).
- `browser`: browser GPS only, no fallback.
- `person`: skip the browser and always use your `person` coordinates.

For the `person` fallback to have fresh coordinates, enable *Background
location* and *Single accurate location* in the Companion app sensors.

```yaml
type: custom:vigobus-card
title: VigoBus
device_location_mode: true
device_location_source: auto # auto | browser | person
device_location_title: "" # optional, defaults to a translated label
device_location_tie_margin_m: 60 # also show stops within this many meters of the closest one
device_location_max_candidates: 3
device_location_refresh_seconds: 45
```

When more than one stop is within `device_location_tie_margin_m` of the
closest one, the section shows a row of chips so the viewer can pick which
one to see — useful when the nearest stop alone is ambiguous (e.g. stops on
opposite sidewalks).

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

## Support

- Issues: https://github.com/MUbeira0/lovelace-vigobus-card/issues
- Releases: https://github.com/MUbeira0/lovelace-vigobus-card/releases
