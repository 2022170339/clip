/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: '#000',
        secondary: '#FFF'
      }
    }
  },

  plugins: []
};

module.exports = config;
