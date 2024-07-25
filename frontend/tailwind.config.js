/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#f8f9f0',
        'bright gray': '#e6ebef',
      }
    },
    fontFamily: {
      body: ['Overused Grotesk'],
    },
  },
  plugins: [],
}

