/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      black: '#252422',
      olive: '#403D39',
      white: '#FFFCF2',
      gray: '#CCC5B9',
      flame: '#EB5E28'
    }
  },
  plugins: [],
}