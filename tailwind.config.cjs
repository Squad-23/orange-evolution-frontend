/** @type {import('tailwindcss').Config} */

const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          orange: {
            700: '#ff3200',
            500: '#ff5a23',
            400: '#ff7823',
            200: '#ffa000',
          },
          pink: {
            100: '#FD7AC5',
            700: '#FA2882',
          },
          purple: '#5D35D9',
          green: '#00C19C',
          blue: '#5D35D9',
          cyan: '#267CBC',
        },
        gray: {
          light: {
            100: '#F2F2F2',
            200: '#E6E6E6',
            300: '#D9D9D9',
          },
          dark: {
            100: '#2A3441',
            200: '#1F2937',
            300: '#1A232F',
          },
        },
        dominant: {
          100: colorVariable('var(--colors-dominant-100)'),
          200: colorVariable('var(--colors-dominant-200)'),
          300: colorVariable('var(--colors-dominant-300)'),
        },
        contrast: {
          100: colorVariable('var(--colors-contrast-100)'),
          200: colorVariable('var(--colors-contrast-200)'),
          300: colorVariable('var(--colors-contrast-300)'),
        },
      },
      variables: {
        DEFAULT: {
          colors: {
            dominant: {
              100: '#F2F2F2',
              200: '#E6E6E6',
              300: '#D9D9D9',
            },
            contrast: {
              100: '#2A3441',
              200: '#1F2937',
              300: '#1A232F',
            },
          },
        },
      },
      darkVariables: {
        DEFAULT: {
          colors: {
            contrast: {
              100: '#F2F2F2',
              200: '#E6E6E6',
              300: '#D9D9D9',
            },
            dominant: {
              100: '#2A3441',
              200: '#1F2937',
              300: '#1A232F',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables')({
      darkToRoot: false,
      darkSelector: '.dark',
      colorVariables: true,
    }),
  ],
};
