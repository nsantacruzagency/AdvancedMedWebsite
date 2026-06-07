/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#453730',
          50:  '#f5f1ef',
          100: '#e8ddd9',
          200: '#d0bbb4',
          300: '#b5988e',
          400: '#9a7a70',
          500: '#7d6059',
          600: '#5c4a41',
          700: '#453730',
          800: '#2e2420',
          900: '#1a1410',
        },
        cream: {
          DEFAULT: '#F1EBE6',
          50:  '#FDFBF9',
          100: '#F8F4F1',
          200: '#F1EBE6',
          300: '#E8DDD6',
          400: '#DDD0C8',
          500: '#CFC0B5',
        },
        spa: {
          DEFAULT: '#738985',
          50:  '#f0f5f4',
          100: '#d8e8e6',
          200: '#b5d0cc',
          300: '#8db5b0',
          400: '#738985',
          500: '#5a6f6b',
          600: '#455855',
          700: '#334240',
          800: '#222c2b',
          900: '#111615',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
}
