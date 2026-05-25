/**
 * Ticker / dashboard decoration icons.
 *
 * The ticker icons are 22×22 white stroke. The big "decoration" icons on the
 * teal summary cards (People, Cup, Building) are larger and semi-transparent.
 */

const tickerProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "white",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const Ticker = {
  document: () => (
    <svg {...tickerProps}>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  ),
  copy: () => (
    <svg {...tickerProps}>
      <rect x="9" y="9" width="10" height="10" rx="2" />
      <path d="M5 15V7a2 2 0 0 1 2-2h8" />
    </svg>
  ),
  check: () => (
    <svg {...tickerProps}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  activity: () => (
    <svg {...tickerProps}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  users: () => (
    <svg {...tickerProps}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  folder: () => (
    <svg {...tickerProps}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  ),
};

export function TickerIcon({ name }) {
  const Cmp = Ticker[name] || Ticker.document;
  return <Cmp />;
}

// Large decoration icons on the coloured summary cards
const deco = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
};

export function IconPeople({ size = 32 }) {
  return (
    <svg {...deco} width={size} height={size} viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconCup({ size = 32 }) {
  return (
    <svg {...deco} width={size} height={size} viewBox="0 0 24 24">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

export function IconBuilding({ size = 36 }) {
  return (
    <svg {...deco} width={size} height={size} viewBox="0 0 24 24">
      <rect x="3" y="2" width="18" height="20" rx="1" />
      <path d="M9 22V12h6v10" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" />
    </svg>
  );
}

export function IconPlus({ size = 15 }) {
  return (
    <svg
      {...deco}
      strokeWidth={2.5}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function IconChevronDown({ size = 12 }) {
  return (
    <svg
      {...deco}
      strokeWidth={2.5}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
