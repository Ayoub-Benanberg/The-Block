/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      lineHeight: {
        11: '3rem',
        12: '3.5rem',
        13: '4rem',
        14: '4.5rem',
      },
    },
  },
  plugins: [],
}