import React from "react";
import Card from "../components/Card";
import Carrousel from "../components/Carousel";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import { cardsDeActividades, cardsNoticias, cardsTurnos } from "../utils";

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
        <SectionContainer>
          <h2 className="text-center mb-24 text-5xl text-teal font-cairo-bold">
            ¡Conocé todas las actividades que tenemos para vos!
          </h2>
          <div className="flex justify-around flex-wrap gap-2 gap-y-24">
            {cardsDeActividades.map((actividad) => {
              return (
                <Card
                  key={actividad.id}
                  image={actividad.image}
                  description={actividad.description}
                  title={actividad.title}
                  href={actividad.href}
                />
              );
            })}
            <h3 className="text-center mb-24 text-3xl ">
              Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
              saludable!
            </h3>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
