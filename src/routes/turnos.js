import React, { useState } from "react";
import BannerContainer from "../components/BannerContainer";
import { DatePicker, TimePicker } from "../components/DatePicker";
import DropDownButton from "../components/DropDownButton";
import Map from "../components/Map";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import { Calendar } from "../icons/calendar";
import Hour from "../icons/hour";
import { actividades, profesores, sedesDeNatacion } from "../utils";
import { SubmitButton } from "../components/SubmitButton";
import { ButtonGreen } from "../components/Button";

export default function Turnos() {
  const [sede, setSede] = useState();
  const [profesor, setProfesor] = useState();
  const [actividad, setActividad] = useState();

  return (
    <>
      <Nav />
      <BannerContainer titulo="Turnos" background="bg-turnos bg-center" />
      <h1>Turnos</h1>

      <SectionContainer>
        <TituloSeccion texto="Agendá tu turno" color="text-teal" />

        <div className="flex justify-between mb-8">
          <div className="flex">
            <div className="max-w-max" id="datePortal">
              <DatePicker
                label="Fecha"
                placeholder="Seleccione una fecha"
                icon={<Calendar />}
                portal="datePortal"
              />
            </div>
          </div>

          <div className="flex">
            <div className="max-w-max" id="timePortal">
              <TimePicker
                label="Horario"
                placeholder="Seleccione un horario"
                icon={<Hour />}
                portal="timePortal"
              />
            </div>
          </div>

          <div className="flex">
            <DropDownButton
              label="Sede"
              firstOption="Seleccione una sede"
              options={sedesDeNatacion}
              setOption={setSede}
            />
          </div>

          <div className="flex">
            <DropDownButton
              label="Actividad"
              firstOption="Seleccione una actividad"
              options={actividades}
              setOption={setActividad}
              disabled={!sede}
            />
          </div>

          <div className="flex">
            <DropDownButton
              label="Profesor"
              firstOption="Seleccione un profesor"
              options={profesores}
              setOption={setProfesor}
              disabled={!actividad}
            />
          </div>
        </div>

        <ButtonGreen className="bg-teal w-full max-w-full">
          Agendar Turno
        </ButtonGreen>

        <div className="flex justify-center align-middle w-full my-8">
          <Map />
        </div>
      </SectionContainer>
    </>
  );
}
