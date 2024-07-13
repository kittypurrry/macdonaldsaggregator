/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#ED1313" ,
        brightYellow: "#FFFF00",
        accentYellow: "#FFFF66",
        mutedYellow: "#FFFF29",
        backgroundYellow: '#FFFFF5'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}