/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        'electric-purple': {
          400: '#d946ef',
          500: '#c026d3',
          600: '#a21caf',
          700: '#86198f',
        },
      },
    },
  },
  plugins: [],
};
