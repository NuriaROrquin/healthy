import React from "react";
import { ButtonGreen } from "../components/Button";
import { DatePicker, TimePicker } from "../components/DatePicker";
import DropDownButton from "../components/DropDownButton";
import SectionContainer from "../components/SectionContainer";
import { SubmitButton } from "../components/SubmitButton";
import { Calendar } from "../icons/calendar";
import Hour from "../icons/hour";

export default function Mapeo() {
  const profesores = [
    {
      value: "1",
      label: "Juan Quintana",
    },
    {
      value: "2",
      label: "Pedro Ferro",
    },
    {
      value: "3",
      label: "Julian Casablanca",
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
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-full flex justify-center mt-4">
        <div className="max-w-max" id="datePortal">
          <DatePicker
            label="Fecha"
            placeholder="Seleccione una fecha"
            icon={<Calendar />}
            portal="datePortal"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <div className="max-w-max" id="timePortal">
          <TimePicker
            label="Horario"
            placeholder="Seleccione un horario"
            icon={<Hour />}
            portal="timePortal"
          />
        </div>
      </div>

      <div className="flex justify-center align-middle m-5">
        <DropDownButton
          label="Profesor"
          firstOption="Seleccione un profesor"
          options={profesores}
        />
      </div>
      <div className="flex justify-center align-middle m-5">
        <SubmitButton label="Agendar" color="bg-teal mt-8" />
      </div>

      <SectionContainer></SectionContainer>
    </>
  );
}
