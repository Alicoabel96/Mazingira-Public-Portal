# eMazingira — Complete refactored project

Tanzania's Environmental Management Information System.

This is the **complete project** with every change applied so far:
refactor + banner redesign + sticky header + smooth hero slider +
ticker fix + module colors + Tanzania map + fixed tabs + footer alignment.

One zip, ready to run.

---

## Quick start (5 minutes)

```bash
# 1. Install
npm install

# 2. Copy your images into public/images/
#    - coat-of-arms.png
#    - hero1.jpg, hero2.jpg, hero3.jpg, hero4.jpg
#
#    (tz-flag.svg, uk-flag.svg, emazingira-logo.svg are already included)

# 3. Copy the env example
cp .env.example .env.local

# 4. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## What's in this build

### Layout + sticky behaviour
- **Sticky header** — site header and nav stay pinned at the top when you scroll down
- **Smart announcement bar** — hides when scrolling down past ~80px, reappears when scrolling up
- **Tanzania flag** peeks faintly through the green→blue gradient in the announcement bar

### Header / navigation
- Image logo at `public/images/emazingira-logo.svg` (swap for your real brand asset)
- Language switcher with UK and TZ flags (EN / SW) — opens a dropdown
- **HOME** tab shows blue color + blue line **above and below** when active
- Module tabs distribute **evenly across the full width** — no horizontal scroll

### Hero
- **Smooth left-to-right slide transition** between images (900 ms ease-in-out)
- Text content fades and slides up on each transition
- Dark overlay on the **left side only**, transparent by ~72% across
- Pauses on hover and focus

### Stats ticker
- Dark teal `#0B736C` cards
- **Smooth infinite horizontal scroll** (35 s per loop)
- Pauses on hover / focus

### Module dashboard
- **20 modules, each with its own color theme** — clicking a tab recolors
  summary cards, progress bars, chart palette, map region fill, active
  district pill, and section heading
- Summary panel on left, map panel on right (stacks on mobile)
- Charcoal impact grid, animated progress bars, supplier bar chart

### Map (Leaflet)
- **Real Tanzania regions** from geoBoundaries.org (free, CC-BY 4.0)
- Boundaries cached 24 h on the server
- **Locked to Tanzania** — can't pan outside the country, can't zoom out
  beyond country view, can't zoom in past district detail
- Region colours shift to match the active module's theme
- Legend in the bottom-left

### Footer
- Edge-to-edge alignment (matches the rest of the site)
- Logo and description flush with the left edge — no awkward inset
- geoBoundaries attribution included (license requirement)

### Under the hood
- **Next.js 16 App Router** with React 19, React Compiler
- **Tailwind v4** for styles (with plain-CSS animations so they work reliably)
- **Jost** font via `next/font/google`
- **6 REST endpoints** proxying data from an in-memory store — swap one file
  to move to Supabase / Prisma / Drizzle
- **2 geo endpoints** proxying geoBoundaries with 24 h ISR caching
- Accessible tablists (arrow keys, Home/End, roving tabindex)
- Skip-link for keyboard users
- Loading skeletons, retry-able error states

---

## Folder structure

```
src/
├── app/
│   ├── layout.js                   Root layout (Jost, skip-link)
│   ├── page.js                     Server component — pre-fetches data
│   ├── loading.js                  Route loading skeleton
│   ├── error.js                    Route error boundary
│   ├── globals.css                 Base styles + ticker animation
│   └── api/
│       ├── regions/route.js        list + by-id
│       ├── modules/route.js
│       ├── modules/[m]/regions/[r]/route.js
│       ├── stats/route.js
│       ├── slides/route.js
│       └── geo/
│           ├── regions/route.js    proxies geoBoundaries ADM1
│           └── districts/route.js  proxies geoBoundaries ADM2
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.jsx     TZ flag + green-blue gradient
│   │   ├── StickyBanner.jsx        fixed positioning + scroll-hide
│   │   ├── SiteHeader.jsx          logo + search + lang switcher
│   │   ├── LanguageSwitcher.jsx    EN / SW dropdown
│   │   ├── NavBar.jsx              blue lines on active tab
│   │   ├── StatsTicker.jsx         self-contained animation
│   │   └── Footer.jsx              edge-to-edge
│   │
│   ├── hero/
│   │   └── HeroCarousel.jsx        smooth horizontal slide
│   │
│   ├── dashboard/
│   │   ├── ModuleDashboard.jsx     orchestrator, owns state
│   │   ├── ModuleTabs.jsx          a11y tablist, fills width
│   │   ├── SummaryPanel.jsx        left column
│   │   ├── MapPanel.jsx            right column
│   │   ├── StatCard.jsx
│   │   ├── InstituteCard.jsx
│   │   ├── ImpactCard.jsx
│   │   ├── CharcoalGrid.jsx
│   │   ├── SupplierChart.jsx       themed palette
│   │   ├── RegionSelect.jsx
│   │   └── DistrictPills.jsx
│   │
│   ├── map/LeafletMap.jsx          Tanzania-locked, themed
│   ├── ui/                         Skeleton, ErrorState, ProgressBar
│   └── icons/                      ModuleIcons, StatIcons
│
├── config/modules.js               row-splitting config
│
└── lib/
    ├── api-client.js               fetch wrapper + api object
    ├── hooks/useFetch.js           loading / error / refetch
    └── db/data.js                  IN-MEMORY STORE — swap for real DB
```

