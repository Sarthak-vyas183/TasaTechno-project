/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out',
        'fade-down': 'fadeDown 1s ease-out',
        float: 'float 15s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, 15px)' },
          '50%': { transform: 'translate(5px, 30px)' },
          '75%': { transform: 'translate(-10px, 15px)' },
        },
      },
    },
  },
  plugins: [],



  animation: {
    'spin-slow': 'spin 20s linear infinite',
  },
}