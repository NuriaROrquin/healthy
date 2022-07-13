import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-orange p-16 h-full flex justify-center">
      <div className="px-4 2xl:px-24 lg:px-12 w-full">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-start gap-x-16 gap-y-8">
          <div className="w-full lg:w-1/3">
            <h4 className="text-white text-lg font-cairo-bold mb-4">
              Contactanos
            </h4>
            <p className="text-white text-sm font-cairo-regular mb-2 leading-6">
              Calle siempre viva #123, Col. Centro, CDMX, México
            </p>
            <p className="text-white text-sm font-cairo-regular mb-2 leading-6">
              +52 (55) 5555 5555
            </p>
            <p className="text-white text-sm font-cairo-regular mb-2 leading-6">
              healthycare@gmail.com
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h5 className="text-white text-lg font-cairo-bold mb-4">
              Sobre Nosotros
            </h5>
            <p className="text-white text-sm font-cairo-regular mb-2 w-3/4 leading-6">
              Somos una empresa dedicada a mejorar la calidad de vida de las
              personas. Ofrecemos una amplia gama de actividades y a medida que
              nuestros clientes mejoran su salud, nosotros ofrecemos una amplios
              beneficios para ellos.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h5 className="text-white text-lg font-cairo-bold mb-4">
              Seguinos en
            </h5>
            <div className="flex gap-x-4">
              <a href="https://www.facebook.com/">
                <img
                  className="h-6"
                  src="/assets/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  className="h-6"
                  src="/assets/instagram.png"
                  alt="Instagram"
                />
              </a>
              <a href="https://www.twitter.com/">
                <img className="h-6" src="/assets/twitter.png" alt="Twitter" />
              </a>
              <a href="https://www.youtube.com/">
                <img className="h-6" src="/assets/youtube.png" alt="Youtube" />
              </a>
              <img className="h-6" src="/assets/tiktok.png" alt="TikTok" />
              <img className="h-6" src="/assets/linkedin.png" alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
