/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        inter: ['Inter']
      },
      height: {
        '100': '26rem',
      },
      colors: {
        'main': '#558393',
        'second': '#D3DFDD',
        'third': '##C4C4C4',
      },
      width: {
        '3/0': '30%',
      }
    },
  },
  plugins: [],
}

