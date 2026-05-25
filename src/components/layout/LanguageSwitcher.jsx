"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LANGUAGES = [
  { code: "en", label: "English",  short: "EN", flag: "/images/uk-flag.svg" },
  { code: "sw", label: "Swahili",  short: "SW", flag: "/images/tz-flag.svg" },
];

export default function LanguageSwitcher() {
  const [active, setActive] = useState(LANGUAGES[0]);
  const [open,   setOpen]   = useState(false);
  const rootRef = useRef(null);

  // Close on outside click / Escape
  useEffect(() => {
    const onDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[#2f3747] text-[14px] font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      >
        <span className="relative w-5 h-5 rounded-full overflow-hidden ring-1 ring-gray-200 shrink-0">
          <Image src={active.flag} alt="" fill sizes="20px" className="object-cover" />
        </span>
        <span className="hidden sm:inline">{active.short}</span>
        <svg
          width="10" height="10" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 min-w-[150px] bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50 py-1"
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === active.code;
            return (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => { setActive(lang); setOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-[13px] text-left hover:bg-teal-50 transition-colors ${
                    isActive ? "bg-teal-50 text-teal-700 font-semibold" : "text-gray-700"
                  }`}
                >
                  <span className="relative w-5 h-5 rounded-full overflow-hidden ring-1 ring-gray-200 shrink-0">
                    <Image src={lang.flag} alt="" fill sizes="20px" className="object-cover" />
                  </span>
                  {lang.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
