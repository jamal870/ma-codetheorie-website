# Deployment

**Live-URL:** https://codetheorie.ma
**Repo:** `jamal870/codetheorie-ma`, Branch `main`
**Hosting:** Netlify (Auto-Deploy bei Push auf `main`)

## Build

- `netlify.toml`: `command = "bun install && bun run build"`, `publish = "dist"`, `NODE_VERSION = 20`.
- `vite.config.ts`: explizite Konfiguration; beim Build erzeugt Nitro mit dem Preset `netlify` die SSR-Funktion unter `.netlify/functions-internal/` und die statischen Dateien unter `dist/`.
- **Statische Seiten:** `bun run build` führt nach `vite build` das Skript `scripts/snapshot-static-pages.mjs` aus. Es rendert jede Seite aus `public/sitemap.xml` einmal mit dem frisch gebauten SSR-Handler und schreibt sie als `dist/<pfad>/index.html`. Netlify liefert Dateien aus `dist/` vor der SSR-Funktion aus (`preferStatic`), die Seiten kommen also direkt vom CDN (vorher rund 1,1–1,9 s TTFB, weil jede Anfrage die Funktion aufrief). Eine neue Seite braucht nur einen Eintrag in `public/sitemap.xml`. Die Weiterleitungs-Routen (`/code`, `/pro`, `/theorie`) und unbekannte Pfade laufen weiter über die SSR-Funktion. Schlägt eine Seite beim Rendern fehl, bricht der Build ab und der alte Deploy bleibt live. Die erzeugten Dateien werden nicht committet.
- Sicherheits-Header: in `netlify.toml` (statische Dateien) und `src/server.ts` (SSR-Antworten). Beide Listen bleiben gleich, mit einer Ausnahme: die SSR-CSP (nur noch für Routen, die nicht vorgerendert sind; die statischen Seiten bekommen die CSP aus `netlify.toml` mit `'unsafe-inline'`, ein Nonce ist dort nicht möglich) setzt pro Anfrage einen Nonce (`script-src 'self' 'nonce-…'`) statt `'unsafe-inline'`; der Nonce wird in `src/server.ts` erzeugt und über den Request-Header `x-csp-nonce` an `getRouter()` (`src/router.tsx`) gereicht.
- Schriften (Instrument Sans, Syne) liegen unter `public/fonts/` und werden in `src/styles.css` deklariert — keine Google-Fonts-Anfragen mehr.
- Sicherheitskontakt: `SECURITY.md` und `public/.well-known/security.txt` (RFC 9116). Dependabot: `.github/dependabot.yml`.

## Hinweise

- Kein eingecheckter statischer Snapshot (früher `deploy-static/`): er blockiert Live-Updates und gehört nicht ins Repo. Der Snapshot im Build (siehe oben) wird bei jedem Deploy neu erzeugt.
- Die Weiterleitung `siya9a.pro` → `codetheorie.ma` ist ein separates Netlify-Projekt (`siya9a-redirect`). Dessen Konfiguration lag früher im Ordner `siya9a/` des alten Repos und ist in `docs/siya9a-redirect/` abgelegt.
- Bei Fehlern: In Netlify unter „Deploys" einen früheren Deploy auswählen und „Publish deploy" klicken.
