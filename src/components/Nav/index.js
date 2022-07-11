import React from "react";

export default function Nav() {
  return (
    <nav className="flex py-4 px-4 justify-center bg-greenAqua w-full fixed z-50 mb-4">
      <ul className="flex w-full justify-around items-center text-white font-cairo-semibold">
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
          <a href="/user">
            <img
              src="/assets/user.jpeg"
              alt="user"
              className="w-12 h-12 object-cover rounded-full"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
