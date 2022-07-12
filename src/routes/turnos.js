import React, { useEffect, useState } from "react";
import { DatePicker, TimePicker } from "../components/DatePicker";
import DropDownButton from "../components/DropDownButton";
import Map from "../components/Map";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import { TituloSeccion } from "../components/Titulo";
import { Calendar } from "../icons/calendar";
import Hour from "../icons/hour";
import {
  actividades,
  cardsTurnosHistoricos,
  profesores,
  sedesDeNatacion,
} from "../utils";
import { ButtonGreen } from "../components/Button";
import Carrousel from "../components/Carousel";
import Modal from "../components/Modal";
import { getDate, getHours, getDay, format } from "date-fns";
import es from "date-fns/esm/locale/es/index";
import BodyContainer from "../components/BodyContainer";

export default function Turnos() {
  const [sede, setSede] = useState();
  const [profesor, setProfesor] = useState();
  const [actividad, setActividad] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [error, setError] = useState();
  const [openModal, setOpenModal] = useState();

  const handleAgendarTurno = () => {
    if (sede && profesor && actividad && date && hour) {
      setOpenModal(true);
    } else {
      setError("Todos los campos son obligatorios");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, [openModal]);

  return (
    <BodyContainer>
      <div className={`relative ${openModal && "bg-black bg-opacity-50"}`}>
        <h1>Turnos</h1>

        <SectionContainer>
          <TituloSeccion texto="Agendá tu turno" color="text-orange" />

          <div className="flex flex-col p-8 bg-white shadow-card rounded-lg my-8">
            <div className="flex justify-between mb-8 flex-col items-center xl:flex-row gap-y-4 gap-x-6">
              <div className="flex w-full gap-x-6 xl:w-2/5 flex-col gap-y-4 md:flex-row">
                <div className="flex w-full">
                  <div className="w-full" id="datePortal">
                    <DatePicker
                      label="Fecha"
                      placeholder="Seleccione una fecha"
                      icon={<Calendar />}
                      portal="datePortal"
                      date={date}
                      setDate={setDate}
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="w-full" id="timePortal">
                    <TimePicker
                      label="Horario"
                      placeholder="Seleccione un horario"
                      icon={<Hour />}
                      portal="timePortal"
                      hour={hour}
                      setHour={setHour}
                      disabled={!date}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full xl:w-1/5">
                <DropDownButton
                  label="Sede"
                  firstOption="Seleccione una sede"
                  options={sedesDeNatacion}
                  setOption={setSede}
                  disabled={!hour}
                  className="w-full !min-w-full"
                />
              </div>

              <div className="flex w-full gap-x-6 xl:w-2/5 flex-col gap-y-4 md:flex-row">
                <div className="flex w-full">
                  <DropDownButton
                    label="Actividad"
                    firstOption="Seleccione una actividad"
                    options={actividades}
                    setOption={setActividad}
                    disabled={!sede}
                    className="w-full !min-w-full"
                  />
                </div>

                <div className="flex w-full">
                  <DropDownButton
                    label="Profesor"
                    firstOption="Seleccione un profesor"
                    options={profesores}
                    setOption={setProfesor}
                    disabled={!actividad}
                    className="w-full !min-w-full"
                  />
                </div>
              </div>
            </div>

            {error && !profesor && (
              <div className="w-full flex flex-col justify-center items-center">
                <span className="text-red-500 font-bold">{error}</span>
                <span className="text-red-500 text-sm">
                  Por favor, revise los campos de {!date && "fecha,"}
                  {!hour && " horario,"}
                  {!sede && " sede,"}
                  {!actividad && " actividad,"}
                  {!profesor && " profesor."}
                </span>
              </div>
            )}

            <ButtonGreen
              onClick={() => handleAgendarTurno()}
              className="bg-orange w-full !max-w-full"
            >
              Agendar Turno
            </ButtonGreen>
          </div>

          <div className="flex justify-center align-middle w-full mt-8">
            <Map />
          </div>
        </SectionContainer>

        <SectionContainer>
          <div className="flex mb-4">
            <TituloSeccion color="text-orange" texto="Histórico de turnos" />
          </div>

          <Carrousel cards={cardsTurnosHistoricos} numeroDeCardsPorSlide={4} />
          <h3 className="text-center mb-24 text-3xl ">
            Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
            saludable!
          </h3>
        </SectionContainer>

        {openModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <img
              alt="icono satisfactorio"
              src="/assets/success-icon.png"
              className="w-28 h-28"
            />
            <h4 className="text-orange mt-8">
              Tu turno se ha agendado correctamente!
            </h4>

            <div className="font-bold text-xl mb-2 text-gray-400 mt-8">
              Detalle del turno
            </div>

            <p className="text-gray-400 text-base mb-1">
              Actividad:{" "}
              <span className="font-bold">
                {
                  actividades.find((a) => a.value == actividad.target.value)
                    .label
                }
              </span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Día:{" "}
              <span className="font-bold">
                {format(date, "EEEE", { locale: es })
                  .replace(/([A-Z])/g, " $1")
                  // uppercase the first character
                  .replace(/^./, function (str) {
                    return str.toUpperCase();
                  })}{" "}
                {getDate(date)} de{" "}
                {format(date, "MMMM", { locale: es })
                  .replace(/([A-Z])/g, " $1")
                  // uppercase the first character
                  .replace(/^./, function (str) {
                    return str.toUpperCase();
                  })}
              </span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Sede:{" "}
              <span className="font-bold">
                {
                  sedesDeNatacion.find((s) => s.value == sede.target.value)
                    .label
                }
              </span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">{getHours(hour)} hs</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Virtual</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Profesor:{" "}
              <span className="font-bold">
                {
                  profesores.find((prof) => prof.value == profesor.target.value)
                    .label
                }
              </span>
            </p>

            <p className="text-gray-400 font-cairo-bold mt-8">
              Te contactaremos un dia antes de tu turno para confirmarlo.
            </p>
          </Modal>
        )}
      </div>
    </BodyContainer>
  );
}
