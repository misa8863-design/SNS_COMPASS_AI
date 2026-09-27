import type { Config } from "tailwindcss";

/**
 * SNS COMPASS デザイントークン
 * ブランドカラーはここで一元管理。
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        compass: { DEFAULT: "#5CB8FF", 50: "#EFF8FF", 100: "#DDEFFF", 200: "#B9DFFF", 600: "#43A9F7", 700: "#2F86CC" },
        support: { DEFAULT: "#F7A8C6", 50: "#FEF3F7", 100: "#FCE3ED", 700: "#B85A80" },
        spark: { DEFAULT: "#F6C64E", 50: "#FFF9E9", 100: "#FDEFC6", 700: "#9A7415" },
        trend: { DEFAULT: "#67D7CF", 50: "#ECFAF8", 100: "#D3F4F1", 700: "#2B8C85" },
        ivory: { DEFAULT: "#F9F4EC", 50: "#FFFDF9", 200: "#F2E9DB", 300: "#E7DAC6" },
        guide: { DEFAULT: "#6B4C3B", 300: "#C7B3A5", 400: "#86695A", 700: "#4F3628" },
      },
      fontFamily: {
        maru: ["var(--font-maru)", "Hiragino Maru Gothic ProN", "sans-serif"],
        sans: ["var(--font-noto)", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif"],
      },
      borderRadius: { card: "22px", panel: "28px" },
      boxShadow: {
        soft: "0 1px 2px rgba(107,76,59,0.04), 0 8px 24px -12px rgba(107,76,59,0.14)",
        lift: "0 2px 4px rgba(107,76,59,0.05), 0 16px 32px -16px rgba(107,76,59,0.22)",
        cta: "0 8px 24px rgba(92,184,255,0.18)",
      },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [],
};

export default config;
