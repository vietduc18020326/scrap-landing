import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#F57700",
        "primary-2": "#FDEACE",

        "neutral-1": "#18191B",
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
