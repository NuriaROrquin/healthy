import React from "react";
import Nav from "../components/Nav";
import BannerContainer from "../components/BannerContainer";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import GraphLine from "../components/GraphLine";
import PieGraph from "../components/PieGraph";

export default function Metricas() {
  const cantidadDeClasesTomadasPorMes = [
    {
      type: "line",
      name: "Clases tomadas",
      data: [
        [1649424600000, 0],
        [1649683800000, 1],
        [1649770200000, 2],
        [1649856600000, 0],
        [1649943000000, 3],
        [1650288600000, 0],
        [1650375000000, 2],
        [1650461400000, 1],
        [1650547800000, 1],
        [1650634200000, 0],
        [1650893400000, 1],
        [1650979800000, 0],
        [1651066200000, 2],
        [1651152600000, 1],
        [1651239000000, 2],
        [1651498200000, 1],
        [1651584600000, 3],
        [1651671000000, 1],
        [1651757400000, 1],
        [1651843800000, 2],
        [1652103000000, 0],
        [1652189400000, 1],
        [1652275800000, 2],
        [1652362200000, 1],
        [1652448600000, 1],
        [1652707800000, 1],
        [1652794200000, 1],
        [1652880600000, 0],
        [1652967000000, 1],
        [1653053400000, 0],
        [1653312600000, 1],
        [1653399000000, 2],
        [1653485400000, 1],
        [1653571800000, 1],
        [1653658200000, 2],
        [1654003800000, 1],
        [1654090200000, 1],
        [1654176600000, 2],
        [1654263000000, 3],
        [1654522200000, 1],
        [1654608600000, 2],
        [1654695000000, 1],
        [1654781400000, 1],
        [1654867800000, 1],
        [1655127000000, 1],
        [1655213400000, 2],
        [1655299800000, 2],
        [1655386200000, 2],
        [1655472600000, 1],
        [1655818200000, 0],
        [1655904600000, 0],
        [1655991000000, 0],
        [1656077400000, 0],
        [1656336600000, 0],
        [1656423000000, 0],
        [1656509400000, 1],
        [1656595800000, 2],
        [1656682200000, 0],
        [1657027800000, 3],
        [1657114200000, 1],
        [1657200600000, 2],
        [1657287000000, 0],
      ],
    },
  ];

  return (
    <>
      <Nav />
      {/* <BannerContainer titulo="Métricas" background="bg-metricas bg-center" /> */}

      <SectionContainer>
        <h1>Metricas</h1>

        <div className="flex justify-around flex-wrap gap-2 gap-y-24">
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

        <div className="flex-wrap">
          <div className="mt-24 flex gap-2 gap-y-24">
            <div className="w-1/3">
              <Card
                image="/assets/15.webp"
                description="¡Segui asi! Llevas un 15% de tu desafio completado"
                title="Desafio: Spinning principiante"
              />
            </div>
            <div className="w-2/3 justify-end">
              <GraphLine
                titulo="Cantidad de clases tomadas"
                series={cantidadDeClasesTomadasPorMes}
              />
            </div>
          </div>
        </div>
        <div>
          <PieGraph />
        </div>

        <div>
              <GraphLine
                titulo="Cantidad de clases tomadas"
                series={cantidadDeClasesTomadasPorMes}
              />
            </div>


      </SectionContainer>
    </>
  );
}
