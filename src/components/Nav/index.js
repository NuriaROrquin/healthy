import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Burguer from "../../icons/burguer";
import User from "../../icons/user";
import { ButtonGreen } from "../Button";

export default function Nav({ openMenu, setOpenMenu }) {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  let location = useLocation();

  return (
    <>
      {width < 768 ? (
        <>
          {location.pathname === "/" ? (
            <>
              <nav
                className={`flex flex-col px-4 justify-center w-full bg-greenAqua h-full fixed z-50 transition-all mb-4 ${
                  openMenu
                    ? "translate-x-0"
                    : "-translate-x-full opacity-0 -z-50"
                }`}
              >
                <button
                  onClick={() => setOpenMenu(false)}
                  className="top-8 right-8 text-white font-cairo-bold p-4 flex self-end"
                >
                  X
                </button>
                <ul
                  role="list"
                  className="flex w-full h-full justify-around items-center text-white font-cairo-semibold top-12"
                >
                  <div className="flex flex-col justify-between w-full h-full items-center py-6">
                    <li
                      role="listitem"
                      className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                    >
                      <a href="/">Nosotros</a>
                    </li>
                    <li
                      role="listitem"
                      className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                    >
                      <a href="/">Actividades</a>
                    </li>

                    <div className="flex flex-col justify-center items-center gap-y-4">
                      <li role="listitem" className="flex items-center h-full">
                        <a
                          href="/login"
                          alt="Acceder al usuario"
                          aria-label="Acceder al usuario"
                        >
                          <User />
                        </a>
                      </li>
                      <li role="listitem" className="flex items-center h-full">
                        <ButtonGreen>Registrarse</ButtonGreen>
                      </li>
                    </div>
                  </div>
                </ul>
              </nav>
              <nav className="flex px-4 justify-center bg-greenAqua w-full h-24 fixed z-20 mb-4">
                <ul
                  role="list"
                  className="flex max-w-7xl justify-between h-24 text-white font-cairo-semibold w-full relative items-center"
                >
                  <button type="button" onClick={() => setOpenMenu(!openMenu)}>
                    <Burguer />
                  </button>
                  <div className="absolute left-1/2">
                    <a href="/">
                      <img
                        src="/assets/logo-blanco.png"
                        alt="logo"
                        className="w-12 h-12 object-cover"
                      />
                    </a>
                  </div>
                </ul>
              </nav>
            </>
          ) : (
            <>
              <nav
                className={`flex flex-col px-4 justify-center w-full bg-greenAqua h-full fixed z-50 transition-all mb-4 ${
                  openMenu
                    ? "translate-x-0"
                    : "-translate-x-full opacity-0 -z-50"
                }`}
              >
                <button
                  onClick={() => setOpenMenu(false)}
                  className="top-8 right-8 text-white font-cairo-bold p-4 flex self-end"
                >
                  X
                </button>
                <ul className="flex w-full h-full justify-around items-center text-white font-cairo-semibold top-12">
                  <div className="flex flex-col justify-between w-full h-full items-center">
                    <li
                      role="listitem"
                      className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full"
                    >
                      <a href="/home">Home</a>
                    </li>
                    <li
                      role="listitem"
                      className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full"
                    >
                      <a href="/metricas">Metricas</a>
                    </li>
                    <li
                      role="listitem"
                      className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full"
                    >
                      <a href="/turnos">Turnos</a>
                    </li>
                    <li
                      role="listitem"
                      className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full"
                    >
                      <a href="/beneficios">Beneficios</a>
                    </li>
                  </div>
                </ul>
              </nav>
              <nav className="flex px-4 justify-center bg-greenAqua w-full h-24 fixed z-20 mb-4">
                <ul
                  role="list"
                  className="flex max-w-7xl w-full justify-between h-24 text-white font-cairo-semibold"
                >
                  <button type="button" onClick={() => setOpenMenu(!openMenu)}>
                    <Burguer />
                  </button>
                  <li role="listitem" className="flex items-center h-full">
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
            </>
          )}
        </>
      ) : (
        <nav className="flex px-4 justify-center bg-greenAqua w-full h-24 fixed z-50 mb-4">
          {location.pathname === "/" ? (
            <ul
              role="list"
              className="flex max-w-7xl w-full justify-around items-center text-white font-cairo-semibold h-full"
            >
              <div className="flex justify-start w-1/4 h-full items-center gap-x-12 pr-12">
                <li
                  role="listitem"
                  className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                >
                  <a href="/">
                    <img
                      src="/assets/logo-blanco.png"
                      alt="logo"
                      className="w-12 h-12 object-cover"
                    />
                  </a>
                </li>
              </div>

              <div className="flex justify-end w-2/4 h-full items-center gap-x-12 pr-12">
                <li
                  role="listitem"
                  className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                >
                  <a href="/">Nosotros</a>
                </li>
                <li
                  role="listitem"
                  className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                >
                  <a href="/">Actividades</a>
                </li>
              </div>

              <div className="flex gap-x-8 items-center justify-center">
                <li role="listitem" className="flex w-full">
                  <a
                    href="/login"
                    alt="Acceder al usuario"
                    aria-label="Acceder al usuario"
                  >
                    <User />
                  </a>
                </li>
                <li role="listitem" className="flex w-full">
                  <ButtonGreen>Registrarse</ButtonGreen>
                </li>
              </div>
            </ul>
          ) : (
            <ul
              role="list"
              className="flex max-w-7xl w-full justify-around items-center text-white font-cairo-semibold h-full"
            >
              <div className="flex justify-between w-3/4 h-full items-center">
                <li
                  role="listitem"
                  className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                >
                  <a href="/home">Home</a>
                </li>
                <li
                  role="listitem"
                  className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                >
                  <a href="/metricas">Metricas</a>
                </li>
                <li
                  role="listitem"
                  className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                >
                  <a href="/turnos">Turnos</a>
                </li>
                <li
                  role="listitem"
                  className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg"
                >
                  <a href="/beneficios">Beneficios</a>
                </li>
              </div>

              <li role="listitem" className="flex w-full justify-end">
                <a href="/user">
                  <img
                    src="/assets/user.jpeg"
                    alt="user"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </a>
              </li>
            </ul>
          )}
        </nav>
      )}
    </>
  );
}
