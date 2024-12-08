/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#002E5B', // Add your custom color
      },
      fontFamily: {
        sans: ['"Font Awesome 6 Free"', 'sans-serif'],
      },
    },
  },
  plugins: [
  'daisyui',
  ],
}

