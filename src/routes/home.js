import React from "react";
import Carrousel from "../components/Carousel";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import { cardsNoticias, cardsTurnos } from "../utils";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="pt-12">
        <SectionContainer>
          <div className="flex">
            <TituloSeccion color="text-teal" texto="Noticias" />
          </div>
          <Carrousel cards={cardsNoticias} numeroDeCardsPorSlide={1} />
        </SectionContainer>
        <SectionContainer>
          <div className="flex">
            <TituloSeccion color="text-teal" texto="Tus proximos turnos" />
          </div>
          <Carrousel cards={cardsTurnos} numeroDeCardsPorSlide={4} />
        </SectionContainer>
      </div>
    </>
  );
}
