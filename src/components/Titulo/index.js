import React from "react";

export default function Titulo({ texto, color }) {
  return <h1 className={`${color}`}>{texto}</h1>;
}
