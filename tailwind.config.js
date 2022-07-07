module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#73A9AD",
        teal: "#90C8AC",
      },
      backgroundImage: () => ({
        home: "url('/public/assets/banner-home.jpg')",
        turnos: "url('/public/assets/banner-turnos.png')",
        alimentacion: "url('/public/assets/banner-alimentacion.png')",
        login: "url('/public/assets/banner-login.png')",
        metricas: "url('/public/assets/banner-metricas.png')",
      }),
      fontFamily: {
        "cairo-bold": "cairo-bold",
        "cairo-semibold": "cairo-semibold",
        "cairo-regular": "cairo-regular",
        "cairo-light": "cairo-light",
      },
      transformOrigin: {
        0: "0%",
      },
    },
  },
  plugins: [],
  variants: {
    color: ["hover"],
  },
};
