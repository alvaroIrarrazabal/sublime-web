/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
          soft: 'rgb(var(--color-primary-soft) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        },

        brand: {
          dark: 'rgb(var(--color-brand-dark) / <alpha-value>)',
          surface: 'rgb(var(--color-brand-surface) / <alpha-value>)',
          background: 'rgb(var(--color-brand-background) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};