/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#002B54",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
        Raleway: ["Raleway", "sans-serif"],
        merri: ["Merriweather", "serif"],
        quick: ["Quicksand", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
