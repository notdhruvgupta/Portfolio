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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-bg" : "#575f9a",
        "light-main" : "#F4EEFF",
        "mid-main" : "#A08FE9",
        "dull-main" : "#A6B1E1",
        "side-color" : "#D6A6F8",
      },
      fontFamily: {
        nohemi: ['var(--font-nohemi)'],
        barlow: ['var(--font-barlow)'],
      }
    },
  },
  plugins: [],
};
export default config;
