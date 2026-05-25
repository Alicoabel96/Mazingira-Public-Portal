export default function RegionSelect({ regions, value, onChange }) {
  return (
    <div className="relative inline-block">
      <label htmlFor="region-select" className="sr-only">
        Select region
      </label>
      <select
        id="region-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none border border-gray-300 rounded px-2.5 py-1.5 pr-7 text-[13px] font-bold text-gray-700 bg-white cursor-pointer outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
      >
        {regions.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name.toUpperCase()}
          </option>
        ))}
      </select>
      <svg
        width="12" height="12" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}
