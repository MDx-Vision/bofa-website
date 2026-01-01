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
        "primary-blue": "#1B4B82",
        "accent-blue": "#3B7DC4",
        "light-blue": "#5A9BD5",
        navy: "#0D1B2A",
        "off-white": "#F8FAFC",
        blueprint: "#1E3A5F",
      },
    },
  },
  plugins: [],
};

export default config;
