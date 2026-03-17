# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository overview
- This repo contains two separate Node projects:
  - `BigBradys.Client`: React + TypeScript single-page app (CRACO + Tailwind).
  - `BigBradys.API`: Express API that currently handles contact form submissions.
- There is no root workspace script orchestration; run each project with its own `npm` commands.

## Common commands
Run commands from the repository root with `npm --prefix ...` or by `cd`-ing into each project.

### Install dependencies
- Client: `npm --prefix BigBradys.Client install`
- API: `npm --prefix BigBradys.API install`

### Run locally (development)
- Client dev server: `npm --prefix BigBradys.Client run dev`
- API server: `npm --prefix BigBradys.API start`

### Build
- Client production build: `npm --prefix BigBradys.Client run build`
- API has no separate build step (plain Node/Express runtime).

### Test
- Client test suite: `npm --prefix BigBradys.Client test`
- Run a single client test file: `npm --prefix BigBradys.Client test -- --watchAll=false src/App.test.js`
- API currently has no test script configured.

### Lint
- No dedicated lint script is configured in either project.
- For client code, lint checks are implicitly part of the CRA/CRACO toolchain during build/test.

## Environment and runtime configuration
- API expects `MONGOPASSWORD` (used in `BigBradys.API/data/mongodb.js` to construct the MongoDB URI).
- Client reads `REACT_APP_API_ROOT` in `BigBradys.Client/src/Service/apiWrapper.ts` and defaults to `http://localhost:4000/api`.
- API default local port is `4000` (`BigBradys.API/bin/www`), but deployment expects `PORT` from environment when provided.

## High-level architecture
### Frontend (`BigBradys.Client`)
- App shell and routing are centralized in `src/App.tsx` using `react-router-dom` (`Switch` + `Route`).
- Route definitions are data-driven via `NavigationItem` objects that pair route metadata with page JSX.
- `src/Pages/*` contains top-level page composition; most content is static marketing content except `Contact.tsx`.
- `src/Service/*` is the API boundary:
  - `apiWrapper.ts` centralizes Axios POST requests and API root configuration.
  - `contactForm.ts` is a focused endpoint-specific service wrapper.
- `src/Domain/*` defines DTO-style classes/enums (e.g., `ContactForm`, `apiResponse`, alert types) used across pages/services.
- `src/Constants/*` holds endpoint paths, alert mappings, icon metadata, and ingredient datasets.

### Backend (`BigBradys.API`)
- `app.js` wires middleware and routes; includes one custom API endpoint:
  - `POST /api/contactform`
- Request handling is split by responsibility:
  - `commands/contactform/handleContactFormSubmission.js`: command/service layer with success/error shaping.
  - `data/mongodb.js`: persistence layer that inserts into `bigbradys.contactFormSubmissions`.
- Legacy Express scaffold routes (`/` and `/users`) still exist but are not core business paths.

## Cross-project request flow (important)
Contact form flow spans both projects:
1. User submits form in `BigBradys.Client/src/Pages/Contact.tsx`.
2. Page builds a `ContactForm` domain object and calls `submitContactForm`.
3. `src/Service/contactForm.ts` calls `post('/contactForm', ...)` via `apiWrapper`.
4. API receives `POST /api/contactform` in `BigBradys.API/app.js`.
5. API command delegates to `createForm` in `data/mongodb.js`.
6. Mongo insert result is returned to client; UI sets success alert state on HTTP 200.
