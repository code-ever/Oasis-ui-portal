/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        navy: "#152A54",
        sky: "#4FA8DA",
        sunbeam: "#F2B134",
        cream: "#FBF9F4",
        charcoal: "#22262B",
      },
    },
  },
  plugins: [],
};
