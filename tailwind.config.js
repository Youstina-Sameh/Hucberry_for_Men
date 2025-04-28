/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'myColor':'#ebdede',
        'secondColor':'#A49393'
      },
      backgroundImage: {
        'mybgImg1': "url('/src/imgs/bg-1.jpeg')",
        'mybgwallpaer': "url('/src/imgs/wallpaper.jpeg')",
        'mySecwallpaer': "url('/src/imgs/wallpaper2.jpeg')",
      },
      fontFamily: {
        'myfont': 'kreon',
        'kaushan': ['"Kaushan Script"', 'cursive'],
        'nerko': ['"Nerko One"', 'cursive'],
        'Kavoon':['Kavoon'],
      },
    },
  },
  plugins: [],
}

