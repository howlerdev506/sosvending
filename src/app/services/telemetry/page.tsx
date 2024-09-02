import { Card, UnderConstruction } from "@/components";

UnderConstruction;
import React from "react";

const telemetry = () => {
  return (
    <>
      <section id="snacks" className="relative pt-8  md:px-24">
        <div className="bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full items-center justify-center">
          <div className="container mx-auto">
            <h2 className="block antialiased tracking-normal text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14 text-center">
              Telemetria
            </h2>
            <p className="block antialiased  text-normal md:text-xl font-normal leading-relaxed text-black-100 opacity-70">
              Nuestras máquinas expendedoras no solo ofrecen una amplia gama de
              productos, sino que también están equipadas con un avanzado
              sistema de telemetría para facilitar la toma de decisiones de
              negocio. Este servicio permite monitorear en tiempo real el
              rendimiento de cada máquina, las ventas y el inventario,
              proporcionando datos precisos y actualizados. De esta manera,
              puede optimizar la reposición de productos, identificar tendencias
              de consumo y mejorar la eficiencia operativa, asegurando que sus
              máquinas estén siempre bien surtidas y funcionando al máximo
              rendimiento.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="relative w-full overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#dce9f5"
              fillOpacity="1"
              d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,186.7C672,181,768,171,864,181.3C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          <div className="relative flex justify-around items-center h-64">
            <div className="text-center bg-white rounded-full shadow-lg w-48 h-48 flex flex-col justify-center items-center">
              <div className="text-gray-600 font-semibold">
                control de inventario
              </div>
              <div className="text-2xl text-green-600 font-bold">Optimizado</div>
            </div>
            <div className="text-center bg-white rounded-full shadow-lg w-48 h-48 flex flex-col justify-center items-center">
              <div className="text-gray-600 font-semibold">Menjo de productos</div>
              <div className="text-2xl text-green-600 font-bold">Preferencial </div>
            </div>
            <div className="text-center bg-white rounded-full shadow-lg w-48 h-48 flex flex-col justify-center items-center">
              <div className="text-gray-600 font-semibold">
                Timepo de respuesta
              </div>
              <div className="text-2xl text-green-600 font-bold">inmediato</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-80 bg-cover bg-center md:px-24 mt-2" style={{ backgroundImage: "url('/images/vending-hot-drinks.png')" }}>
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

export default telemetry;
