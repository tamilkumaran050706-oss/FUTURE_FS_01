/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-deep': '#0B0B0D',
        'charcoal': '#151517',
        'soft-white': '#F5F5F5',
        'gray-muted': '#A0A0A0',
        'neon-lime': '#C6FF00',
        'bright-lime': '#D7FF4A',
        'dark-border': '#2A2A2D',
      },
    },
  },
  plugins: [],
}
