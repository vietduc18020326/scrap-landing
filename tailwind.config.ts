import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#F57700",
        "primary-2": "#FDEACE",
        "primary-3": "#FEF5E6",
        "primary-gradient":
          "linear-gradient(270deg, #FF4E60 -0.85%, #FAAF40 78.27%)",

        "secondary-1": "#4BB3B6",
        "secondary-3": "#EBF9F9",

        "neutral-1": "#18191B",
        "neutral-2": "#484B51",
        "neutral-3": "#868B93",
        "neutral-4": "#DFDFE2",
      },
      width: {
        content: "1161px",
      },
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
