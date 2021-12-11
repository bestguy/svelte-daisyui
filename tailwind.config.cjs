const colors = require('tailwindcss/colors');

module.exports = {
  purge: [ './src/**/*.svelte', './src/**/*.css' ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
  },
  variants: {
    extend: {}
  },
  plugins: [ require('daisyui') ]
};
