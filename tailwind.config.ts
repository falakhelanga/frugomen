import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/stories/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": " #22323F",
        "primary-blue": "#374C5E",
        "secondary-blue": "#1F283C",
        "grayish-blue": "#8C94A8",
      },
    },
  },
  plugins: [],
};
export default config;
