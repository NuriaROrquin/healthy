import React from "react";
import BannerContainer from "../components/BannerContainer";
import Nav from "../components/Nav";

export default function Turnos() {
  return (
    <>
      <Nav />
      <BannerContainer titulo="Turnos" background="bg-turnos" />
      <h1>Turnos</h1>
      <section className="flex justify-center px-52">
      <h3  className="text-center bg-orange-400 ">Qué estas esperando? Reservá un turno y comenzá ya a sentirte más saludable! </h3> 
      </section>
      
      
    </>
  );
}
