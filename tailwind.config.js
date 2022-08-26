/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1024px",
        xl: "1440px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "blue-bold": "#262262",
        "blue-medium": "#0078BD",
        "blue-regular": "#197BFF",
        "blue-light": "#F3F7FF",
        "purple-bold": "#262262",
        "purple-light": "#8777FC",
        "white-light": "#FCFCFC",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/images/bg-hero.png)",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "bottom",
          height: "80vh",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
