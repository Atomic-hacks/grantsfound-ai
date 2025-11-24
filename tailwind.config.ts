import type { Config } from "tailwindcss";

const colors = {
  midnight: "#0B1C2C",
  teal: "#0F3D3E",
  gold: "#C8A045",
  slate: "#101822",
  cloud: "#EDF2F7",
};

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: colors.midnight,
        teal: colors.teal,
        gold: colors.gold,
        slate: colors.slate,
        cloud: colors.cloud,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(11, 28, 44, 0.35)",
      },
      spacing: {
        gutter: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