---

## API endpoints

| Method | Path                                              | Purpose                 |
| ------ | ------------------------------------------------- | ----------------------- |
| GET    | `/api/regions`                                    | List of all regions     |
| GET    | `/api/regions/:id`                                | One region              |
| GET    | `/api/modules`                                    | List of all modules     |
| GET    | `/api/modules/:moduleId/regions/:regionId`        | Full dashboard payload  |
| GET    | `/api/stats`                                      | Ticker stat cards       |
| GET    | `/api/slides`                                     | Hero slides             |
| GET    | `/api/geo/regions`                                | TZ ADM1 GeoJSON (proxy) |
| GET    | `/api/geo/districts`                              | TZ ADM2 GeoJSON (proxy) |

All data endpoints return `{ "data": ... }`. Errors return
`{ "error": "..." }` with a non-2xx status.

---

## Assets

### Included
- `public/images/tz-flag.svg` — Tanzania flag (announcement bar, language switcher)
- `public/images/uk-flag.svg` — UK flag (language switcher)
- `public/images/emazingira-logo.svg` — placeholder wordmark

### You need to add
- `public/images/coat-of-arms.png` — government emblem
- `public/images/hero1.jpg` .. `hero4.jpg` — hero slides

### Optional (legacy)
The map now uses `/api/geo/regions` instead of a static file. Any existing
`public/tz-regions.json` or `public/tz-districts-*.json` files can be
deleted.

### Replacing the placeholder logo
Replace `public/images/emazingira-logo.svg` with your real logo. Keep the
same filename. If it's a PNG, save as `emazingira-logo.png` and update the
one reference in `src/components/layout/SiteHeader.jsx`.

---

## Switching to a real database

All read functions are in `src/lib/db/data.js`. To move to a real DB:

1. Replace the body of each async function to hit your DB
2. Keep the return shapes identical
3. Add credentials to `.env.local`

No changes to route handlers, components, or hooks are needed.

Suggested schema (see `data.js` for exact shapes):

```sql
CREATE TABLE regions (
  id       TEXT PRIMARY KEY,
  name     TEXT NOT NULL,
  priority TEXT CHECK (priority IN ('very-high','high','moderate','low'))
);

CREATE TABLE modules (
  id       TEXT PRIMARY KEY,
  label    TEXT NOT NULL,
  title    TEXT NOT NULL,
  icon     TEXT NOT NULL,
  theme    JSONB NOT NULL,  -- { primary, dark, soft }
  is_default BOOLEAN DEFAULT false
);

CREATE TABLE dashboards (
  module_id       TEXT REFERENCES modules(id),
  region_id       TEXT REFERENCES regions(id),
  beneficiaries   TEXT NOT NULL,
  energy_value    TEXT NOT NULL,
  energy_unit     TEXT NOT NULL,
  institutes      INT,
  institute_pct   INT,
  forest_saved    TEXT,
  progress_pct    INT,
  supply_category TEXT,
  districts       JSONB,
  high_priority   JSONB,
  charcoal        JSONB,
  suppliers       JSONB,
  PRIMARY KEY (module_id, region_id)
);
```

---

## Troubleshooting

**`Cannot find module 'lightningcss...'`** → `rm -rf node_modules && npm install`

**`Failed to fetch Jost from Google Fonts`** → You're offline or behind a firewall

**Logo or flags missing** → Verify the SVGs are in `public/images/`

**Map shows "Map data unavailable"** → Your server can't reach
geoboundaries.org. Check network / firewall

**Map first load is slow (~2 s)** → Expected on first request. Response is
cached 24 h after that

**Hero images cache-stuck after replacement** → `rm -rf .next && npm run dev`,
then hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`)

**Hydration warning about `<body>`** → Handled by
`suppressHydrationWarning`. Browser extensions like Grammarly inject
attributes that would otherwise trigger this

---

## License attribution

This project uses geoBoundaries administrative boundaries
(CC-BY 4.0). The required attribution line is already in the footer.
