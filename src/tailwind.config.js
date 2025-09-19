/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tunisian: {
          red: "#E70013",
          white: "#FFFFFF",
          black: "#000000"
        }
      }
    }
  },
  plugins: []
}
