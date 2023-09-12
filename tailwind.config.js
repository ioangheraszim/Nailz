/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: '#fdf6f8',
      primary: '#e26a7c',
      secondary: '#f3d8dc',
      accent: '#bb253c'
    },
    fontFamily: {
      sourcesans: ['Source Sans 3', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}