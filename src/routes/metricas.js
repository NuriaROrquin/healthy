import React from "react";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import GraphLine from "../components/GraphLine";
import PieGraph from "../components/PieGraph";
import {
  cantidadDeClasesTomadasPorMes,
  cardsDesafios,
  cardsTurnos,
} from "../utils";
import { cantidadDePuntosAdquiridosPorMes } from "../utils";
import { TituloSeccion } from "../components/Titulo";
import Carrousel from "../components/Carousel";
import ProgressBar from "../components/ProgressBar";

export default function Metricas() {
  const porcentajeDeActividades = [
    {
      name: "Cantidad de clases",
      colorByPoint: true,
      data: [
        {
          name: "Natación",
          y: 31.41,
        },
        {
          name: "CrossFit",
          y: 22.59,
        },
        {
          name: "Yoga",
          y: 15.15,
        },
        {
          name: "Spinning",
          y: 4.67,
        },
        {
          name: "Running",
          y: 4.18,
        },
        {
          name: "Gimnasio",
          y: 22,
        },
      ],
    },
  ];

  return (
    <>
      <Nav />

      <div className="pt-12">
        <SectionContainer>
          <div className="flex">
            <TituloSeccion color="text-teal mb-4" texto="Desafios" />
          </div>

          <Carrousel cards={cardsDesafios} numeroDeCardsPorSlide={3} />
        </SectionContainer>
        <SectionContainer>
          <div className="flex">
            <TituloSeccion color="text-teal" texto="Métricas" />
          </div>

          <div className="flex flex-wrap 2xl:justify-between mt-4 gap-y-8 mb-8">
            <div className="flex w-full 2xl:w-4/12 items-center justify-center">
              <PieGraph
                title="Porcentaje de actividades"
                data={porcentajeDeActividades}
              />
            </div>

            <div className="flex w-full 2xl:w-7/12 justify-end">
              <GraphLine
                titulo="Cantidad de clases tomadas"
                series={cantidadDeClasesTomadasPorMes}
              />
            </div>

            <div className="flex w-full 2xl:w-7/12">
              <GraphLine
                titulo="Cantidad de puntos adquiridos"
                series={cantidadDePuntosAdquiridosPorMes}
              />
            </div>

            <div className="flex w-full 2xl:w-4/12 justify-end">
              <div className="w-full shadow-md rounded-lg bg-white p-8 flex items-center flex-col gap-y-4">
                <h4 className="text-greenAqua font-cairo-bold text-3xl">
                  Logro a Desbloquear
                </h4>

                <p>
                  Llega a las 100 clases en cada actividad y sumá 500 puntos
                </p>

                <div className="flex flex-col w-full gap-y-2">
                  <span className="text-teal text-md font-cairo-semibold">
                    Natación
                  </span>
                  <ProgressBar number={50} />
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
