/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/anime-blue.jpg')",
        dkhero: "url('/images/anime-black.jpg')",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
    fontFamily: {
      zhuque: "Zhuque",
    },
    keyframes: {
      slideUp: {
        from: { transform: "translateY(100%)" },
        to: { transform: "translateY(0)" },
      },
      slideDown: {
        from: { transform: "translateY(-100%)" },
        to: { transform: "translateY(0)" },
      },
    },
    animation: {
      slideUp: "slideUp 0.5s ease-in-out forwards",
      slideDown: "slideDown 0.7s ease-in-out forwards",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
