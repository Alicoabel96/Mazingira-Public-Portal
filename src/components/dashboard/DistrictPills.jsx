export default function DistrictPills({ districts, active, onChange, theme }) {
  const primary = theme?.primary || "#145244";

  return (
    <div
      role="group"
      aria-label="District filter"
      className="flex flex-wrap gap-1.5"
    >
      {districts.map((d) => {
        const isActive = d === active;
        return (
          <button
            key={d}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(d)}
            style={
              isActive
                ? { backgroundColor: primary, color: "#ffffff", borderColor: primary }
                : undefined
            }
            className={[
              "px-2.5 py-1 text-[12px] font-semibold rounded transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
              isActive
                ? ""
                : "bg-white text-gray-600 border border-gray-300 hover:border-gray-400 hover:text-gray-800",
            ].join(" ")}
          >
            {d}
          </button>
        );
      })}
    </div>
  );
}
