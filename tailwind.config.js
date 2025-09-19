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
        fredoka: ['Gabarito', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: "#1e40af",   // Dark blue
          secondary: "#3b82f6", // Light blue
          accent: "#93c5fd",    // Extra light blue
          neutral: "#ebf2ff",   // Light gray background
          red: "#d4012c" //Logo red

        },
      },
    },
  },
  plugins: [],
}
