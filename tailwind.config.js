/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/anime-blue.jpg')",
      },
    },
    fontFamily: {
      zhuque: "Zhuque",
    },
  },
  plugins: [],
};
