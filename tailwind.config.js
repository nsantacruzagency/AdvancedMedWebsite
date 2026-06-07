/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ef',
          100: '#faf0d7',
          200: '#f4ddaa',
          300: '#edc472',
          400: '#e5a53c',
          500: '#de8e1f',
          600: '#c47215',
          700: '#a35514',
          800: '#854318',
          900: '#6e3817',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
