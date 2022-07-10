import React from "react";
import Nav from "../components/Nav";
import BannerContainer from "../components/BannerContainer";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import GraphLine from "../components/GraphLine";
import PieGraph from "../components/PieGraph";
import { cantidadDeClasesTomadasPorMes } from "../utils";
import Titulo from "../components/Titulo";

export default function Metricas() {
  return (
    <>
      <Nav />
      {/* <BannerContainer titulo="Métricas" background="bg-metricas bg-center" /> */}

      <SectionContainer>
        <Titulo>Metricas</Titulo>

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

        <div className="flex flex-wrap justify-between mt-24 gap-y-24">
          <div className="flex w-1/3">
            <Card
              image="/assets/15.webp"
              description="¡Segui asi! Llevas un 15% de tu desafio completado"
              title="Desafio: Spinning principiante"
            />
          </div>
          <div className="flex w-2/3 justify-end">
            <GraphLine
              titulo="Cantidad de clases tomadas"
              series={cantidadDeClasesTomadasPorMes}
            />
          </div>
        </div>
        <div>
          <PieGraph />
        </div>

        <div className="mt-24">
          <GraphLine
            titulo="Cantidad de puntos adquiridos"
            series={cantidadDeClasesTomadasPorMes}
          />
        </div>
      </SectionContainer>
    </>
  );
}
