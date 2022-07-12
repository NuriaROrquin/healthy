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
import BodyContainer from "../components/BodyContainer";

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
    <BodyContainer>
      <div className="pt-12">
        <SectionContainer>
          <div className="flex">
            <TituloSeccion color="text-greenAqua mb-4" texto="Desafios" />
          </div>

          <Carrousel cards={cardsDesafios} numeroDeCardsPorSlide={3} />
        </SectionContainer>
        <SectionContainer>
          <div className="flex">
            <TituloSeccion color="text-greenAqua" texto="Métricas" />
          </div>

          <div className="flex flex-wrap 2xl:justify-between mt-4 gap-y-8 mb-8">
            <div className="flex w-full 2xl:w-5/12 items-center justify-center">
              <div className="w-full shadow-md rounded-lg bg-white p-8 flex items-center flex-col gap-y-4 h-full">
                <span className="text-orange text-2xl font-cairo-bold">
                  Porcentaje de actividades realizadas
                </span>
                <PieGraph data={porcentajeDeActividades} />
              </div>
            </div>

            <div className="flex w-full 2xl:w-6/12 justify-end">
              <div className="w-full shadow-md rounded-lg bg-white p-8 flex items-center flex-col gap-y-4">
                <GraphLine
                  titulo="Cantidad de clases tomadas"
                  series={cantidadDeClasesTomadasPorMes}
                />
              </div>
            </div>

            <div className="flex w-full 2xl:w-7/12">
              <div className="w-full shadow-md rounded-lg bg-white p-8 flex items-center flex-col gap-y-4">
                <GraphLine
                  titulo="Cantidad de puntos adquiridos"
                  series={cantidadDePuntosAdquiridosPorMes}
                />
              </div>
            </div>

            <div className="flex w-full 2xl:w-4/12 justify-end">
              <div className="w-full shadow-md rounded-lg bg-white p-8 flex items-center flex-col gap-y-4">
                <h4 className="text-orange font-cairo-bold text-3xl">
                  Logro a Desbloquear
                </h4>

                <p className="text-greenAqua">
                  Llega a las 50 clases en cada actividad y sumá 1500 puntos
                </p>

                <div className="flex flex-col w-full gap-y-2">
                  <span className="text-orange text-md font-cairo-bold">
                    Natación
                  </span>
                  <ProgressBar number={50} />
                  <span className="text-orange text-md font-cairo-bold">
                    Crossfit
                  </span>
                  <ProgressBar number={60} />
                  <span className="text-orange text-md font-cairo-bold">
                    Running
                  </span>
                  <ProgressBar number={40} />
                  <span className="text-orange text-md font-cairo-bold">
                    Yoga
                  </span>
                  <ProgressBar number={10} />
                  <span className="text-orange text-md font-cairo-bold">
                    Zumba
                  </span>
                  <ProgressBar number={15} />
                  <span className="text-orange text-md font-cairo-bold">
                    Funcional
                  </span>
                  <ProgressBar number={80} />
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </BodyContainer>
  );
}
