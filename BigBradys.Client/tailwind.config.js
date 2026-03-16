const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    'bg-pink-500',
    'bg-yellow-500',
    'bg-yellow-600',
    'bg-red-600',
    'bg-red-800',
    'bg-purple-500',
    'bg-orange-500',
    'bg-rose-500',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        pink: colors.pink,
        rose: colors.rose,
        orange: colors.orange,
        purple: {
          ...colors.purple,
          lightest: "#FEF2FF",
          light: "#833b8c",
          DEFAULT: "#54085E",
          dark: "#2a0034",
          darkest: "#090010",
        },
      },
      transitionProperty: {
        'height': 'max-height',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
