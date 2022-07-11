import React from "react";
import Card from "../components/Card";
import Carrousel from "../components/Carousel";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import { cardsDeBeneficios, cardsNoticias, cardsTurnos } from "../utils";

export default function Beneficios() {
 
  return (
    <div >
      <Nav />
      <SectionContainer>
          <h2 className="text-center mb-24 text-5xl text-teal font-cairo-bold">
            ¡Descuentos imperdibles canjeando tus puntos!
          </h2>
          <div className="flex justify-around flex-wrap gap-2 gap-y-24">
            {cardsDeBeneficios.map((actividad) => {
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
              Descuentos imperdibles canjeando tus puntos!
            </h3>
          </div>
        </SectionContainer>

    </div>
  );
}