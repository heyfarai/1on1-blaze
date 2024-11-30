/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./imports/ui/**/*.{js,html}",
    "./client/**/*.{js,html}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        stoicbold: ["Stoic-Bold", "sans-serif"],
        stoicmedium: ["Stoic-Medium", "sans-serif"],
        baseregular: ["Base-Regular", "sans-serif"],
        basemedium: ["Base-Medium", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
