# MatiMitra – Smart Precision Agriculture

A React + Vite conversion of the original single-file MatiMitra HTML dashboard.
It includes authentication (demo), farm dashboard, field boundaries, a live Leaflet
field map with a simulated drone patrol, telemetry analytics and system settings.

## Tech stack

- React 18 + Vite 5
- React Router 6 (client-side routing)
- Tailwind CSS 3 (same theme/colours as the original `tailwind.config`)
- Leaflet + react-leaflet (live map)
- Chart.js + react-chartjs-2 (charts)
- Font Awesome (icons) and Plus Jakarta Sans (font), both bundled locally via npm

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173).

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Routes

| Path         | Page                      |
| ------------ | ------------------------- |
| `/`          | Overview & Summary        |
| `/dashboard` | Farm Dashboard            |
| `/fields`    | Fields & Boundaries       |
| `/live-map`  | Live Field Location       |
| `/analytics` | Telemetry Analytics       |
| `/settings`  | System Settings           |

## Project structure

```text
├── public/                 favicon
├── src/
│   ├── assets/             local images (hero background)
│   ├── components/         layout, auth, common, landing, dashboard, fields, map, analytics, settings
│   ├── context/            AuthContext, NotificationContext
│   ├── data/               field data, chart configs, overview content
│   ├── hooks/              useFilteredFields
│   ├── layouts/            AppLayout (header + sidebar + routed content)
│   ├── pages/              one component per route
│   ├── styles/             Leaflet dark-theme overrides
│   ├── utils/              status colours, Chart.js registration
│   ├── App.jsx             route table
│   ├── main.jsx            entry point
│   └── index.css           Tailwind layers, base + scrollbar styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Notes

- **Authentication is a front-end demo only.** There is no backend; any email/password
  is accepted. Only `{ name, email, role }` is stored in `localStorage`
  (key `matimitra_user`) – the password is never stored.
- **Environment variables:** none are required. Map tiles come from public CARTO and
  Esri tile servers, so an internet connection is needed for the map background.
  If you later add an API or key, put it in a `.env` file (git-ignored) and commit
  a `.env.example` with placeholder values. Vite only exposes variables prefixed with `VITE_`.

## Deploying

`npm run build` outputs static files to `dist/`. For hosts such as Netlify, Vercel or
GitHub Pages, configure a fallback to `index.html` so client-side routes work on refresh.
