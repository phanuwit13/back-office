/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ececec',
          100: '#d2cdca',
          200: '#b7aca5',
          300: '#9c8b7f',
          400: '#877162',
          500: '#735946',
          600: '#674f40',
          700: '#584336',
          800: '#4a372d',
          900: '#3a2a22',
        },
        secondary: {
          50: '#e5f2fe',
          100: '#c0dffd',
          200: '#99ccfb',
          300: '#74b8f9',
          400: '#5ca8f7',
          500: '#4b99f5',
          600: '#478be7',
          700: '#4179d3',
          800: '#3c68c1',
          900: '#3349a1',
        },
      },
    },
  },
  plugins: [],
}
