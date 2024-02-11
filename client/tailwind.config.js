/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-login': '#356184'
      },
      height: {
        '0.25': '0.0625rem', // Esto es 1px si 1rem = 16px
      }
    }
  },
  plugins: [require('daisyui')]
};
