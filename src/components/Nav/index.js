import React from "react";

export default function Nav() {
  return (
    <nav className="flex py-4 px-4 justify-end bg-teal w-full fixed">
      <ul className="flex w-3/4 justify-around text-white font-cairo-semibold">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/metricas">Metricas</a>
        </li>
        <li>
          <a href="/turnos">Turnos</a>
        </li>
        <li>
          <a href="/alimentacion">Alimentacion</a>
        </li>
      </ul>
    </nav>
  );
}