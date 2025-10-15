/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        'electric-cyan': {
          400: '#67e8f9',
          500: '#22d3ee',
          600: '#06b6d4',
          700: '#0891b2',
        },
        'accent-pink': {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        'accent-gold': {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 8s ease infinite',
        'light-sweep': 'light-sweep 3s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-left': 'slide-left 0.6s ease-out',
        'slide-right': 'slide-right 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'particle-float': 'particle-float 20s linear infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'light-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)', opacity: '1' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)', opacity: '0.9' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
