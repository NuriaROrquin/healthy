import React, { useState } from "react";
import { useEffect } from "react";
import Burguer from "../../icons/burguer";

export default function Nav({ openMenu, setOpenMenu }) {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <>
      {width < 768 ? (
        <>
          <nav
            className={`flex flex-col px-4 justify-center w-full bg-greenAqua h-full fixed z-50 transition-all mb-4 ${
              openMenu ? "translate-x-0" : "-translate-x-full opacity-0 -z-50"
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
                <li className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full">
                  <a href="/home">Home</a>
                </li>
                <li className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full">
                  <a href="/metricas">Metricas</a>
                </li>
                <li className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full">
                  <a href="/turnos">Turnos</a>
                </li>
                <li className="hover:text-2xl bg-opacity-0 p-4 h-1/2 items-center flex justify-center transition rounded-lg text-xl w-full">
                  <a href="/beneficios">Beneficios</a>
                </li>
              </div>
            </ul>
          </nav>
          <nav className="flex px-4 justify-center bg-greenAqua w-full h-24 fixed z-20 mb-4">
            <ul className="flex max-w-7xl w-full justify-between h-24 text-white font-cairo-semibold">
              <button type="button" onClick={() => setOpenMenu(!openMenu)}>
                <Burguer />
              </button>
              <li className="flex items-center h-full">
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
      ) : (
        <nav className="flex px-4 justify-center bg-greenAqua w-full h-24 fixed z-50 mb-4">
          <ul className="flex max-w-7xl w-full justify-around items-center text-white font-cairo-semibold h-full">
            <div className="flex justify-between w-3/4 h-full items-center">
              <li className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg">
                <a href="/home">Home</a>
              </li>
              <li className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg">
                <a href="/metricas">Metricas</a>
              </li>
              <li className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg">
                <a href="/turnos">Turnos</a>
              </li>
              <li className="hover:scale-125 w-max p-4 h-1/2 items-center flex justify-center transition rounded-lg">
                <a href="/beneficios">Beneficios</a>
              </li>
            </div>

            <li className="flex w-full justify-end">
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
      )}
    </>
  );
}
