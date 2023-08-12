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
        primary: "#633CFF",
        "primary-hover": "#BEADFF",
        "primary-light": "#EFEBFF",
        "dark-gray": "#333333",
        gray: "#737373",
        "gray-light": "#FAFAFA",
        "gray-border": "#D9D9D9",
        white: "#FFFFFF",
        red: "#FF3939",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
