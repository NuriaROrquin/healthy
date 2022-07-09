module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#2A9134",
        teal: "#95c89a",
        yellow: "#f5e8a4",
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
      minHeight: {
        96: "24rem",
      },
    },
  },
  plugins: [],
  variants: {
    color: ["hover"],
  },
};
