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
    fontSize: {
      base: ['16px', '24px'],
      sm: ['14px', '24px'],
      section: ['32px', {
        lineHeight: '40px',
        fontWeight: '600'
      }],
      subtitle: ['12px', '22px'],
      headlines: ['28px', {
        lineHeight: '33.6px',
        fontWeight: '700'
      }],
      subheads: ['24px', '30px'],
      paragraphHeader: ['18px', '28px'],
      body: ['16px', '24px'],
      secondaryContent: ['14px', '22px'],
      navigation: ['14px', {
        lineHeight: '22px',
        fontWeight: '600'
      }],
      buttons: ['14px', {
        lineHeight: '22px',
        fontWeight: '700'
      }]
    },
    extend: {}
  },
  plugins: []
}
