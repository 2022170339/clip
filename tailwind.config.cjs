/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: '#CB7353',
        secondary: '#FAF8EF'
      }
    }
  },

  plugins: []
};

module.exports = config;