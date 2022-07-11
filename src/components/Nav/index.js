import React from "react";

export default function Nav() {
  return (
    <nav className="flex py-4 px-4 justify-center bg-greenAqua w-full fixed z-50 mb-4">
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
      </ul>
    </nav>
  );
}
