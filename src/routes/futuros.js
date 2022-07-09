import React from "react";
import BannerContainer from "../components/BannerContainer";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import Carrousel from "../components/Carousel";

export default function Futuros() {
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
        <Carrousel />
      </SectionContainer>
    </>
  );
}
