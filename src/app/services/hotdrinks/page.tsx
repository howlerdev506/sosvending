import { Card, UnderConstruction } from "@/components";

UnderConstruction;
import React from "react";

const hotdrinks = () => {
  return (
    <>
          <section id="snacks" className="relative pt-8  md:px-24">
        <div className="bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full items-center justify-center">
          <div className="container mx-auto">
            <h2 className="block antialiased tracking-normal text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14 text-center">
            Bebidas Calientes
            </h2>
            <p className="block antialiased  text-normal md:text-xl font-normal leading-relaxed text-black-100 opacity-70">
            Ofrecemos una variada y completa selección de máquinas expendedoras de snacks y bebidas diseñadas para satisfacer las necesidades específicas de cualquier tipo de negocio, ya sea una pequeña oficina, una gran corporación, un gimnasio, o cualquier otro entorno laboral. Nuestras máquinas están equipadas con la tecnología más avanzada, garantizando una operación eficiente, segura y confiable.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center lg:px-30 xl:px-40">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card
              image="/images/delicious-coffee-cup.jpg"
              title="Cafe"
              text="Ofrecemos una extraordinaria variedad de cafés pensada para satisfacer a los paladares más exigentes. Desde el clásico espresso hasta sofisticados lattes y capuchinos."
              vertical={true}
            />
            <Card
              image="/images/delicious-chocolate-cup.jpg"
              title="Chocolate"
              text="Contamos con una exquisita selección de chocolates en nuestras máquinas expendedoras, ideal para aquellos que buscan un momento de indulgencia dulce durante su día."
              vertical={true}
            />
          </div>
        </div>
      </section>

      <section className="relative w-full h-80 bg-cover bg-center md:px-24 mt-16 " style={{ backgroundImage: "url('/images/vending-hot-drinks.png')" }}>
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

export default hotdrinks;
