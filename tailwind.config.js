/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'alt' : '#1f1f1f'
      }
    },
  },
  plugins: [],
}
