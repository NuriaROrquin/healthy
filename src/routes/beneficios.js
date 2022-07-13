import React from "react";
import BodyContainer from "../components/BodyContainer";
import Card from "../components/Card";
import Carrousel from "../components/Carousel";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import { cardsDeBeneficios, cardsNoticias, cardsTurnos } from "../utils";

export default function Beneficios() {
  return (
    <BodyContainer>
      <Nav />
      <SectionContainer>
        <div className="pt-24">
          <TituloSeccion
            texto="¡Descuentos imperdibles canjeando tus puntos!"
            color="text-greenAqua"
          />
          <div className="flex flex-wrap justify-center lg:justify-between gap-y-12 pt-12">
            {cardsDeBeneficios.map((actividad) => {
              return (
                <div className="max-w-xs">
                  <Card
                    id={actividad.id}
                    key={actividad.id}
                    image={actividad.image}
                    description={actividad.description}
                    title={actividad.title}
                    href={actividad.href}
                    newblank={actividad.newblank}
                  />
                </div>
              );
            })}
            <h3 className="text-center mb-24 text-3xl ">
              Descuentos imperdibles canjeando tus puntos!
            </h3>
          </div>
        </div>
      </SectionContainer>
    </BodyContainer>
  );
}
