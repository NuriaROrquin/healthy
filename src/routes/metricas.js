import React from "react";
import Nav from "../components/Nav";
import BannerContainer from "../components/BannerContainer";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/card";
import GraphLine from "../components/GraphLine";

export default function Metricas() {
  return (
    <>
      <Nav />
      <BannerContainer titulo="Métricas" background="bg-metricas" />

      <SectionContainer>
        <h1>Metricas</h1>

        <div className="flex justify-around">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>

        <GraphLine />
      </SectionContainer>
    </>
  );
}
