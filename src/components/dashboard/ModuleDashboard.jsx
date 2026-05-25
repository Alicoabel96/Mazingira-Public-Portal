"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "@/lib/api-client";
import { useFetch } from "@/lib/hooks/useFetch";
import { DEFAULT_MODULE_ID } from "@/config/modules";

import ModuleTabs        from "./ModuleTabs";
import SummaryPanel      from "./SummaryPanel";
import MapPanel          from "./MapPanel";
import { DashboardSkeleton } from "@/components/ui/Skeleton";
import { ErrorState }    from "@/components/ui/ErrorState";

const FALLBACK_THEME = { primary: "#0b736c", dark: "#145244", soft: "#d6f5f2" };

/**
 * Dashboard orchestrator.
 *
 * Owns active module + region + district state, fetches the per-(module,
 * region) dashboard payload, and passes the module's theme colors down to
 * tabs, summary panel, and map.
 */
export default function ModuleDashboard({ initialRegions, initialModules }) {
  const defaultModule =
    initialModules.find((m) => m.isDefault)?.id ?? DEFAULT_MODULE_ID;
  const defaultRegion = initialRegions[0]?.id ?? "morogoro";

  const [activeModule,     setActiveModule]     = useState(defaultModule);
  const [selectedRegion,   setSelectedRegion]   = useState(defaultRegion);
  const [selectedDistrict, setSelectedDistrict] = useState("All District");

  const fetcher = useCallback(
    () => api.dashboard(activeModule, selectedRegion),
    [activeModule, selectedRegion],
  );
  const { data, error, isLoading, refetch } = useFetch(fetcher, [
    activeModule,
    selectedRegion,
  ]);

  useEffect(() => {
    setSelectedDistrict("All District");
  }, [selectedRegion]);

  const showDistricts = selectedDistrict !== "All District";

  // Theme from the fetched payload; while loading, peek at the active module
  // from the initial list so tabs recolor instantly on click.
  const theme =
    data?.module?.theme ||
    initialModules.find((m) => m.id === activeModule)?.theme ||
    FALLBACK_THEME;

  return (
    <section className="w-full bg-[#f0f2f0] px-4 pt-3.5 pb-6">
      <ModuleTabs
        modules={initialModules}
        activeId={activeModule}
        onChange={setActiveModule}
      />

      <div
        id="module-dashboard-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeModule}`}
        className="bg-white rounded-[10px] border border-gray-200 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-[550px_1fr]"
      >
        {isLoading && !data ? (
          <DashboardSkeleton />
        ) : error ? (
          <div className="lg:col-span-2 p-6">
            <ErrorState
              title="Couldn't load dashboard data"
              message={error.message}
              onRetry={refetch}
            />
          </div>
        ) : data ? (
          <>
            <SummaryPanel data={data} theme={theme} />
            <MapPanel
              regions={initialRegions}
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              districts={data.districts}
              selectedDistrict={selectedDistrict}
              onSelectDistrict={setSelectedDistrict}
              highPriority={data.highPriority}
              showDistricts={showDistricts}
              theme={theme}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
