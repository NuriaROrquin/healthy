import React from "react";

export default function Titulo({ texto, color }) {
  return <h1 className={`${color} text-center py-4`}>{texto}</h1>;
}

export function TituloSeccion({ texto, color }) {
  return <h3 className={`${color} text-center py-4`}>{texto}</h3>;
}
