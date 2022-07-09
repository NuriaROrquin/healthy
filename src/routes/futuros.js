import React from "react";
import BannerContainer from "../components/BannerContainer";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import Carrousel from "../components/Carousel";

export default function Futuros() {
  const cards = [
    {
      id: 1,
      card: <div style={{ height: 200, background: "#EEE" }}>First card</div>,
    },
    {
      id: 2,
      card: <div style={{ height: 200, background: "#EEE" }}>Second card</div>,
    },
    {
      id: 3,
      card: <div style={{ height: 200, background: "#EEE" }}>Third card</div>,
    },
    {
      id: 4,
      card: <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>,
    },
  ];

  return (
    <>
      <Nav />
      <BannerContainer titulo="Turnos" background="bg-turnos bg-center" />
      <h1>Turnos</h1>
      <SectionContainer>
        <h3 className="text-center mb-24 text-3xl">
          Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
          saludable!{" "}
        </h3>

        <h2> Multiple items </h2>
        <Carrousel cards={cards} numeroDeCardsPorSlide={3} />
      </SectionContainer>
    </>
  );
}
