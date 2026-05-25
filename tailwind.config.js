/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary UI font — modern geometric sans-serif per design spec
        jost: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
        // Legacy alias — anything still using font-montserrat picks up Jost.
        montserrat: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      colors: {
        teal: {
          50:  "#edfaf8",
          100: "#d6f5f2",
          200: "#b2e8e2",
          300: "#7dd3c8",
          400: "#3dbda5",
          500: "#2a9d87",
          600: "#1f7d69",
          700: "#1a6b5a",
          800: "#145244",
          900: "#0d3a30",
        },
        // Dark card / section color from the design
        emerald: {
          deep: "#0B736C",
        },
        brand: {
          green:     "#27a844",
          navy:      "#1f2a44",
          blue:      "#1167c4",
          blueHover: "#0f5cae",
        },
        priority: {
          veryHigh: "#0d3a30",
          high:     "#1a6b5a",
          moderate: "#3dbda5",
          low:      "#b2e8e2",
        },
      },
      boxShadow: {
        card:    "0 1px 5px rgba(0,0,0,.05)",
        tooltip: "0 2px 10px rgba(0,0,0,.12)",
      },
      animation: {
        "fade-in-up":    "fadeInUp 0.7s ease forwards",
        "ticker":        "ticker 30s linear infinite",
        "stats-scroll":  "statsScroll 25s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        statsScroll: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
