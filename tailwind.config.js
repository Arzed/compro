/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f4f7ff',
          100: '#e8efff',
          200: '#cddcff',
          300: '#a7bdff',
          400: '#7a93ff',
          500: '#536dff',
          600: '#3c51db',
          700: '#2e3daf',
          800: '#263389',
          900: '#232d6f'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate3d(1,1,0,0deg)' },
          '50%': { transform: 'translateY(-8px) rotate3d(1,1,0,3deg)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp .6s ease-out both'
      }
    }
  },
  plugins: [],
}