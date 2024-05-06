/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      animation_hov:{
      'transition': 'transform 0.5s ease-in-out', 
    }
    },
  },
  plugins: [],
}

