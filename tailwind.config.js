const { colors } = require('tailwindcss/defaultTheme')
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          light: colors.indigo[400],
          default: colors.indigo[600],
          dark: colors.indigo[800],
        },
        secondary: {
          light: colors.orange[400],
          default: colors.orange[600],
          dark: colors.orange[800],
        },
      },
    },
  },
  variants: {
    container: false,
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
}
