import Anchor, { AnchorGreen } from "../components/Anchor";
import Button, { ButtonGreen } from "../components/Button";
import Card from "../components/Card";

export const cardsTurnos = [
  {
    id: 1,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6 min-h-128 justify-start">
        <img
          className="w-full h-40 object-cover"
          src="/assets/crossfit.webp"
          alt="Crossfit"
        />
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Crossfit</div>
            <p className="text-gray-400 text-base mb-1">
              Día: <span className="font-bold text-orange">HOY</span>
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
          <AnchorGreen href="https://meet.google.com" newTab={true}>
            Ir a la clase
          </AnchorGreen>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6 min-h-128 justify-start">
        <img
          className="w-full h-40 object-cover"
          src="/assets/natacion.jpeg"
          alt="Crossfit"
        />
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Natación</div>
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
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
        <img
          className="w-full h-40 object-cover"
          src="/assets/crossfit.webp"
          alt="Crossfit"
        />
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Crossfit</div>
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
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
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
          <AnchorGreen disabled={true}>Ir a la clase</AnchorGreen>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
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
          <AnchorGreen disabled={true}>Ir a la clase</AnchorGreen>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
        <img
          className="w-full h-40 object-cover"
          src="/assets/crossfit.webp"
          alt="Crossfit"
        />
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Crossfit</div>
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
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
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
          <AnchorGreen disabled={true}>Ir a la clase</AnchorGreen>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
        <img
          className="w-full h-40 object-cover"
          src="/assets/crossfit.webp"
          alt="Crossfit"
        />
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Crossfit</div>
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
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
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
          <AnchorGreen disabled={true}>Ir a la clase</AnchorGreen>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-6  min-h-128 justify-start">
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
          <AnchorGreen disabled={true}>Ir a la clase</AnchorGreen>
        </div>
      </div>
    ),
  },
];

export const cardsActividadesCarousel = [
  {
    id: 1,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/natacion.jpeg"
          alt="Natación"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          Natación
        </h4>
      </div>
    ),
  },
  {
    id: 2,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/crossfit.webp"
          alt="Crossfit"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          Crossfit
        </h4>
      </div>
    ),
  },
  {
    id: 3,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/yoga.jpg"
          alt="Yoga"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          Yoga
        </h4>
      </div>
    ),
  },
  {
    id: 4,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/running.jpg"
          alt="Running"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          Running
        </h4>
      </div>
    ),
  },
  {
    id: 5,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/spinning.jpg"
          alt="Spinning"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          Spinning
        </h4>
      </div>
    ),
  },
  {
    id: 6,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/aquagym.webp"
          alt="AquaGym"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          AquaGym
        </h4>
      </div>
    ),
  },
  {
    id: 7,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/zumba.jpg"
          alt="Zumba"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          Zumba
        </h4>
      </div>
    ),
  },
  {
    id: 8,
    card: (
      <div className="flex justify-center items-center relative group">
        <img
          className="w-full h-96 object-cover"
          src="/assets/funcional.png"
          alt="Funcional"
        />
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <h4 className="absolute group-hover:scale-150 text-5xl transition-all">
          Funcional
        </h4>
      </div>
    ),
  },
];

