module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#2A9134",
        yellow: "#f5e8a4",
        teal: "#95c89a",
        tealLight: "#BCD6D3",
        greenAqua: "#49a099",
      },
      backgroundImage: () => ({
        home: "url('/public/assets/banner-home.jpg')",
        turnos: "url('/public/assets/banner-turnos.png')",
        alimentacion: "url('/public/assets/banner-alimentacion.png')",
        login: "url('/public/assets/banner-login.png')",
        metricas: "url('/public/assets/banner-metricas.png')",
        natacion: "url('/public/assets/natacion2.jpg')",
        yoga: "url('/public/assets/banner-yoga.png')",
        gym: "url('/public/assets/banner-gym.png')",
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
        128: "26rem",
      },
    },
  },
  plugins: [],
  variants: {
    color: ["hover"],
  },
};
