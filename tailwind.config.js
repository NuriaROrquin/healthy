module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#73A9AD",
        teal: "#90C8AC",
      },
      backgroundImage: (theme) => ({
        home: "url('/public/assets/banner-home.jpg')",
      }),
      fontFamily: {
        "cairo-bold": "cairo-bold",
        "cairo-semibold": "cairo-semibold",
        "cairo-regular": "cairo-regular",
        "cairo-light": "cairo-light",
      },
    },
  },
  plugins: [],
};
