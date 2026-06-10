"use client";

import dynamic      from "next/dynamic";
import RegionSelect  from "./RegionSelect";
import DistrictPills from "./DistrictPills";

const LeafletMap = dynamic(() => import("../map/LeafletMap"), { ssr: false });

/**
 * ViewToggle — pill switch between National and Regional views.
 */
function ViewToggle({ value, onChange, theme }) {
  const primary = theme?.primary || "#0b736c";
  const soft    = theme?.soft    || "#d6f5f2";

  return (
    <div
      className="flex items-center rounded-full p-[3px] shrink-0"
      style={{ backgroundColor: "#f0f0f0" }}
      role="group"
      aria-label="View mode"
    >
      {[
        { id: "national", label: "🌍 National" },
        { id: "regional", label: "📍 Regional" },
      ].map(({ id, label }) => {
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-pressed={active}
            className="px-3.5 py-1 rounded-full text-[12px] font-bold transition-all focus:outline-none"
            style={
              active
                ? { backgroundColor: primary, color: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }
                : { backgroundColor: "transparent", color: "#555" }
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default function MapPanel({
  viewMode,
  onViewModeChange,
  regions,
  selectedRegion,
  onSelectRegion,
  districts,
  selectedDistrict,
  onSelectDistrict,
  highPriority,
  showDistricts,
  theme,
}) {
  const isNational = viewMode === "national";

  return (
    <div className="flex flex-col min-h-full relative">
      {/* Controls row */}
      <div className="flex flex-wrap items-center gap-2.5 px-3.5 py-2.5 border-b border-gray-200">

        {/* View mode toggle — always visible */}
        <ViewToggle
          value={viewMode}
          onChange={onViewModeChange}
          theme={theme}
        />

        {/* Region + Districts — only in regional mode */}
        {!isNational && (
          <>
            <RegionSelect
              regions={regions}
              value={selectedRegion}
              onChange={onSelectRegion}
            />
            <DistrictPills
              districts={districts}
              active={selectedDistrict}
              onChange={onSelectDistrict}
              theme={theme}
            />
          </>
        )}

        {/* National mode label */}
        {isNational && (
          <span className="text-[12.5px] font-semibold text-gray-500 italic">
            Showing data for all Tanzania regions
          </span>
        )}
      </div>

      {/* High priority note (regional only) */}
      {!isNational && highPriority.length > 0 && (
        <div className="px-3.5 py-1.5 text-[12px] italic text-gray-500 border-b border-gray-100">
          High Priority Areas:{" "}
          {highPriority.map((d, i) => (
            <span key={d}>
              <strong className="text-gray-800 not-italic">{d}</strong>
              {i < highPriority.length - 1 ? " and " : ""}
            </span>
          ))}
        </div>
      )}

      {/* Map */}
      <div className="flex-1 min-h-[460px] relative">
        <LeafletMap
          viewMode={viewMode}
          selectedRegion={isNational ? null : selectedRegion}
          regions={regions}
          onSelectRegion={onSelectRegion}
          showDistricts={showDistricts}
          theme={theme}
        />
      </div>
    </div>
  );
}
