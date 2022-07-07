import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/home";
import Alimentacion from "./routes/alimentacion";
import Login from "./routes/login";
import Metricas from "./routes/metricas";
import Nivel from "./routes/nivel";
import Turnos from "./routes/turnos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="turnos" element={<Turnos />} />
        <Route path="metricas" element={<Metricas />} />
        <Route path="alimentacion" element={<Alimentacion />} />
        <Route path="nivel" element={<Nivel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
