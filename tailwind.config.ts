import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep":    "#050E2E",
        "navy-primary": "#1B2B6B",
        "navy-medium":  "#243580",
        "navy-light":   "#EEF1FB",
        "gold-primary": "#C9A844",
        "gold-warm":    "#D4B84A",
        "gold-light":   "#F5E8BA",
        "gold-dark":    "#8B6E1E",
        "off-white":    "#FAFAF8",
        "gray-100":     "#F5F5F5",
        "gray-200":     "#E8E8E8",
        "gray-400":     "#9B9B9B",
        "gray-700":     "#3D3D3D",
        "gray-900":     "#1A1A1A",
        success:        "#22C55E",
        error:          "#EF4444",
        warning:        "#F59E0B",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        accent:  ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "xs":   ["11px", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        "sm":   ["13px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "base": ["15px", { lineHeight: "1.6", letterSpacing: "0" }],
        "md":   ["17px", { lineHeight: "1.6", letterSpacing: "0" }],
        "lg":   ["21px", { lineHeight: "1.5", letterSpacing: "0" }],
        "xl":   ["28px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "2xl":  ["36px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "3xl":  ["48px", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "4xl":  ["64px", { lineHeight: "1.0", letterSpacing: "-0.04em" }],
        "5xl":  ["80px", { lineHeight: "0.95", letterSpacing: "-0.05em" }],
      },
      borderRadius: {
        "sm":   "6px",
        "md":   "12px",
        "lg":   "20px",
        "xl":   "28px",
        "2xl":  "40px",
        "full": "9999px",
      },
      boxShadow: {
        "sm":   "0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)",
        "md":   "0 4px 6px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.08)",
        "lg":   "0 10px 25px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)",
        "xl":   "0 20px 40px rgba(0,0,0,0.10), 0 8px 20px rgba(0,0,0,0.05)",
        "card": "0 2px 8px rgba(27,43,107,0.08), 0 1px 3px rgba(27,43,107,0.04)",
        "gold": "0 4px 20px rgba(201,168,68,0.30)",
        "nav":  "0 1px 0 rgba(0,0,0,0.06)",
      },
      maxWidth: {
        container: "1200px",
      },
      screens: {
        sm:  "480px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
        "2xl": "1536px",
      },
      transitionDuration: {
        fast:       "120ms",
        base:       "200ms",
        moderate:   "350ms",
        slow:       "500ms",
        deliberate: "700ms",
      },
      animation: {
        marquee:     "marquee 40s linear infinite",
        "gold-pulse": "gold-pulse 2s ease-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        "gold-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,168,68,0.4)" },
          "50%":      { boxShadow: "0 0 0 16px rgba(201,168,68,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
