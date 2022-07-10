import React from "react";
import BannerContainer from "../components/BannerContainer";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import Carrousel from "../components/Carousel";
import { cardsNoticias, cardsTurnos, cardsTurnosHistoricos } from "../utils";
import { TituloSeccion } from "../components/Titulo";

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
     
      <SectionContainer>
      <div className="justify-center">
          <div className="justify-center">
            <TituloSeccion color="text-teal"  texto="Histórico " />
          </div>
      </div>
        

          <Carrousel cards={cardsTurnosHistoricos} numeroDeCardsPorSlide={4} />
          <h3 className="text-center mb-24 text-3xl ">
            Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
            saludable!
          </h3>
      </SectionContainer>


    </>
  );
}
