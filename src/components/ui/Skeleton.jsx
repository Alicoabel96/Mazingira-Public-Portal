/**
 * Generic loading-skeleton block.
 * Accepts Tailwind sizing classes via `className`.
 */
export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded bg-gray-200/70 ${className}`}
      aria-hidden="true"
    />
  );
}

export function DashboardSkeleton() {
  return (
    <div className="grid lg:grid-cols-[550px_1fr] animate-pulse">
      <div className="p-5 border-r border-gray-200 space-y-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-7 w-full" />
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
        <Skeleton className="h-16" />
        <Skeleton className="h-40" />
        <Skeleton className="h-32" />
      </div>
      <div className="min-h-[500px] bg-teal-50 flex items-center justify-center">
        <span className="text-sm text-teal-700 font-semibold">Loading dashboard…</span>
      </div>
    </div>
  );
}
