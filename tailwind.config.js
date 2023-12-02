module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#0A0A0A",
        "weather-secondary": "#004E71",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
    screens: {
      mobile: "400px",
      tablet: "600px",
      desktop: "800px",
    },
  },
  plugins: [],
};