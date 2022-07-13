import React from "react";
import BodyContainer from "../components/BodyContainer";
import Card from "../components/Card";
import Carrousel from "../components/Carousel";
import Nav from "../components/Nav";
import ProgressBar from "../components/ProgressBar";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import { cardsDeActividades, cardsNoticias, cardsTurnos } from "../utils";

export default function Home() {
  return (
    <BodyContainer>
      <div className="pt-12">
        <SectionContainer title="Noticias">
          <div className="flex">
            <TituloSeccion color="text-greenAqua" texto="Noticias" />
          </div>
          <Carrousel cards={cardsNoticias} numeroDeCardsPorSlide={1} />
        </SectionContainer>

        <SectionContainer title="Hola Michael!" color="bg-orange">
          <div className="flex">
            <TituloSeccion color="text-white" texto="Hola Michael!" />
          </div>

          <div className="flex md:px-16 w-full flex-wrap justify-between ">
            <div className="flex flex-col bg-red py-8 px-4 shadow-lg w-full lg:w-1/3 rounded-lg mt-8 justify-between bg-white">
              <img
                src="/assets/user.jpeg"
                alt="imagen"
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />

              <div className="flex flex-col justify-center items-center my-4 gap-y-2">
                <h4 className="text-greenAqua font-cairo-bold mb-4">
                  Michael Rodriguez
                </h4>

                <p className="text-gray-400">
                  Ejercicio favorito:{" "}
                  <span className="text-orange font-cairo-bold">CrossFit</span>
                </p>

                <p className="text-gray-400">
                  Horas de ejercicio:{" "}
                  <span className="text-orange font-cairo-bold">150 horas</span>
                </p>

                <p className="text-gray-400">
                  Turnos pedidos:{" "}
                  <span className="text-orange font-cairo-bold">
                    145 turnos
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-red py-8 px-4 shadow-lg w-full lg:w-[28%] rounded-lg mt-8 bg-white">
              <div className="flex justify-center flex-col items-center mb-4">
                <h4 className="text-6xl text-greenAqua font-cairo-bold">
                  2515
                </h4>
                <span className="text-xl text-greenAqua font-cairo-bold">
                  {" "}
                  Puntos
                </span>
              </div>

              <div className="flex flex-col justify-center items-center my-2">
                <p className="text-gray-400 text-sm text-center leading-6">
                  Puntos recolectados esta semana:{" "}
                </p>
                <span className="text-orange font-cairo-bold">95 puntos</span>
              </div>

              <div className="flex flex-col justify-center items-center my-2">
                <p className="text-gray-400 text-sm text-center leading-6">
                  Puntos recolectados en el mes actual:{" "}
                </p>
                <span className="text-orange font-cairo-bold">342 puntos</span>
              </div>

              <div className="flex flex-col justify-center items-center my-2">
                <p className="text-gray-400 text-sm text-center leading-6">
                  Puntos pendientes de acreditación:{" "}
                </p>
                <span className="text-orange font-cairo-bold">119 puntos</span>
              </div>
            </div>

            <div className="flex flex-col bg-red py-8 px-4 shadow-lg w-full lg:w-1/3 rounded-lg mt-8 justify-between bg-white">
              <h4 className="text-4xl text-greenAqua font-cairo-bold pl-4 mb-4">
                Turnos de Hoy
              </h4>

              <div className="flex flex-col justify-center items-center my-4 gap-y-2 h-full">
                <div className="flex gap-x-4 w-full px-4 h-full justify-around">
                  <p className="text-gray-400 flex justify-end w-1/12 pt-1">
                    9:00
                  </p>
                  <div className="bg-tealLight p-2 rounded-lg w-10/12 h-full text-white min-h-20">
                    {" "}
                    Clase de Zumba
                  </div>
                </div>
                <div className="flex gap-x-4 w-full px-4 h-full justify-around">
                  <p className="text-gray-400 flex justify-end w-1/12 pt-1">
                    19:00
                  </p>
                  <div className="bg-tealLight p-2 rounded-lg w-10/12 h-full text-white min-h-20">
                    {" "}
                    Clase de Zumba
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer title="Tus proximos turnos">
          <div className="flex">
            <TituloSeccion color="text-greenAqua" texto="Tus proximos turnos" />
          </div>
          <Carrousel cards={cardsTurnos} numeroDeCardsPorSlide={4} />
        </SectionContainer>

        <SectionContainer title="¡Conocé todas las actividades que tenemos para vos!">
          <h2 className="text-center mb-24 text-5xl text-greenAqua font-cairo-bold">
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
    </BodyContainer>
  );
}
