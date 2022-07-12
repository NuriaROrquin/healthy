import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/home";
import Login from "./routes/login";
import Metricas from "./routes/metricas";
import Turnos from "./routes/turnos";
import Beneficios from "./routes/beneficios";
import CommercialHome from "./routes/commercial-home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommercialHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="turnos" element={<Turnos />} />
        <Route path="metricas" element={<Metricas />} />
        <Route path="beneficios" element={<Beneficios />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
