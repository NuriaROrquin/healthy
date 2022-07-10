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
    value: 1,
    label: "Natación",
  },
  {
    value: 2,
    label: "Gimnasio",
  },
];

export const sedesDeNatacion = [
  {
    value: 1,
    label: "Gimnasio CAEP",
  },
  {
    value: 2,
    label: "Gimnasio Comunicaciones",
  },
  {
    value: 3,
    label: "Gimnasio CGEVP",
  },
  {
    value: 4,
    label: "Gimnasio Megatlon",
  },
  {
    value: 5,
    label: "Gimnasio SportClub",
  },
  {
    value: 6,
    label: "Gimnasio Open Park",
  },
  {
    value: 7,
    label: "Gimnasio UNLaM",
  },
  {
    value: 8,
    label: "Gimnasio Brisas",
  },
];
