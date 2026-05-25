"use client";

import { useRef } from "react";
import { ModuleIcon } from "@/components/icons/ModuleIcons";
import { splitModulesIntoRows } from "@/config/modules";

/**
 * Module tablist.
 *
 * - Tabs in each row are distributed EVENLY across the full container width
 *   (no horizontal scroll).
 * - Each tab uses its own `theme.primary` colour when active.
 * - Keeps the WAI-ARIA tablist pattern (arrow keys, Home/End, roving tabindex).
 */
export default function ModuleTabs({ modules, activeId, onChange }) {
  const [row1, row2] = splitModulesIntoRows(modules);

  return (
    <div
      role="tablist"
      aria-label="Environmental modules"
      aria-orientation="horizontal"
      className="flex flex-col gap-2 mb-3.5"
    >
      <TabRow tabs={row1} activeId={activeId} onChange={onChange} />
      {row2.length > 0 && (
        <TabRow tabs={row2} activeId={activeId} onChange={onChange} />
      )}
    </div>
  );
}

function TabRow({ tabs, activeId, onChange }) {
  const rowRef = useRef(null);

  const handleKeyDown = (e, index) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();

    const buttons = rowRef.current?.querySelectorAll('[role="tab"]') || [];
    if (buttons.length === 0) return;

    let next;
    switch (e.key) {
      case "ArrowRight": next = (index + 1) % buttons.length; break;
      case "ArrowLeft":  next = (index - 1 + buttons.length) % buttons.length; break;
      case "Home":       next = 0; break;
      case "End":        next = buttons.length - 1; break;
      default: return;
    }
    buttons[next]?.focus();
  };

  return (
    <div
      ref={rowRef}
      className="flex gap-[7px] w-full"
    >
      {tabs.map((tab, idx) => {
        const active = tab.id === activeId;
        const theme  = tab.theme || { primary: "#0b736c", dark: "#145244", soft: "#edfaf8" };

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active}
            aria-controls="module-dashboard-panel"
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            style={{
              flex: "1 1 0",
              minWidth: 0,
              backgroundColor: active ? theme.primary : theme.soft,
              color:           active ? "#ffffff"     : theme.dark,
              borderColor:     active ? theme.primary : "rgba(0,0,0,0.08)",
            }}
            className={[
              "flex items-center justify-center gap-1.5",
              "px-1.5 h-9 rounded border text-[12px] md:text-[13px] font-semibold",
              "transition-colors duration-150 overflow-hidden",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
            ].join(" ")}
            title={tab.label}
          >
            <span className="flex items-center shrink-0" aria-hidden="true">
              <ModuleIcon name={tab.icon} />
            </span>
            <span className="truncate">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
