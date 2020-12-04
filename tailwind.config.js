const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html','./App.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: colors.trueGray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
