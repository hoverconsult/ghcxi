# BCXI GitHub Pages Deployment Guide

## Overview

This folder is the public GitHub Pages site for the Ghana CX / BCXI Experience Intelligence Platform.

It contains:

- Root homepage: `/index.html`
- Banking sector directory and bank review flow: `/banks/`
- Fuel Stations coming-soon directory: `/fuel-stations/`
- Coming-soon directories for utilities, education, public service, telecommunications, insurance and healthcare
- Support pages: `/pages/`
- Configuration data: `/data/`
- Static assets: `/assets/`

The public survey flow currently routes banking users to the configured Google Form. Benchmarking, survey storage and admin workflows remain outside this static site.

## Current Sector State

- Banking: active, with 23 bank cards, logos, branded review pages and welcome image assets.
- Fuel Stations: coming soon, with Ghana fuel retail brand preview cards.
- Utilities: coming soon, with Ghana utilities institution map.
- Education: coming soon, with Ghana education institution map.
- Public & Civil Service: coming soon, with Ghana public agency and district service map.
- Telecommunications: coming soon, with Ghana telecom institution map.
- Insurance: coming soon, with Ghana insurer and regulator map.
- Healthcare: coming soon, with Ghana healthcare institution map.

## Directory Structure

```text
github/
  index.html
  manifest.webmanifest
  sw.js
  banks/
    index.html
    review.html
  fuel-stations/
    index.html
  utilities/
  education/
  public-service/
  telecommunications/
  insurance/
  healthcare/
  pages/
    contact.html
    institutions.html
    methodology.html
    privacy.html
    sector-metrics.html
  data/
    config.js
    institutions.js
  styles/
    main.css
    sectors.css
  scripts/
    main.js
    sectors.js
  assets/
    dashboards/
    institutions/
    sections/
    shared/
    web/
    welcome/
```

## GitHub Pages Deployment

1. Commit the `github/` folder and required static assets.
2. Push to the target repository branch.
3. In GitHub repository settings, configure Pages to publish from the `github/` folder if the repository supports folder publishing, or copy the contents of `github/` to the Pages root if required by that repository.
4. Wait for GitHub Pages to finish publishing.
5. Verify:
   - `/`
   - `/banks/`
   - `/banks/review.html?institution=gcb-bank-plc`
   - `/fuel-stations/`
   - `/public-service/`
   - `/pages/sector-metrics.html`

## Verification Commands

Run JavaScript syntax checks:

```bash
node --check github/data/config.js
node --check github/data/institutions.js
node --check github/scripts/main.js
node --check github/scripts/sectors.js
```

Run browser checks against a local static server:

```bash
npx serve github -l 4173
```

Then verify local routes at:

```text
http://127.0.0.1:4173/
http://127.0.0.1:4173/banks/
http://127.0.0.1:4173/fuel-stations/
```

## Asset Notes

- Bank logos and bank welcome images are integrated under `assets/institutions/{bank-slug}/`.
- The Access Bank logo has been replaced with the supplied Access Bank artwork.
- The Banking Sector Index Dashboard is stored under `assets/dashboards/`.
- Fuel station logo tiles are local brand-identification cards, not downloaded official artwork. Replace with approved official logo files when available.

## Future Additions

To add another sector:

1. Add the sector object in `data/config.js`.
2. Create `/{sector-slug}/index.html`.
3. Add a coming-soon card and a Ghana-specific institution map.
4. Add review flows only when surveys and approved institution assets are ready.
