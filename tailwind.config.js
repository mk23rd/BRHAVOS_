/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8f9fa',
          100: '#e8ecf1',
          200: '#c7d5e3',
          300: '#a6bdd5',
          400: '#4a5f7f',
          500: '#1a2847',
          600: '#16223d',
          700: '#121c33',
          800: '#0e1629',
          900: '#0a1020',
        },
        gold: {
          50: '#fffbf3',
          100: '#fff7e6',
          200: '#ffedcc',
          300: '#ffe3b3',
          400: '#ffc966',
          500: '#b8956a',
          600: '#a68660',
          700: '#947a56',
          800: '#826e4c',
          900: '#705f42',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 16px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
