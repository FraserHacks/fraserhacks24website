import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'fraser-turquoise': "#0CEAD9",
        'fraser-darker-turquoise': "#3ACADF",
        'fraser-blue': "#729EFD",
        'fraser-purple': "#8A64D6",
        'fraser-dark-purple': "#5C3A92",
      }
    },
  },
  plugins: [],
};
export default config;
