/**
 * Module tab icons.
 *
 * Each icon is a stroke-based 14×14 SVG that picks up `color` from `currentColor`,
 * so the parent decides active/inactive colour via Tailwind text classes.
 */

const common = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
};

const Icons = {
  trash: () => (
    <svg {...common}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  ),
  leaf: () => (
    <svg {...common}>
      <path d="M17 8C8 10 5.9 16.17 3.82 19.07 3.82 19.07 9 20 12 15c0 0-3 5-7 7 10 0 16-8 16-16 0 0-2 0-4 2z" />
    </svg>
  ),
  factory: () => (
    <svg {...common}>
      <path d="M2 20h20v-8l-5-5-5 5-4-4v12" />
      <path d="M6 20V12" />
      <path d="M14 20V12" />
      <path d="M2 20V8l6 6" />
    </svg>
  ),
  monitor: () => (
    <svg {...common}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  thermo: () => (
    <svg {...common}>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  ),
  tree: () => (
    <svg {...common}>
      <path d="M12 2L4 14h6v8h4v-8h6L12 2z" />
    </svg>
  ),
  wind: () => (
    <svg {...common}>
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2" />
      <path d="M12.59 19.41A2 2 0 1 0 14 16H2" />
      <path d="M6.91 12.91A2 2 0 1 0 8 16H2" />
    </svg>
  ),
  flask: () => (
    <svg {...common}>
      <path d="M9 3h6l1 9-4 9-4-9 1-9z" />
      <path d="M6 3h12" />
    </svg>
  ),
  paw: () => (
    <svg {...common}>
      <circle cx="7" cy="8" r="2" />
      <circle cx="17" cy="8" r="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M8 16s1.5 3 4 3 4-3 4-3l-1-4H9l-1 4z" />
    </svg>
  ),
  dna: () => (
    <svg {...common}>
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="M2 9c6.667 6 13.333 0 20 6" />
    </svg>
  ),
  city: () => (
    <svg {...common}>
      <rect x="2" y="7" width="6" height="14" />
      <rect x="9" y="2" width="6" height="19" />
      <rect x="16" y="12" width="6" height="9" />
    </svg>
  ),
  fire: () => (
    <svg {...common}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
  drop: () => (
    <svg {...common}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  bug: () => (
    <svg {...common}>
      <rect x="8" y="6" width="8" height="14" rx="4" />
      <path d="M19 7l-3 2M5 7l3 2M19 12h-3M5 12h3M19 17l-3-2M5 17l3-2" />
      <path d="M10 6l.5-4.5L12 2l1.5-.5L14 6" />
    </svg>
  ),
  wave: () => (
    <svg {...common}>
      <path d="M2 12c1.5-3 3.5-3 5 0s3.5 3 5 0 3.5-3 5 0" />
      <path d="M2 18c1.5-3 3.5-3 5 0s3.5 3 5 0 3.5-3 5 0" />
      <path d="M2 6c1.5-3 3.5-3 5 0s3.5 3 5 0 3.5-3 5 0" />
    </svg>
  ),
  fish: () => (
    <svg {...common}>
      <path d="M6.5 12c.94-3.46 4.94-6 10.5-6" />
      <path d="M18 12a16.41 16.41 0 0 1-10.5 6" />
      <path d="M3.5 12l1-2.5L3 7c2 0 4.5 1 5.5 2.5" />
      <path d="M3.5 12l1 2.5L3 17c2 0 4.5-1 5.5-2.5" />
      <path d="M20 7l-1.5 5 1.5 5" />
    </svg>
  ),
  sun: () => (
    <svg {...common}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" />
      <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="7.05" y2="16.95" />
      <line x1="16.95" y1="7.05" x2="19.78" y2="4.22" />
    </svg>
  ),
  water: () => (
    <svg {...common}>
      <path d="M3 12h18" />
      <path d="M2 17c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0" />
      <path d="M2 7c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0" />
    </svg>
  ),
  person: () => (
    <svg {...common}>
      <circle cx="9" cy="7" r="3" />
      <circle cx="15" cy="7" r="3" />
      <path d="M1 20c0-4 4-7 8-7" />
      <path d="M15 13c4 0 8 3 8 7" />
    </svg>
  ),
};

/** Returns the SVG component for a module icon name, or `null` if unknown. */
export function ModuleIcon({ name }) {
  const Cmp = Icons[name];
  return Cmp ? <Cmp /> : null;
}
