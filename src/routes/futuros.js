import React from "react";
import slick from "../components/slick";
import BannerContainer from "../components/BannerContainer";
import Card from "../components/card";
import Nav from "../components/Nav";
import SectionContainer from "../components/SectionContainer";
import Slider from "react-slick";

export default function Futuros() {
  return (
    <>
      <Nav />
      <BannerContainer titulo="Turnos" background="bg-turnos bg-center" />
      <h1>Turnos</h1>
      <SectionContainer>
        <h3 className="text-center mb-24 text-3xl">
          Qué estas esperando? Reservá un turno y comenzá ya a sentirte más
          saludable!{" "}
        </h3>
        
        <Slider>
        <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
            
        </Slider>
        

        
      </SectionContainer>
    </>
  );
}
