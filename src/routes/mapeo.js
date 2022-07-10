import React from "react";
import BannerContainer from "../components/BannerContainer";
import Card from "../components/Card";
import DropDownButton from "../components/DropDownButton";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import { SubmitButton } from "../components/SubmitButton";

export default function Mapeo() {
  const profesores = [
    {
      value: "1",
      label: "Juan Pérez",
    },
    {
      value: "2",
      label: "Juan Pérez",
    },
    {
      value: "3",
      label: "Juan Pérez",
    },
  ];

  return (
    <>
      <div className="flex justify-center align-middle m-10">
        <iframe
          title="Mapeo Sedes"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13130.27597077164!2d-58.565810549999995!3d-34.64033065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1657390660823!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-center align-middle m-5">
        <DropDownButton
          label="Profesor"
          firstOption="Seleccione un profesor"
          options={profesores}
        />
      </div>

      <SectionContainer></SectionContainer>
    </>
  );
}
