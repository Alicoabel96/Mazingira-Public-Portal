"use client";

import { useEffect } from "react";

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f0] px-6">
      <div className="max-w-md w-full bg-white rounded-lg border border-gray-200 shadow-card p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <svg
            width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="#dc2626" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 className="text-lg font-bold text-gray-900 mb-2">
          Something went wrong
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          We couldn&apos;t load this page. You can try again or refresh your
          browser.
        </p>
        <button
          type="button"
          onClick={() => unstable_retry?.()}
          className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-md text-sm font-semibold transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
