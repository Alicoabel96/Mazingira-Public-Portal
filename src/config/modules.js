/**
 * Presentation-layer config for the module tab row.
 *
 * The canonical list of modules lives server-side in `src/lib/db/data.js`
 * and is served via `/api/modules`. This file only defines how the tabs are
 * ROW-SPLIT in the UI (first 10 on top, rest on bottom) and which tab is
 * pre-selected when the page loads.
 */

export const DEFAULT_MODULE_ID = "cooking";
export const MODULE_ROW_SIZE   = 10;

/**
 * Splits a flat module list into two rows of equal-ish length so the dashboard
 * can render the tab grid without hardcoding the module set.
 */
export function splitModulesIntoRows(modules, rowSize = MODULE_ROW_SIZE) {
  return [
    modules.slice(0, rowSize),
    modules.slice(rowSize),
  ];
}
