/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#669966",
          darken: "#336633",
          lighten: "#99CC99",
        },
        secondary: {
          DEFAULT: "#FAFAFA",
          darken: "#dcdfe5",
          lighten: "#ffffff",
        },
        complement: {
          DEFAULT: "#F8AC19",
          darken: "#ee9f07",
          lighten: "#f8b430",
        },
      },
    },
  },
  plugins: [],
};
