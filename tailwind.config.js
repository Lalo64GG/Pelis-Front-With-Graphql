/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgba-40-0-80-1': 'rgba(40, 0, 80, 1)',
        'rgba-4-0-7-0-19': 'rgba(4, 0, 7, 0.19)',
        'rgba-4-0-7-0-1': 'rgba(4, 0, 7, 0.1)',
      },
    },
  },
  plugins: [],
}