/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F68B1F",
        thin: "#606062",
        white: "#ffffff",
        red: "#EC1B2E",
        primaryBg: "#F7F8F8",
        secondaryBg: "#F2F2F2",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "home-back1": "url('/src/images/home-img/homeback.jpg')",
        "home-back2": "url('./src/images/homeback1.webp')",
      },
    },
  },
  plugins: [],
};
