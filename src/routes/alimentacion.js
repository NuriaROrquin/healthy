import React from "react";
import Nav from "../components/Nav";
import BannerContainer from "../components/BannerContainer";

export default function Alimentacion() {
  return (
    <>
      <Nav />
      <BannerContainer
        titulo="Alimentación"
        background="bg-alimentacion bg-right"
      />
      <h1>Alimentacion</h1>
    </>
  );
}
