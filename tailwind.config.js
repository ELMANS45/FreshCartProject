/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '70.2': '71.3%'
      },
      container:{
        center :true
      }
    },
  },
  plugins: [],
}

