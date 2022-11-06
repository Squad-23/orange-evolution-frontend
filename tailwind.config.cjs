/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          700: '#ff3200',
          500: '#ff5a23',
          400: '#ff7823',
          200: '#ffa000',
        },
        secondary: {
          500: 'rgb(0, 193, 156)',
        },
        gray: {
          light: {
            100: 'var(--color-light-gray-100)',
            200: 'var(--color-light-gray-200)',
            300: 'var(--color-light-gray-300)',
          },
          dark: {
            100: 'var(--color-dark-gray-100)',
            200: 'var(--color-dark-gray-200)',
            300: 'var(--color-dark-gray-300)',
          },
        },
        dominant: {
          100: 'var(--color-dominant-100)',
          200: 'var(--color-dominant-200)',
          300: 'var(--color-dominant-300)',
        },
        contrast: {
          100: 'var(--color-contrast-100)',
          200: 'var(--color-contrast-200)',
          300: 'var(--color-contrast-300)',
        },
      },
    },
  },
  plugins: [],
};
