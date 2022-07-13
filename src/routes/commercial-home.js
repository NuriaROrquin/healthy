import React from "react";
import BodyContainer from "../components/BodyContainer";
import ButtonWhite, { ButtonGreen } from "../components/Button";
import Carrousel from "../components/Carousel";
import Footer from "../components/Footer";
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

      <SectionContainer title="Nuestras actividades">
        <TituloSeccion color="text-greenAqua" texto="Nuestras actividades" />
        <div className="pt-8">
          <Carrousel
            cards={cardsActividadesCarousel}
            numeroDeCardsPorSlide={3}
          />
        </div>
      </SectionContainer>

      <SectionContainer title="Nuestras Sedes">
        <TituloSeccion color="text-greenAqua" texto="Nuestras Sedes" />

        <div className="flex flex-col gap-y-8 pt-8">
          <div className="w-full h-40 bg-megatlon bg-cover bg-top">
            <div className="h-full relative bg-white w-full p-8 bg-opacity-30">
              <img
                className="w-full h-full object-contain"
                src="/assets/megatlon.png"
                alt="Megatlon"
              />
            </div>
          </div>

          <div className="w-full h-40 bg-estudiantilportenio bg-cover bg-top">
            <div className="h-full relative bg-white w-full p-8 bg-opacity-30">
              <img
                className="w-full h-full object-contain pr-2"
                src="/assets/openpark.png"
                alt="Open Park"
              />
            </div>
          </div>

          <div className="w-full h-40 bg-sportclub bg-cover bg-top">
            <div className="h-full relative bg-white w-full p-8 bg-opacity-30">
              <img
                className="w-full h-full object-contain"
                src="/assets/sportclub.png"
                alt="SportClub"
              />
            </div>
          </div>

          <div className="w-full h-40 bg-openpark bg-cover bg-top">
            <div className="h-full relative bg-white w-full p-8 bg-opacity-30">
              <img
                className="w-full h-full object-contain"
                src="/assets/estudiantilportenio.png"
                alt="Club Atletico Estudiantil Porteño"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer title="Canjeando tus puntos healthy podés acceder a increibles beneficios">
        <TituloSeccion
          color="text-greenAqua"
          texto="Canjeando tus puntos healthy podés acceder a increibles beneficios"
        />

        <div className="flex flex-wrap justify-around xl:justify-between gap-16 mt-8">
          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain px-8"
                src="/assets/laisla.png"
                alt="La isla"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                30% de dto
              </span>
            </div>
          </div>

          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain"
                src="/assets/coto.png"
                alt="Coto"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                20% de dto
              </span>
            </div>
          </div>

          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain"
                src="/assets/jumbo.jpg"
                alt="Jumbo"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                15% de dto
              </span>
            </div>
          </div>

          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain"
                src="/assets/showcase.png"
                alt="Showcase"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                10% de dto
              </span>
            </div>
          </div>

          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain"
                src="/assets/cinemark.jpg"
                alt="Cinemark"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                35% de dto
              </span>
            </div>
          </div>

          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain"
                src="/assets/multiplex.png"
                alt="Multiplex"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                40% de dto
              </span>
            </div>
          </div>

          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain p-8"
                src="/assets/apple.svg"
                alt="Apple"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                15% de dto
              </span>
            </div>
          </div>

          <div className="h-60 bg-white w-full md:w-1/3 xl:w-1/5 shadow-xl">
            <div className="h-2/3">
              <img
                className="w-full h-full object-contain"
                src="/assets/ds.png"
                alt="Diamond System"
              />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center bg-orange rounded-b-md">
              <span className="text-white text-xl font-cairo-semibold">
                30% de dto
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </BodyContainer>
  );
}
