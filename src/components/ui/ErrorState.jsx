export function ErrorState({
  title = "Couldn't load data",
  message = "Something went wrong while fetching this section.",
  onRetry,
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center gap-3 p-8 text-center bg-red-50/50 border border-red-100 rounded-lg"
    >
      <svg
        width="32" height="32" viewBox="0 0 24 24"
        fill="none" stroke="#dc2626" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <div>
        <p className="text-sm font-bold text-gray-900">{title}</p>
        <p className="text-xs text-gray-600 mt-1">{message}</p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="px-4 py-2 text-xs font-semibold bg-teal-700 text-white rounded hover:bg-teal-800 transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  );
}
