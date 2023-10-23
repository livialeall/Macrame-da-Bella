/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        areia:{
          100:'#FBF9F5',
          200:'#F4F1EC',
          500:'#D8C7A9',
          600:'#CCB38B',

        },
        mostarda:{
          300:'#E9A84A',
          400:'#DF9C3B',
          500:'#D18D2A',
          600:'#C8821B',
          700:'#BF7509',
          transparent:'#FFC167',
        },
        azul:{
          500:'#3B6FAB',
          700:'#0B3B72',
        }
      },
    },

  },
  plugins: [
    require('tailwind-animatecss')
  ],
}

