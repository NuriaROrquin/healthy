import React from "react";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import GraphLine from "../components/GraphLine";
import PieGraph from "../components/PieGraph";
import { cantidadDeClasesTomadasPorMes } from "../utils";
import { cantidadDePuntosAdquiridosPorMes } from "../utils";
import { TituloSeccion } from "../components/Titulo";

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

          <div className="flex justify-between flex-wrap gap-y-24">
            <div>
              <Card
                image="/assets/lifting.webp"
                description="¡Felicitaciones! Concluiste 15 turnos de mancuernas y maquinas este mes."
                title="Desafio: Pesas Principiante"
              />
            </div>
            <div>
              <Card
                image="/assets/running-cinta.jpg"
                description="¡Felicitaciones! Concluiste 12 turnos de running en cinta este mes."
                title="Desafio: Running Principiante"
              />
            </div>
            <div>
              <Card
                image="/assets/natacion.webp"
                description="¡Felicitaciones! Concluiste 12 turnos de running en cinta este mes."
                title="Desafio: Natacion Intermedio"
              />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex">
            <TituloSeccion color="text-teal" texto="Métricas" />
          </div>

          <div className="flex flex-wrap justify-between mt-4 gap-y-24">
            <div className="flex w-4/12">
              <PieGraph
                title="Porcentaje de actividades"
                data={porcentajeDeActividades}
              />
            </div>
            <div className="flex w-7/12 justify-end">
              <GraphLine
                titulo="Cantidad de clases tomadas"
                series={cantidadDeClasesTomadasPorMes}
              />
            </div>
          </div>

          <div className="mt-12">
            <GraphLine
              titulo="Cantidad de puntos adquiridos"
              series={cantidadDePuntosAdquiridosPorMes}
            />
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
