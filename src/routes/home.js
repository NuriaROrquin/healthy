import React from "react";
import BannerContainer from "../components/BannerContainer";
import Carrousel from "../components/Carousel";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import Titulo, { TituloSeccion } from "../components/Titulo";

export default function Home() {
  const cards = [
    {
      id: 1,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6 min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/crossfit.webp"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">
                Crossfit
              </div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold text-teal">HOY</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">19:45</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Virtual</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesor: <span className="font-bold">Juan Pablo</span>
              </p>
            </div>
            <button className=" px-6 py-2 mt-4 self-end bg-teal rounded-md text-white">
              Ir a la clase
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6 min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/natacion.webp"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">
                Natación
              </div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Mañana</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">12:15</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Presencial</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesora: <span className="font-bold">Alexis Tejero</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/crossfit.webp"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">
                Crossfit
              </div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Jueves 14/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">9:30</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Presencial</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesor: <span className="font-bold">Luna Sanmartin</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/funcional.png"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">
                Funcional
              </div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Sábado 16/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">15:00</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Virtual</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesor: <span className="font-bold">Andres Angulo</span>
              </p>
            </div>
            <button
              disabled={true}
              className="px-6 py-2 mt-4 self-end bg-teal rounded-md text-white disabled:bg-gray-300"
            >
              Ir a la clase
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/zumba.jpg"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">Zumba</div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Lunes 18/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">19:30</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Virtual</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesora: <span className="font-bold">Anabel Mendoza</span>
              </p>
            </div>
            <button
              disabled={true}
              className="px-6 py-2 mt-4 self-end bg-teal rounded-md text-white disabled:bg-gray-300"
            >
              Ir a la clase
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/crossfit.webp"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">
                Crossfit
              </div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Miércoles 20/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">14:15</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Presencial</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesor: <span className="font-bold">Fernando Sanmartin</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/yoga.jpg"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">Yoga</div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Jueves 21/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">20:45</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Virtual</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesora: <span className="font-bold">Jana Jerez</span>
              </p>
            </div>
            <button
              disabled={true}
              className="px-6 py-2 mt-4 self-end bg-teal rounded-md text-white disabled:bg-gray-300"
            >
              Ir a la clase
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/crossfit.webp"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">
                Crossfit
              </div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Jueves 21/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">19:45</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Presencial</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesora:{" "}
                <span className="font-bold">Maria Angeles Salvador</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/yoga.jpg"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">Yoga</div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Viernes 22/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">19:45</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Virtual</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesora: <span className="font-bold">Margarita Juarez</span>
              </p>
            </div>
            <button
              disabled={true}
              className="px-6 py-2 mt-4 self-end bg-teal rounded-md text-white disabled:bg-gray-300"
            >
              Ir a la clase
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      card: (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128">
          <img
            className="w-full h-40 object-cover"
            src="/assets/funcional.png"
            alt="Crossfit"
          />
          <div className="px-6 py-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl mb-2 text-gray-500">
                Funcional
              </div>
              <p className="text-gray-400 text-base mb-1">
                Día: <span className="font-bold">Viernes 22/7</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Horario: <span className="font-bold">19:45</span>
              </p>

              <p className="text-gray-400 text-base mb-1">
                Modalidad: <span className="font-bold">Virtual</span>
              </p>
              <p className="text-gray-400 text-base mb-1">
                Profesor: <span className="font-bold">Nestor Campo</span>
              </p>
            </div>
            <button
              disabled={true}
              className="px-6 py-2 mt-4 self-end bg-teal rounded-md text-white disabled:bg-gray-300"
            >
              Ir a la clase
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Nav />
      <BannerContainer
        titulo="Tenemos lo mejor para vos"
        background="bg-home bg-right"
      />
      <SectionContainer>
        <div className="flex">
          <TituloSeccion color="text-teal" texto="Tus proximos turnos" />
        </div>
        <Carrousel cards={cards} numeroDeCardsPorSlide={4} />
      </SectionContainer>
    </>
  );
}
