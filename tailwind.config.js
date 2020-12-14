module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    container: false,
  },
  plugins: [require('@tailwindcss/forms')],
}
