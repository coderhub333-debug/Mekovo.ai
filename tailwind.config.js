/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#F5A623',
          goldLight: '#FFD166',
          goldDark: '#C98212',
          dark: '#080808',
          card: '#111111',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          subtext: '#9E9E9E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 50px -10px rgba(245, 166, 35, 0.35)',
        'glow-soft': '0 0 25px -5px rgba(245, 166, 35, 0.15)',
      }
    }
  },
  plugins: [],
}
