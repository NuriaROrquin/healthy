module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#2A9134",
        yellow: "#f5e8a4",
        orange: "#f5a051",
        greenAqua: "#49a099",
        tealLight: "#8FC7AC",
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
        estudiantilportenio: "url('/public/assets/bg-estudiantilportenio.jpg')",
        sportclub: "url('/public/assets/bg-sportclub.jpg')",
        openpark: "url('/public/assets/openpark-bg.jpeg')",
        megatlon: "url('/public/assets/megatlon-bg.jpeg')",
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
        20: "5rem",
      },
      boxShadow: {
        card: "0px 0px 17px -1px rgba(102,102,102,0.47)",
      },
    },
  },
  plugins: [],
  variants: {
    color: ["hover"],
  },
};
