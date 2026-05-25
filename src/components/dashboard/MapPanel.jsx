"use client";

import dynamic from "next/dynamic";
import RegionSelect  from "./RegionSelect";
import DistrictPills from "./DistrictPills";

// Leaflet is client-only (uses `window`)
const LeafletMap = dynamic(() => import("../map/LeafletMap"), { ssr: false });

export default function MapPanel({
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
  return (
    <div className="flex flex-col min-h-full relative">
      {/* Controls row */}
      <div className="flex flex-wrap items-center gap-2.5 px-3.5 py-2.5 border-b border-gray-200">
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
      </div>

      {/* High priority note */}
      {highPriority.length > 0 && (
        <div className="px-3.5 py-1.5 text-[12px] italic text-gray-500 border-b border-gray-100">
          High Priority Areas are{" "}
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
          selectedRegion={selectedRegion}
          regions={regions}
          onSelectRegion={onSelectRegion}
          showDistricts={showDistricts}
          theme={theme}
        />
      </div>
    </div>
  );
}
