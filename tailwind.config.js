/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1265',
        secondary: '#3b3866',
        accent: '#dbd0bd',
        light: '#efefe5',
        dark: '#1a1265',
      },
      fontFamily: {
        'nohemi': ['nohemi', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://horizonhillsrealestate.com/wp-content/uploads/2025/03/Add-a-heading-4-png.webp')",
      }
    },
  },
  plugins: [],
}

