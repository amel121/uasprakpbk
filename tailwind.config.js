/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Aktifkan dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, // Tambahan custom theme bisa ditaruh di sini
  },
  plugins: [],
}
