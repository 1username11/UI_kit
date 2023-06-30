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
      section: ['Source', 'sans-serif'],
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
    extend: {
      opacity: {
        5: '0.05',
        10: '0.1',
        15: '0.15',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        35: '0.35',
        40: '0.4',
        45: '0.45',
        50: '0.5',
        55: '0.55',
        60: '0.6',
        65: '0.65',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        85: '0.85',
        90: '0.9',
        95: '0.95',
        100: '1'
      },
      boxShadow: {
        'white-box': ' 0px 4px 14px 0px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  plugins: []
}
