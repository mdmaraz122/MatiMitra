/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          900: '#141f12',
          800: '#233222',
          700: '#384d35',
          600: '#5a7855',
          500: '#7a9675',
          400: '#9cb598',
          300: '#bcd1b9',
        },
        earth: {
          DEFAULT: '#8D6E63',
          light: '#D7CCC8',
        },
      },
    },
  },
  plugins: [],
};
