import React from "react";
import Nav from "../components/Nav";
import BannerContainer from "../components/BannerContainer";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/card";

export default function Metricas() {
  return (
    <>
      <Nav />
      <BannerContainer titulo="Métricas" background="bg-metricas bg-center" />

      <SectionContainer>
        <h1>Metricas</h1>

        <div class="flex justify-around">
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
      </SectionContainer>
    </>
  );
}
