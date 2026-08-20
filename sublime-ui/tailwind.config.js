/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          soft: '#60A5FA',
          light: '#DBEAFE',
        },
        brand: {
          dark: '#0F172A',
          surface: '#FFFFFF',
          background: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
}