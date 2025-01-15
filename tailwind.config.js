/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: "#01B6E7",
        deepBlue: "#105C87",
        navy: "#203653",
        darkNavy: "#112540",
        orange: "#EA951F",
        darkOrange: "#D05B15",
        white: "#FFFFFF",
        teal: "#24B3BD",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Add Poppins as the default sans font
      },
    },
  },
  plugins: [],
};
