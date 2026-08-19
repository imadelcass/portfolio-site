/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette lifted from the CV (see ../PLAYBOOK.md §4)
        navy: {
          DEFAULT: '#0f1d2e',
          mid: '#1a2f45',
          soft: '#24405c'
        },
        gold: {
          DEFAULT: '#c8963e',
          light: '#e2b96f',
          dark: '#a87c2c'
        },
        cream: '#f5f3ef',
        sand: '#d4c9b8'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        label: '0.15em'
      },
      maxWidth: {
        content: '72rem'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both'
      }
    }
  },
  plugins: []
}
