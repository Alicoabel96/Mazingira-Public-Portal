"use client";

import { useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-10 py-4 flex items-center justify-between gap-4">
        {/* Left — Government emblem */}
        <div className="shrink-0">
          <Image
            src="/images/coat-of-arms.png"
            alt="Tanzania Coat of Arms"
            width={90}
            height={90}
            className="h-[62px] md:h-[74px] w-auto object-contain"
            priority
          />
        </div>

        {/* Center — Search */}
        <div className="flex-1 flex justify-center">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-[680px] flex items-center bg-[#f4f4f4] border border-[#e2e2e2] rounded-[10px] overflow-hidden shadow-sm"
          >
            <label htmlFor="emis-module-select" className="sr-only">
              Filter by module
            </label>
            <button
              type="button"
              id="emis-module-select"
              className="h-14 px-4 md:px-5 text-[15px] text-[#4b5563] font-medium border-r border-[#d9d9d9] bg-[#f4f4f4] flex items-center gap-2 whitespace-nowrap"
            >
              All Modules
              <svg
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.2"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <label htmlFor="emis-search" className="sr-only">Search eMazingira</label>
            <input
              id="emis-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search something..."
              className="flex-1 h-14 bg-[#f4f4f4] px-4 text-[15px] text-gray-700 outline-none placeholder:text-[#9ca3af]"
            />

            <button
              type="submit"
              aria-label="Search"
              className="h-14 w-16 md:w-[68px] flex items-center justify-center bg-brand-blue hover:bg-brand-blueHover transition-colors"
            >
              <svg
                width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="white" strokeWidth="2.4"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right — Language + Login + Logo */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <LanguageSwitcher />

          <button
            type="button"
            className="h-11 md:h-12 px-4 md:px-5 rounded-xl bg-[#d9e0e3] border border-[#cfd6da] text-[#1d2430] text-[14px] md:text-[15px] font-semibold flex items-center gap-2 shadow-sm hover:bg-[#cfd6da] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Login
          </button>

          {/* Logo — image instead of text */}
          <Image
            src="/images/emazingira-logo.svg"
            alt="eMazingira"
            width={168}
            height={40}
            priority
            className="h-9 md:h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
