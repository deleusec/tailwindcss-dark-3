/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        "light-gray" : {
          "200" : "#eaeafa",
          "300" : "#f5f4f4",
          "400" : "#f4f4f5",
          "500" : "#d5d4ec"
        },
        "light-text" : {
          "500" : "#a8a8b3",
          "900" : "#2e2e36"
        },
        "dark" : {
          "100" : "#1c1c1e",
          "300" : "#3f3f46",
          "500" : "#242225"
        },
        "primary" : {
          "200" : "#fce7f3",
          "500" : "#b73e6d"
        }
      }
    },
  },
  plugins: [],
}

