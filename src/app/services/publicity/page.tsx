import { AutoScroll, Card, CardUser, UnderConstruction } from "@/components";

UnderConstruction;
import React from "react";

const publicity = () => {
  return (
    <>
      <section id="snacks" className="relative pt-8  md:px-24">
        <div className="bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full items-center justify-center">
          <div className="container mx-auto">
            <h2 className="block antialiased tracking-normal text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14 text-center">
              Publicidad
            </h2>
            <p className="block antialiased  text-normal md:text-xl font-normal leading-relaxed text-black-100 opacity-70">

            Nuestras máquinas expendedoras no solo son una fuente de conveniencia para los usuarios, sino que también ofrecen una excelente oportunidad para el uso como espacios publicitarios. Con pantallas digitales integradas y opciones de personalización, estas máquinas pueden exhibir anuncios, promociones y mensajes personalizados, capturando la atención de los consumidores en el momento justo. Esto permite maximizar el alcance de sus campañas publicitarias y promover productos o servicios de manera efectiva, convirtiendo cada máquina en un poderoso canal de comunicación y marketing para su negocio.
              rendimiento.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center lg:justify-start" >
            <img
              src="/images/vending-machine-publicity.webp"
              alt="Laptop showing application"
              className="w-full max-w-md cover"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Espacios publicitarios.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            Ofrecemos espacios publicitarios en nuestras máquinas expendedoras, brindando una excelente oportunidad para maximizar el alcance de su marca. Nuestro servicio incluye asesoramiento personalizado en el diseño de la publicidad y la ubicación estratégica de los anuncios, adaptándonos a las necesidades específicas de cada cliente.
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                Las máquinas expendedoras están ubicadas en áreas de alto tráfico, lo que garantiza que los anuncios lleguen directamente a los consumidores en su rutina diaria.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                Los usuarios interactúan regularmente con las máquinas, lo que aumenta la frecuencia con la que ven los anuncios y mejora el recuerdo de marca.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                Con el uso de tecnología de telemetría, se pueden recopilar datos sobre la interacción con los anuncios
                </span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <section className="relative w-full h-80 bg-cover bg-center md:px-24 mt-4" style={{ backgroundImage: "url('/images/vending-hot-drinks.png')" }}>
        <div className="relative bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full  items-center justify-center">
          <div className="w-1/2"></div>
          <div className="text-black max-w-lg w-1/2 md:px-24">
                <p className="md:text-sm lg:text-2xl font-light">
                  Nos comprometemos a proporcionar un servicio integral que
                  incluye la instalación, mantenimiento y reabastecimiento.
                </p>
                <p className="mt-4 font-bold text-lg lg:text-xl">
                  + Cerca de ti
                </p>
                <p className="text-base lg:text-lg">SosVending</p>
              </div>
        </div>
      </section>

    </>
  );
};

export default publicity;
