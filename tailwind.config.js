module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "960px",
        lg: "1170px",
        xl: "1920px",
      },
      colors: {
        blackgrey: "#262424",
        bluesky: "#33AACF",
      },
      fontSize: {
        xxs: "8px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
