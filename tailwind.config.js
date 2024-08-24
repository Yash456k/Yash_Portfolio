/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jerseyy: ["Jersey 10", "sans-serif"],
        fancy: ["VT323", "sans-serif"],
      },
    },
  },
  plugins: [],
};
