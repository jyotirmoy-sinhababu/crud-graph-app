/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],

  theme: {
    extend: {
      colors: {
        borderGrey: '#dbdbdb',
        blackSeventy: 'rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
};