export const cardsNoticias = [
  {
    id: 1,
    card: (
      <div className="w-full rounded-lg overflow-hidden shadow-md flex flex-col my-6 h-96 bg-natacion bg-cover bg-center">
        <div className="xl:w-1/3 p-8 flex flex-col h-full justify-around">
          <div className="gap-6 flex flex-col">
            <h3 className="text-center lg:text-start">
              Incorporamos más piletas de natación!
            </h3>
            <h4 className="text-center lg:text-start">
              Que esperas para sumarte?
            </h4>
          </div>
          <ButtonGreen>¡Quiero mi clase de natación!</ButtonGreen>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    card: (
      <div className="w-full rounded-lg overflow-hidden shadow-md flex flex-col my-6 h-96 bg-yoga bg-cover bg-top">
        <div className="xl:w-1/3 p-8 flex flex-col h-full justify-around">
          <div className="gap-6 flex flex-col">
            <h3 className="text-center lg:text-start">
              Las clases de Yoga fueron las mas elegidas
            </h3>
            <h4 className="text-center lg:text-start">
              Yoga fue la actividad favorita del mes de Junio.
            </h4>
          </div>
          <ButtonGreen>¡Quiero mi clase de yoga!</ButtonGreen>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    card: (
      <div className="w-full rounded-lg overflow-hidden shadow-md flex flex-col my-6 h-96 bg-gym bg-cover bg-center">
        <div className="xl:w-1/3 p-8 flex flex-col h-full justify-around">
          <div className="gap-6 flex flex-col">
            <h3 className="text-center lg:text-start">
              Sumamos más gimnasios!
            </h3>
            <h4 className="text-center lg:text-start">
              No le des mas vueltas! Empezá ahora.
            </h4>
          </div>
          <ButtonGreen>¡Quiero un turno!</ButtonGreen>
        </div>
      </div>
    ),
  },
];

export const cardsTurnosHistoricos = [
  {
    id: 1,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Sabado</div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">1-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Funcional</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">15:00</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Virtual</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Andres Angulo</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Estado: <span className="font-bold">Presente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Lunes</div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">3-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Zumba</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">19:45</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Virtual</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Anabel Mendoza</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Estado: <span className="font-bold">Presente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Martes</div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">4-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Crossfit</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">09:30</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Virtual</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Luna Sanmartin</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Estado: <span className="font-bold">Presente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">
              Miercoles
            </div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">5-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Natación</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">19:45</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Presencial</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Alexis Tejero</span>
            </p>
            <p className="text-red-400 text-base mb-1">
              Estado: <span className="font-bold">Ausente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Jueves</div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">6-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Crossfit</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">09:30</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Presencial</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Juan Pablo</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Estado: <span className="font-bold">Presente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1  min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Viernes</div>
            <p className="text-gray-400 text-base mb-1">
              Día: <span className="font-bold">7-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Yoga</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">20:45</span>
            </p>

            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Virtual</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Nestor Campo</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Estado: <span className="font-bold">Presente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Sabado</div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">8-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Funcional</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">15:45</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Presencial</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Andres Angulo</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Estado: <span className="font-bold">Presente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Lunes</div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">10-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Zumba</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">19:45</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Virtual</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Juan Pablo</span>
            </p>
            <p className="text-red-400 text-base mb-1">
              Estado: <span className="font-bold">Ausente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    card: (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-md flex flex-col my-1 min-h-100 justify-start">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-500">Martes</div>
            <p className="text-gray-400 text-base mb-1">
              <span className="font-bold text-orange">11-Julio</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Actividad: <span className="font-bold">Crossfit</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Horario: <span className="font-bold">11:45</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Modalidad: <span className="font-bold">Presencial</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Prof: <span className="font-bold">Luna Sanmartin</span>
            </p>
            <p className="text-gray-400 text-base mb-1">
              Estado: <span className="font-bold">Presente</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export const cantidadDeClasesTomadasPorMes = [
  {
    type: "line",
    name: "Clases tomadas",
    data: [
      [1649424600000, 0],
      [1649683800000, 1],
      [1649770200000, 2],
      [1649856600000, 0],
      [1649943000000, 3],
      [1650288600000, 0],
      [1650375000000, 2],
      [1650461400000, 1],
      [1650547800000, 1],
      [1650634200000, 0],
      [1650893400000, 1],
      [1650979800000, 0],
      [1651066200000, 2],
      [1651152600000, 1],
      [1651239000000, 2],
      [1651498200000, 1],
      [1651584600000, 3],
      [1651671000000, 1],
      [1651757400000, 1],
      [1651843800000, 2],
      [1652103000000, 0],
      [1652189400000, 1],
      [1652275800000, 2],
      [1652362200000, 1],
      [1652448600000, 1],
      [1652707800000, 1],
      [1652794200000, 1],
      [1652880600000, 0],
      [1652967000000, 1],
      [1653053400000, 0],
      [1653312600000, 1],
      [1653399000000, 2],
      [1653485400000, 1],
      [1653571800000, 1],
      [1653658200000, 2],
      [1654003800000, 1],
      [1654090200000, 1],
      [1654176600000, 2],
      [1654263000000, 3],
      [1654522200000, 1],
      [1654608600000, 2],
      [1654695000000, 1],
      [1654781400000, 1],
      [1654867800000, 1],
      [1655127000000, 1],
      [1655213400000, 2],
      [1655299800000, 2],
      [1655386200000, 2],
      [1655472600000, 1],
      [1655818200000, 0],
      [1655904600000, 0],
      [1655991000000, 0],
      [1656077400000, 0],
      [1656336600000, 0],
      [1656423000000, 0],
      [1656509400000, 1],
      [1656595800000, 2],
      [1656682200000, 0],
      [1657027800000, 3],
      [1657114200000, 1],
      [1657200600000, 2],
      [1657287000000, 0],
    ],
  },
];

export const cantidadDePuntosAdquiridosPorMes = [
  {
    type: "line",
    name: "Clases tomadas",
    data: [
      [1649424600000, 0],
      [1649683800000, 100],
      [1649770200000, 200],
      [1649856600000, 0],
      [1649943000000, 300],
      [1650288600000, 0],
      [1650375000000, 200],
      [1650461400000, 100],
      [1650547800000, 100],
      [1650634200000, 0],
      [1650893400000, 100],
      [1650979800000, 0],
      [1651066200000, 200],
      [1651152600000, 100],
      [1651239000000, 200],
      [1651498200000, 100],
      [1651584600000, 300],
      [1651671000000, 100],
      [1651757400000, 100],
      [1651843800000, 200],
      [1652103000000, 0],
      [1652189400000, 100],
      [1652275800000, 200],
      [1652362200000, 100],
      [1652448600000, 100],
      [1652707800000, 100],
      [1652794200000, 100],
      [1652880600000, 0],
      [1652967000000, 100],
      [1653053400000, 0],
      [1653312600000, 100],
      [1653399000000, 200],
      [1653485400000, 100],
      [1653571800000, 100],
      [1653658200000, 200],
      [1654003800000, 100],
      [1654090200000, 100],
      [1654176600000, 200],
      [1654263000000, 300],
      [1654522200000, 100],
      [1654608600000, 200],
      [1654695000000, 100],
      [1654781400000, 100],
      [1654867800000, 100],
      [1655127000000, 100],
      [1655213400000, 200],
      [1655299800000, 200],
      [1655386200000, 200],
      [1655472600000, 100],
      [1655818200000, 0],
      [1655904600000, 0],
      [1655991000000, 0],
      [1656077400000, 0],
      [1656336600000, 0],
      [1656423000000, 0],
      [1656509400000, 100],
      [1656595800000, 200],
      [1656682200000, 0],
      [1657027800000, 300],
      [1657114200000, 100],
      [1657200600000, 200],
      [1657287000000, 0],
    ],
  },
];

export const profesores = [
  {
    value: 1,
    label: "Juan Pérez",
  },
  {
    value: 2,
    label: "Romeo Santos",
  },
  {
    value: 3,
    label: "Carolina Aguilar",
  },
];

export const actividades = [
  {
    value: "Natación",
    label: "Natación",
  },
  {
    value: "Gimnasio",
    label: "Gimnasio",
  },
  {
    value: "AquaGym",
    label: "AquaGym",
  },
  {
    value: "Spinning",
    label: "Spinning",
  },
  {
    value: "CrossFit",
    label: "CrossFit",
  },
  {
    value: "Funcional",
    label: "Funcional",
  },
  {
    value: "Zumba",
    label: "Zumba",
  },
  {
    value: "Yoga",
    label: "Yoga",
  },
];

export const sedesDeNatacion = [
  {
    value: "Gimnasio CAEP",
    label: "Gimnasio CAEP",
  },
  {
    value: "Gimnasio Comunicaciones",
    label: "Gimnasio Comunicaciones",
  },
  {
    value: "Gimnasio CGEVP",
    label: "Gimnasio CGEVP",
  },
  {
    value: "Gimnasio Megatlon",
    label: "Gimnasio Megatlon",
  },
  {
    value: "Gimnasio SportClub",
    label: "Gimnasio SportClub",
  },
  {
    value: "Gimnasio Open Park",
    label: "Gimnasio Open Park",
  },
  {
    value: "Gimnasio UNLaM",
    label: "Gimnasio UNLaM",
  },
  {
    value: "Gimnasio Brisas",
    label: "Gimnasio Brisas",
  },
];

export const cardsDeActividades = [
  {
    id: 1,
    image: "/assets/spinning.jpg",
    description:
      "Clases grupales con tutor. Conocé todas las sedes disponibles y elegí la que más te guste.",
    title: "SPINNING",
    href: "/turnos",
  },
  {
    id: 2,
    image: "/assets/running.jpg",
    description:
      "Salí en grupo a recorrer las distintas calles de Buenos Aires.",
    title: "RUNNING",
    href: "/turnos",
  },
  {
    id: 3,
    image: "/assets/crossfit.webp",
    description:
      "Si queres fortalecer tu figura de manera más rápida, no dudes en inscribirte a estas clases.",
    title: "CROSSFIT",
    href: "/turnos",
  },
  {
    id: 4,
    image: "/assets/funcional.png",
    description: "Hacé ejercicio sólo con tu peso! Clases grupales con tutor.",
    title: "FUNCIONAL",
    href: "/turnos",
  },
  {
    id: 5,
    image: "/assets/natacion.jpeg",
    description:
      "Clases para principiantes y avanzados. Pileta libre y entrenamiento en equipo!",
    title: "NATACION",
    href: "/turnos",
  },
  {
    id: 6,
    image: "/assets/aquagym.webp",
    description:
      "Una actividad distinta dentro del agua para todas las edades.",
    title: "AQUAGYM",
    href: "/turnos",
  },
  {
    id: 7,
    image: "/assets/yoga.jpg",
    description:
      "Conectá tu cuerpo, mente y espiritu para lograr el equilibrio y bienestar.",
    title: "YOGA",
    href: "/turnos",
  },
  {
    id: 8,
    image: "/assets/zumba.jpg",
    description:
      "Vení a bailar y divertirte en grupo con los mejores profesores del país.",
    title: "ZUMBA",
    href: "/turnos",
  },
];

export const cardsDesafios = [
  {
    id: 1,
    card: (
      <Card
        image="/assets/lifting.webp"
        description="¡Felicitaciones! Concluiste 15 turnos de mancuernas y maquinas este mes."
        title="Desafio: Pesas Principiante"
        noscale
      />
    ),
  },
  {
    id: 2,
    card: (
      <Card
        image="/assets/running-cinta.jpg"
        description="¡Felicitaciones! Concluiste 12 turnos de running en cinta este mes."
        title="Desafio: Running Principiante"
        noscale
      />
    ),
  },
  {
    id: 3,
    card: (
      <Card
        image="/assets/natacion.jpeg"
        description="¡Felicitaciones! Concretaste 15 clases de natacion en este mes."
        title="Desafio: Natacion Intermedio"
        noscale
      />
    ),
  },
];

export const cardsDeBeneficios = [
  {
    id: 1,
    image: "/assets/3m.png",
    description:
      "Accedes a 10% de descuento en todos los 3er Milenio del pais.",
    title: "Con 1000 puntos",
    href: "https://www.3m.com.ar/3M/es_AR/inicio/",
    newblank: true,
  },
  {
    id: 2,
    image: "/assets/ds.png",
    description: "Accedes a 20% de descuento en Diamond System.",
    title: "Con 1500 puntos",
    href: "https://www.diamondcomputacion.com.ar",
    newblank: true,
  },
  {
    id: 3,
    image: "/assets/einstein.jpg",
    description: "Accedes a 30% de descuento en Libreria Einstein.",
    title: "Con 2000 puntos",
    href: "https://einsteinlibreria.com.ar/",
    newblank: true,
  },
  {
    id: 4,
    image: "/assets/carrefour.png",
    description: "Accedes a 30% de descuento en Supermercados CARREFOUR.",
    title: "Con 3000 puntos",
    href: "https://www.carrefour.com.ar/",
    newblank: true,
  },
  {
    id: 5,
    image: "/assets/coto.png",
    description: "Accedes a 30% de descuento en Supermercados COTO.",
    title: "Con 3000 puntos",
    href: "https://www.coto.com.ar/",
    newblank: true,
  },
  {
    id: 6,
    image: "/assets/jumbo.jpg",
    description: "Accedes a 30% de descuento en Jumbo.",
    title: "Con 3000 puntos",
    href: "https://www.jumbo.com.ar/",
    newblank: true,
  },
  {
    id: 7,
    image: "/assets/multiplex.png",
    description: "Accede a entradas 2x1 en todos los cines Multiplex.",
    title: "Con 3000 puntos",
    href: "https://www.multiplex.com.ar/",
    newblank: true,
  },
  {
    id: 8,
    image: "/assets/showcase.png",
    description: "Accede a entradas 2x1 en todos los cines Showcase.",
    title: "Con 3000 puntos",
    href: "https://www.cinemarkhoyts.com.ar/",
    newblank: true,
  },
  {
    id: 9,
    image: "/assets/cinemark.jpg",
    description: "Accede a entradas 2x1 en todos los cines Cinemark.",
    title: "Con 3000 puntos",
    href: "https://www.cinemarkhoyts.com.ar/",
    newblank: true,
  },
];
