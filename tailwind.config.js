/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        horizon: {
          DEFAULT: '#0B4F8A',
          50: '#EAF3FA',
          100: '#CFE4F4',
          200: '#9FC9E9',
          300: '#6FADDE',
          400: '#3F92D3',
          500: '#1F79BE',
          600: '#0B4F8A',
          700: '#093F6E',
          800: '#082F52',
          900: '#061F36',
          950: '#041426',
        },
        sky: {
          DEFAULT: '#2F9FE0',
          light: '#7EC5EE',
        },
        gold: {
          DEFAULT: '#E8A93B',
          light: '#F4C877',
          dark: '#C68821',
        },
        ink: '#0E1F2B',
        mist: '#EAF3FA',
        foam: '#FBFCFE',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'wave-grid': "radial-gradient(circle at 1px 1px, rgba(11,79,138,0.08) 1px, transparent 0)",
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.9)', opacity: '0.55' },
          '100%': { transform: 'scale(2.6)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        ripple: 'ripple 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite',
        shimmer: 'shimmer 6s linear infinite',
        bob: 'bob 5s ease-in-out infinite',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(11,79,138,0.35)',
        card: '0 10px 30px -12px rgba(14,31,43,0.18)',
      },
    },
  },
  plugins: [],
}
