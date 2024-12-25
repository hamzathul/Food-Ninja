/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D489",
        dark: "#303030",
      },
    },
  },
  plugins: [],
};
