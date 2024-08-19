/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f4d1fa",
        secondary: "#d1e4fc",
        third: '#310d2b',
        dark: '#160919'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      },
      fontFamily: {
        'playwrite': ['"Playwrite DE VA"', 'sans-serif'] /*Adjust the fallback font as necessary */ ,
        'lato': ['"Lato", "sans-serif"']
      }
    },
  },
  plugins: [],
}
