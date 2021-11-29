module.exports = {
  mode: 'jit',

  purge: ['./app/**/*.tsx', './app/**/*.jsx', './app/**/*.js', './app/**/*.ts'],

  darkMode: 'false', // true/false | 'media' | 'class''

  theme: {
    extend: {},
  },

  variants: {},

  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
