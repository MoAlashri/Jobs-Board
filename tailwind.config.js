/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chambray: {
          50: '#f2f7fc',
          100: '#e1edf8',
          200: '#c9dff4',
          300: '#a4cbec',
          400: '#79afe1',
          500: '#5992d8',
          600: '#4578cb',
          700: '#3b65ba',
          800: '#355398',
          900: '#314a7d',
          950: '#212d4a',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
