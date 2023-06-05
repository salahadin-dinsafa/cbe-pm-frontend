/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d19f34",
        brown: {
          100: "#e6a5e8",
          700: "#7d2377"
        }
      }
    },
  },
  plugins: [],
}

