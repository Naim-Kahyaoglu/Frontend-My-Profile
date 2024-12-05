/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind'e hangi dosyalarda stil uygulanacağını belirtiyoruz.
  ],
  darkMode: 'class',  // Dark Mode'u class tabanlı yapıyoruz
  theme: {
    extend: {},
  },
  plugins: [],
}
