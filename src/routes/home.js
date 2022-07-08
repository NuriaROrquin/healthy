import React from "react";
import BannerContainer from "../components/BannerContainer";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";

export default function Home() {
  return (
    <>
      <Nav />
      <BannerContainer
        titulo="Tenemos lo mejor para vos"
        background="bg-home bg-right"
      />
      <SectionContainer>
        <div>
          Aca va el contenido de la seccion, ya sean cards, metricas, etc etc
        </div>
      </SectionContainer>
    </>
  );
}
