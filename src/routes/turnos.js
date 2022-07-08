import React from "react";
import BannerContainer from "../components/BannerContainer";
import Card from "../components/card";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";

export default function Turnos() {
  return (
    <>
      <Nav />
      <BannerContainer titulo="Turnos" background="bg-turnos bg-center" />
      <h1>Turnos</h1>
      <SectionContainer>
        <h3 className="text-center mb-24 text-3xl">
          Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
          saludable!{" "}
        </h3>
        <div className="flex justify-around flex-wrap gap-2">
         <Card image="https://img.freepik.com/vector-premium/mano-que-sostiene-mancuerna-conjunto-mancuernas-dobladas-normales-deformadas-blanco-equipo-deportivo-levantamiento-pesas-ejercicio-fuerza-concepto-gimnasio-estilo-ilustracion_257455-168.jpg?w=996" description="Clases grupales con tutor." title="SPINNING"/>

         <Card image="https://img.freepik.com/vector-premium/mano-que-sostiene-mancuerna-conjunto-mancuernas-dobladas-normales-deformadas-blanco-equipo-deportivo-levantamiento-pesas-ejercicio-fuerza-concepto-gimnasio-estilo-ilustracion_257455-168.jpg?w=996" description="Clases grupales con tutor." title="RUNNING"/>

         <Card image="https://img.freepik.com/vector-premium/mano-que-sostiene-mancuerna-conjunto-mancuernas-dobladas-normales-deformadas-blanco-equipo-deportivo-levantamiento-pesas-ejercicio-fuerza-concepto-gimnasio-estilo-ilustracion_257455-168.jpg?w=996" description="Clases grupales con tutor." title="CROSSFIT"/>

         <Card image="https://img.freepik.com/vector-premium/mano-que-sostiene-mancuerna-conjunto-mancuernas-dobladas-normales-deformadas-blanco-equipo-deportivo-levantamiento-pesas-ejercicio-fuerza-concepto-gimnasio-estilo-ilustracion_257455-168.jpg?w=996" description="Clases grupales con tutor." title="FUNCIONAL"/>

        </div>
        
      </SectionContainer>

      
    </>
  );
}
