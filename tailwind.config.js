/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./bundle.js"
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0066FF',
        'orange': '#f90'
      }
    },
  },
  plugins: [],
}

