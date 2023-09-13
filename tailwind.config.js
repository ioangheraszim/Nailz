/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '640px',
      'desktop': '1080px'
    },
    container: {
      center: true
    },    
    colors: {
      background: '#fdf6f8',
      primary: '#e26a7c',
      secondary: '#f3d8dc',
      accent: '#bb253c',
      cardcolor: '#F5EEF0',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'desktop-patter': "url('/src/assets/images/desktop-blob')"
      }
    },
  },
  plugins: [],
}