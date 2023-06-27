/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors,
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
      section: ['Source Sans 3', 'sans-serif'],
      headlines: ['Lora', 'serif'],
      manrope: ['Manrope', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
