import React from "react";
import BannerContainer from "../components/BannerContainer";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";

export default function Turnos() {
  return (
    <>
      <Nav />
      <BannerContainer titulo="Turnos" background="bg-turnos bg-center" />
      <h1>Turnos</h1>
      <SectionContainer>
        <h3 className="text-center bg-orange-400 ">
          Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
          saludable!{" "}
        </h3>
      </SectionContainer>
    </>
  );
}
