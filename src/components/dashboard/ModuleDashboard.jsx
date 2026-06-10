"use client";

import { useCallback, useRef, useState } from "react";
import { api }       from "@/lib/api-client";
import { useFetch }  from "@/lib/hooks/useFetch";
import { DEFAULT_MODULE_ID } from "@/config/modules";

import ModuleTabs            from "./ModuleTabs";
import SummaryPanel          from "./SummaryPanel";
import MapPanel              from "./MapPanel";
import { DashboardSkeleton } from "@/components/ui/Skeleton";
import { ErrorState }        from "@/components/ui/ErrorState";

const FALLBACK_THEME = { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" };
const ALL_DISTRICTS  = "All Districts";

export default function ModuleDashboard({ initialRegions, initialModules }) {
  const defaultModule = initialModules.find((m) => m.isDefault)?.id ?? DEFAULT_MODULE_ID;
  const defaultRegion = initialRegions[0]?.id ?? "morogoro";

  // ── Filter state ──────────────────────────────────────────────────────────
  const [activeModule,     setActiveModule]     = useState(defaultModule);
  const [viewMode,         setViewMode]         = useState("national");  // "national" | "regional"
  const [selectedRegion,   setSelectedRegion]   = useState(defaultRegion);
  const [selectedDistrict, setSelectedDistrict] = useState(ALL_DISTRICTS);

  const everLoadedRef = useRef(false);

  // ── Handlers ──────────────────────────────────────────────────────────────
  function handleModuleChange(moduleId) {
    setActiveModule(moduleId);
    setSelectedDistrict(ALL_DISTRICTS);
  }

  function handleViewModeChange(mode) {
    setViewMode(mode);
    setSelectedDistrict(ALL_DISTRICTS);
  }

  function handleRegionChange(regionId) {
    setSelectedRegion(regionId);
    setSelectedDistrict(ALL_DISTRICTS);
    // Clicking a region on the map auto-switches to regional view
    setViewMode("regional");
  }

  function handleDistrictChange(district) {
    setSelectedDistrict(district);
  }

  // ── Derived values ────────────────────────────────────────────────────────
  const isNational        = viewMode === "national";
  const effectiveRegion   = isNational ? "national" : selectedRegion;
  const effectiveDistrict = (!isNational && selectedDistrict !== ALL_DISTRICTS)
    ? selectedDistrict
    : null;

  // ── Districts fetch (regional only) ──────────────────────────────────────
  const districtsFetcher = useCallback(
    () => api.districts(selectedRegion),
    [selectedRegion],
  );
  const { data: districtsPayload } = useFetch(districtsFetcher, [selectedRegion]);
  const districts = districtsPayload?.districts ?? [ALL_DISTRICTS];

  // ── Dashboard fetch ───────────────────────────────────────────────────────
  const dashFetcher = useCallback(
    () => api.dashboard(activeModule, effectiveRegion, effectiveDistrict),
    [activeModule, effectiveRegion, effectiveDistrict],
  );
  const { data, error, isLoading, refetch } = useFetch(dashFetcher, [
    activeModule,
    effectiveRegion,
    effectiveDistrict,
  ]);

  if (data) everLoadedRef.current = true;
  const showSkeleton = !everLoadedRef.current && isLoading;

  const theme =
    data?.module?.theme ||
    initialModules.find((m) => m.id === activeModule)?.theme ||
    FALLBACK_THEME;

  return (
    <section className="w-full bg-[#f0f2f0] px-4 pt-3.5 pb-6">
      <ModuleTabs
        modules={initialModules}
        activeId={activeModule}
        onChange={handleModuleChange}
      />

      {/* Loading bar */}
      <div className="relative h-[3px] rounded-full overflow-hidden mb-[2px]"
           style={{ backgroundColor: theme.soft }}>
        {isLoading && (
          <div
            className="absolute inset-y-0 left-0 w-1/3 rounded-full animate-[loading-bar_1.2s_ease-in-out_infinite]"
            style={{ backgroundColor: theme.primary }}
          />
        )}
      </div>

      <div
        id="module-dashboard-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeModule}`}
        className="bg-white rounded-[10px] border border-gray-200 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-[550px_1fr]"
      >
        {showSkeleton ? (
          <div className="lg:col-span-2"><DashboardSkeleton /></div>
        ) : error && !data ? (
          <div className="lg:col-span-2 p-6">
            <ErrorState
              title="Couldn't load dashboard data"
              message={error.message}
              onRetry={refetch}
            />
          </div>
        ) : data ? (
          <>
            <SummaryPanel data={data} theme={theme} isRefetching={isLoading} />
            <MapPanel
              viewMode={viewMode}
              onViewModeChange={handleViewModeChange}
              regions={initialRegions}
              selectedRegion={selectedRegion}
              onSelectRegion={handleRegionChange}
              districts={isNational ? [ALL_DISTRICTS] : districts}
              selectedDistrict={selectedDistrict}
              onSelectDistrict={handleDistrictChange}
              highPriority={data.highPriority || []}
              showDistricts={!!effectiveDistrict}
              theme={theme}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
