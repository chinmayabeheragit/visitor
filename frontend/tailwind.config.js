/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      'forest': '#14532d',
      'sky': '#0ea5e9',
      'sand': '#facc15',
    },
    fontFamily: {
      handwritten: ['"Shadows Into Light"', 'cursive'],
       cursive: ['"Great Vibes"', 'cursive'],
  sans: ['Inter', 'sans-serif'],
    },
  },
},


  plugins: [],
}