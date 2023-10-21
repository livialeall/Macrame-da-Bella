/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        areia:{
          100:'#FBF9F5',
          500:'#D8C7A9',
          600:'#CCB38B',

        },
        mostarda:{
          300:'#E9A84A',
          400:'#DF9C3B',
          transparent:'#FFC167',
        },
        azul:{
          500:'#3B6FAB',
          700:'#164881',
        }
      },

      fontFamily:{
        texto:['Roboto Slab', 'serif'],
        titulo:['DM Serif Display', 'serif'],
        destque:['Bilbo Swash Caps', 'cursive']
      },
    },

    
  },
  plugins: [],
}

