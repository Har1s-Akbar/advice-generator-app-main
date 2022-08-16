/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '320px',
      lg: '720px',
    },
    colors:{
      'cyan': '#CEE3E9',
      'neon': '#52FFA8',
      'gray-blue':'#48556A' ,
      'dark-gblue': '#323A49',
      'dark-blue': '#1F2632',
    },
    letterSpacing:{
      'widest' : '.25rem'
    },
    sans: ['Manrope', 'san-serif'],
    extend: {},
  },
  plugins: [],
}
