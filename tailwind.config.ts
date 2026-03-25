import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--color-base) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accent2: "rgb(var(--color-accent2) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 0 50px rgba(65, 234, 212, 0.25)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 15% 15%, rgba(65,234,212,0.2), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,138,101,0.2), transparent 45%), radial-gradient(circle at 50% 75%, rgba(113,167,255,0.2), transparent 40%)"
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
