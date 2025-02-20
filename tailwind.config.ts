import type { Config } from "tailwindcss";

export default {
  lightMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        primary: {
          200: "#1E3E9C",
          DEFAULT: "#2F5EF0",
          600: "#2B54CF",
        },
        secondary: {
          200: "#F7F1E9",
          DEFAULT: "#B8A89E",
          600: "#845D4F",
        },
        tercary: {
          200: "#F4DDA0",
          DEFAULT: "#996515",
          600: "#83510F",
        },
        gray: {
          400: "#F2F2F2",
          500: "#E5E5E5",
          600: "#B2B2B2",
          700: "#808080",
          800: "#333333",
          DEFAULT: "#1D1D1D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
