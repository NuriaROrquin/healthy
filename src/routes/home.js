import React from "react";
import BannerContainer from "../components/BannerContainer";
import Carrousel from "../components/Carousel";
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
        <Carrousel />
      </SectionContainer>
    </>
  );
}
