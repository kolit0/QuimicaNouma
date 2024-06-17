/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pthin: ['Pthin'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

