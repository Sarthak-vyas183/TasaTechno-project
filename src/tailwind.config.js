/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Futuristic font
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out',
        'fade-down': 'fadeDown 1s ease-out',
        float: 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        'glow-fast': 'glow 1.5s ease-in-out infinite',
        'pulse-fast': 'pulse 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
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
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 8px #FFD700, 0 0 16px #FFD700',
          },
          '50%': {
            textShadow: '0 0 16px #fff, 0 0 24px #FFD700',
          },
        },
      },
    },
  },
  plugins: [],
};
