/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem", // 24px on mobile
          lg: "5rem",        // 80px on large screens
          xl: "6rem",        // 96px on extra large
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: "#3E2CA7",   // Dark blue
          secondary: "#5841EA", // Light blue
          accent: "#EDF1FF",    // Extra light blue
          neutral: "#F6F7F9",   // Light gray background
          red: "#EE1908" //Logo red

        },
      },
    },
  },
  plugins: [],
}
