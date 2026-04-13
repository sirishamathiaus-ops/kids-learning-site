/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'system-ui', 'sans-serif'],
        kid: ['"Bubblegum Sans"', 'Fredoka', 'Nunito', 'system-ui', 'sans-serif'],
        comic: [
          '"Comic Neue"',
          '"Comic Sans MS"',
          '"Chalkboard SE"',
          'Marker Felt',
          'cursive',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        kid: {
          sun: '#fde047',
          sky: '#7dd3fc',
          mint: '#86efac',
          grape: '#c4b5fd',
          coral: '#fda4af',
          cream: '#fffbeb',
        },
      },
      boxShadow: {
        soft: '0 8px 32px rgba(15, 23, 42, 0.08)',
        lift: '0 16px 40px rgba(79, 70, 229, 0.12)',
      },
      borderRadius: {
        kid: '1.25rem',
        'kid-lg': '1.75rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '60%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'kid-heading-enter': {
          '0%': { opacity: '0', transform: 'translateY(14px) scale(0.94)' },
          '65%': { opacity: '1', transform: 'translateY(-6px) scale(1.03)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'kid-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        wiggle: 'wiggle 0.6s ease-in-out infinite',
        pop: 'pop 0.35s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        'kid-heading-enter': 'kid-heading-enter 0.7s ease-out both',
        'kid-fade-in': 'kid-fade-in 0.55s ease-out both',
      },
    },
  },
  plugins: [],
};
