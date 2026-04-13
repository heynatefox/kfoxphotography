import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d4d9ca",
          300: "#b5bea6",
          400: "#97a383",
          500: "#7a8968",
          600: "#5f6d50",
          700: "#4b5640",
          800: "#3d4635",
          900: "#343b2e",
        },
        stone: {
          50: "#faf9f7",
          100: "#f0eeea",
          200: "#e2ded7",
          300: "#cfc9be",
          400: "#b5ac9e",
          500: "#a19685",
          600: "#8e8171",
          700: "#776b5e",
          800: "#635950",
          900: "#534b44",
        },
        warm: {
          50: "#fdfcfb",
          100: "#f9f7f4",
          200: "#f3efe9",
          300: "#e8e2d8",
          400: "#d5cbbf",
          500: "#c0b3a3",
          600: "#a89a89",
          700: "#8f806f",
          800: "#776a5c",
          900: "#63584d",
        },
        charcoal: {
          DEFAULT: "#2d2d2d",
          light: "#4a4a4a",
          dark: "#1a1a1a",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
