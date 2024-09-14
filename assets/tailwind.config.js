/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// note: if you change these values, you may need to restart the `yarn dev` nuxt server
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      green: '#44B436',
      greendark: '#318127',
      yellow: '#faa61b',
      primary: {
        DEFAULT: '#ce4536',
        '50': '#ffffff',
        '100': '#fdf7f1',
        '150': '#fdf7f1', // = 100
        '200': '#fbe7da',
        '300': '#f6cebc',
        '400': '#eea28b',
        '500': '#e27560',
        '600': '#ce4536',
        '700': '#ca352f',
        '800': '#aa2c30',
        '900': '#952d37',
        '950': '#5d1420',
      },
      secondary: {
        DEFAULT: '#e68875',
        '50': '#ffffff',
        '100': '#fefcfa',
        '200': '#fcede4',
        '300': '#f7d5c5',
        '400': '#f2b4a1',
        '500': '#e68875',
        '600': '#d3584a',
        '700': '#d24641',
        '800': '#bf3136',
        '900': '#a9323e',
        '950': '#721827',
      },
      error: {
        10: '#FFFBF9',
        50: '#FCEEEE',
        100: '#F9DEDC',
        200: '#F2B8B5',
        300: '#EC928E',
        400: '#E46962',
        500: '#DC362E',
        600: '#B3261E',
        700: '#8C1D18',
        800: '#601410',
        900: '#410E0B',
      },
      neutral: {
        10: '#FFFBFE',
        50: '#F4EFF4',
        100: '#E6E1E5',
        200: '#C9C5CA',
        300: '#AEAAAE',
        400: '#939094',
        500: '#787579',
        600: '#605D62',
        700: '#484649',
        800: '#313033',
        900: '#1C1B1F',
      },
      gray: {
        10: '#FFFBFE',
        50: '#F5EEFA',
        100: '#E7E0EC',
        200: '#CAC4D0',
        300: '#AEA9B4',
        400: '#938F99',
        500: '#79747E',
        600: '#605D66',
        700: '#49454F',
        800: '#322F37',
        900: '#1D1A22',
      },
      surface: {
        50: '#fdf4f3', // = 100
        100: '#fdf4f3',
        200: '#fce7e4', 
        300: '#fad3ce',
        400: '#f5b4ac',
        500: '#ee877b',
        600: '#e26051',
      },
      surfacedark: {
        50: '#1c1b1f',
        100: '#26242a',
        200: '#2a2830',
        300: '#302d37',
        400: '#332f3a',
        500: '#36323e',
      }
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [
    // https://tailwindcss.com/docs/functions-and-directives#using-apply-with-per-component-css
    // https://tailwindcss.com/docs/plugins
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.font-custom-light': {
          fontWeight: 300
        },
        '.font-custom-medium': {
          fontWeight: 600
        },
        '.font-custom-bold': {
          fontWeight: 700
        },
      })
    })
  ],
}
