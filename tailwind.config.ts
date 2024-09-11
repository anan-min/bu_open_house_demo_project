import type { Config } from "tailwindcss";
import animationDelay from "./tailwind/config/animationDelay";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bebas Neue", "Inter", "sans-serif"], // Default font for the project
      },
      colors: {
        primary: "#ffffff", // Default font color (white)
        background: "#000000", // Default background color (black)
        secondary: "#1f2937", // Secondary font color (gray-900)
        highlight: "#64748b", // Highlight color (gray-500)
      },
    },
  },
  plugins: [animationDelay],
};
export default config;
