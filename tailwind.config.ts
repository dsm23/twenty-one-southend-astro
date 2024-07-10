import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        "69f8470": "var(--color-69f8470)",
        "52c6f65": "var(--color-52c6f65)",
        "699d054": "var(--color-699d054)",
        "3ad05dc": "var(--color-3ad05dc)",
        "32d31ad": "var(--color-32d31ad)",
        "9ca4460": "var(--color-9ca4460)",
        "26e0e2b": "var(--color-26e0e2b)",
        d41e868: "var(--color-d41e868)",
        "586539d": "var(--color-586539d)",
        "6783420": "var(--color-6783420)",
        "855099a": "var(--color-855099a)",
        c060b27: "var(--color-c060b27)",
        bc2b0a4: "var(--color-bc2b0a4)",
        "71700b6": "var(--color-71700b6)",
        "2d3b688": "var(--color-2d3b688)",
        "20fcde8": "var(--color-20fcde8)",
        "82cdbb5": "var(--color-82cdbb5)",
        be88c48: "var(--color-be88c48)",
        "8d35859": "var(--color-8d35859)",
        dd8ca6e: "var(--color-dd8ca6e)",
      },
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
