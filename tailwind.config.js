module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    container: false,
  },
  plugins: [require('@tailwindcss/forms')],
}
