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
      willChange: {
    transform: 'transform',
  },
  keyframes: {
      'fade-up': {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-up': 'fade-up 0.6s ease-out forwards',
    },
  },
},


  plugins: [],
}