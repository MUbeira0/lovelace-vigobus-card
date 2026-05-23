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
