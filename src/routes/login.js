import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import Titulo from "../components/Titulo";

export default function Login() {
  const history = useNavigate();

  return (
    <section className="flex w-full h-screen relative justify-center items-center lg:justify-end bg-login bg-cover p-8 bg-center">
      <aside className="absolute lg:sticky container-login flex flex-col items-center justify-center py-6 px-6 lg:py-24 lg:px-12 rounded-xl w-10/12 md:w-9/12 lg:w-2/5 h-5/6 lg:h-full overflow-y-scroll">
        <img
          src="/assets/logo.png"
          alt="Logo Healthy Care"
          className="w-28 md:w-32 2xl:w-40 mx-auto"
        />
        <Titulo texto="Iniciar Sesión" color="text-teal" />
        <form
          onSubmit={() => history("/home")}
          className="flex flex-col mt-4 justify-center items-center"
        >
          <Input id="firstName" label="Email" type="email" required />
          <Input id="lastName" label="Contraseña" type="password" required />

          <SubmitButton label="Ingresar" color="bg-teal mt-8" />
        </form>
      </aside>
    </section>
  );
}
