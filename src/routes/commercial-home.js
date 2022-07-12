import React from "react";
import BodyContainer from "../components/BodyContainer";
import ButtonWhite, { ButtonGreen } from "../components/Button";
import Carrousel from "../components/Carousel";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import {
  cardsActividadesCarousel,
  cardsDeActividades,
  cardsTurnos,
} from "../utils";

export default function CommercialHome() {
  const cardsNoticias = [
    {
      id: 1,
      card: (
        <div className="w-full rounded-lg overflow-hidden shadow-md flex flex-col my-6 h-screen bg-yoga bg-cover bg-center"></div>
      ),
    },
    {
      id: 2,
      card: (
        <div className="w-full rounded-lg overflow-hidden shadow-md flex flex-col my-6 h-screen bg-gym bg-cover bg-center"></div>
      ),
    },
  ];

  return (
    <BodyContainer>
      <section className="flex flex-col xl:flex-row-reverse justify-end w-full h-screen">
        <div className="w-full h-1/2 xl:w-1/2 xl:h-screen overflow-hidden">
          <Carrousel
            cards={cardsNoticias}
            numeroDeCardsPorSlide={1}
            insideChevron={true}
            withoutPadding={true}
          />
        </div>
        <div className="w-full h-1/2 xl:h-screen xl:w-1/2 flex flex-col justify-center px-12 bg-orange gap-y-12 ">
          <h1 className="text-white">
            Nunca obtuviste tantos beneficios por hacer ejercicio.
          </h1>

          <h2 className="xl:text-3xl md:text-2xl text-xl">
            Con sedes distribuidas por todo Buenos Aires y los mejores
            profesores, el éxito y la diversión estan asegurados.
          </h2>

          <ButtonWhite>Conocé Más</ButtonWhite>
        </div>
      </section>

      <SectionContainer>
        <TituloSeccion color="text-greenAqua" texto="Nuestras actividades" />
        <div className="pt-8">
          <Carrousel
            cards={cardsActividadesCarousel}
            numeroDeCardsPorSlide={3}
          />
        </div>
      </SectionContainer>

      <SectionContainer>Cards de sedes</SectionContainer>
    </BodyContainer>
  );
}
