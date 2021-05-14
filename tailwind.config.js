module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      roboto: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    fontSize: {
      4: '1.3125rem',
      3: '1.125rem',
      2: '1rem',
      1: '0.8125rem',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
