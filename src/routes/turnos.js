import React from "react";
import BannerContainer from "../components/BannerContainer";
import Card from "../components/Card";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";

export default function Turnos() {
  return (
    <>
      <Nav />
      <BannerContainer titulo="Turnos" background="bg-turnos bg-center" />
      <h1>Turnos</h1>
      <SectionContainer>
        <h2 className="text-center mb-24 text-5xl text-teal font-cairo-bold">
          ¡Conocé todas las actividades que tenemos para vos!
        </h2>
        <div className="flex justify-around flex-wrap gap-2 gap-y-24">
          <Card
            image="/assets/spinning.jpg"
            description="Clases grupales con tutor. Conocé todas las sedes disponibles y elegí la que más te guste."
            title="SPINNING"
          />

          <Card
            image="/assets/running.jpg"
            description="Salí en grupo a recorrer las distintas calles de Buenos Aires."
            title="RUNNING"
          />

          <Card
            image="/assets/crossfit.webp"
            description="Si queres fortalecer tu figura de manera más rápida, no dudes en inscribirte a estas clases."
            title="CROSSFIT"
          />

          <Card
            image="/assets/funcional.png"
            description="Hacé ejercicio sólo con tu peso! Clases grupales con tutor."
            title="FUNCIONAL"
          />

          <Card
            image="/assets/natacion.webp"
            description="Clases para principiantes y avanzados. Pileta libre y entrenamiento en equipo! "
            title="NATACION"
          />

          <Card
            image="/assets/aquagym.webp"
            description="Una actividad distinta dentro del agua para todas las edades. "
            title="AQUAGYM"
          />

          <Card
            image="/assets/yoga.jpg"
            description="Conectá tu cuerpo, mente y espiritu para lograr el equilibrio y bienestar."
            title="YOGA"
          />

          <Card
            image="/assets/zumba.jpg"
            description="Vení a bailar y divertirte en grupo con los mejores profesores del país."
            title="ZUMBA"
          />
          <h3 className="text-center mb-24 text-3xl ">
            Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
            saludable!
          </h3>
        </div>
      </SectionContainer>
      <SectionContainer></SectionContainer>
    </>
  );
}
