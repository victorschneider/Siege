/** @type {import('tailwindcss').Config} */
module.exports = {


  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          pink:{
            150: '#a85d7b',
          }
      },
    },
  },

 /*pluggin para estilizar o textarea*/
 
  plugins: [require('@tailwindcss/forms'),],
}
