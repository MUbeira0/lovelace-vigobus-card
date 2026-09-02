# VigoBus Card

![VigoBus Card](assets/logo.svg)

Dashboard card for Home Assistant that displays VigoBus and Vitrasa arrival times, routes, alerts, and multiple configured stops.

[![Latest Release](https://img.shields.io/github/v/release/MUbeira0/lovelace-vigobus-card?sort=semver)](https://github.com/MUbeira0/lovelace-vigobus-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.1.0%2B-blue.svg)](https://www.home-assistant.io/)
[![HACS](https://img.shields.io/badge/HACS-Dashboard-orange.svg)](https://hacs.xyz/)

## Features

- Main stop hero layout
- Secondary stops with matching style
- Route-aware upcoming buses
- Multiple route variants shown per line when available
- Alerts per active line
- Spanish, English, and Galician UI
- Compact mode and card editor

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
