import Anchor, { AnchorGreen } from "../components/Anchor";
import Button from "../components/Button";

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
          src="/assets/natacion.webp"
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
          <Button>¡Quiero mi clase de natación!</Button>
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
          <Button>¡Quiero mi clase de yoga!</Button>
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
          <Button>¡Quiero un turno!</Button>
        </div>
      </div>
    ),
  },
];
