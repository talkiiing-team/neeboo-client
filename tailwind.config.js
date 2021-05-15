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
      5: '1.875rem',
      4: '1.3125rem',
      3: '1.125rem',
      2: '1rem',
      1: '0.75rem',
    },
    colors: {
      red: '#BD2D2F',
      white: '#FFF',
      black: '#000',
      gray: {
        light: '#EEE',
        darker: '#C9C9C9',
        dark: '#8E8E93',
        darkest: '#444',
      },
    },
    letterSpacing: {
      default: '-0.24px',
    },
    lineHeight: {
      4: '1.5rem',
      3: '1.3125rem',
      2: '1.25rem',
      1: '0.8125rem',
    },
    boxShadow: {
      inner: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      outer: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      'outer-xl': '0px 4px 11px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
