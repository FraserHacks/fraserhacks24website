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
      screens: {
        'xs': {'min': '250px', 'max': '639px'},
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      colors: {
        'fraser-turquoise': "#0CEAD9",
        'fraser-dark-turquoise': "#3ACADF",
        'fraser-blue': "#729EFD",
        'fraser-purple': "#8A64D6",
        'fraser-dark-purple': "#5C3A92",
        'showcase-blue': '#729ffc',
        'showcase-black':'#333333'
      }
    },
  },
  plugins: [],
};
export default config;
