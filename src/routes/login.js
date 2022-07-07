import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import Titulo from "../components/Titulo";

export default function Login() {
  const history = useNavigate();

  return (
    <section className="flex w-full">
      <div className="w-2/3">
        <img
          src="/assets/banner-login.png"
          alt="Hombre corriendo en la cinta"
          className="w-full h-screen"
        />
      </div>
      <div className="bg-white w-1/3 flex items-center justify-center py-24 flex-col">
        <img
          src="/assets/logo.png"
          alt="Logo Healthy Care"
          className="w-44 mb-4"
        />
        <Titulo texto="Iniciar Sesión" color="text-teal" />
        <form
          onSubmit={() => history("/home")}
          className="flex flex-col mt-24 justify-center items-center"
        >
          <Input id="firstName" label="Email" type="email" required />
          <Input id="lastName" label="Contraseña" type="password" required />

          <SubmitButton label="Ingresar" color="bg-teal mt-12" />
        </form>
      </div>
    </section>
  );
}
