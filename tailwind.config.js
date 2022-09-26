/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00BEAC"
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
