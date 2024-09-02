"use client";

import { AutoScroll, Card, CardUser, LogoAutoScroll } from "@/components";

import React from "react";

const snacks = () => {
  return (
    <>
      <section id="snacks" className="relative pt-8  md:px-24">
        <div className="bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full items-center justify-center">
          <div className="container mx-auto">
            <h2 className="block antialiased tracking-normal text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14 text-center">
              Snacks y Bebidas
            </h2>
            <p className="block antialiased  text-normal md:text-xl font-normal leading-relaxed text-black-100 opacity-70">
              Ofrecemos una variada y completa selección de máquinas
              expendedoras de snacks y bebidas diseñadas para satisfacer las
              necesidades específicas de cualquier tipo de negocio, ya sea una
              pequeña oficina, una gran corporación, un gimnasio, o cualquier
              otro entorno laboral. Nuestras máquinas están equipadas con la
              tecnología más avanzada, garantizando una operación eficiente,
              segura y confiable. Además, contamos con una amplia gama de
              opciones que incluyen snacks saludables y bebidas calientes, así
              como productos personalizados según las preferencias de sus
              empleados o clientes.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center lg:px-30 xl:px-40">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card
              image="/images/snacks-vending-machine.webp"
              title="Snacks"
              text="Ofrecemos una amplia variedad de snacks pensada para satisfacer todos los gustos y necesidades. Desde opciones clásicas como papas fritas y galletas, hasta alternativas más saludables como barras de cereales y frutos secos, garantizando que cada cliente encuentre su snack favorito."
              vertical={true}
            />
            <Card
              image="/images/drinks-vending-machine.webp"
              title="Bebidas"
              text="Contamos con una refrescante selección de bebidas frías en nuestras máquinas expendedoras, ideal para aquellos que buscan un momento de frescura y revitalización durante su día."
              vertical={true}
            />
          </div>
        </div>
      </section>
      <section className="my-24">
        <h2 className="block antialiased tracking-normal text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14 text-center">
          Variedad de productos y marcas
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-10">
          <img
            loading="lazy"
            src="/images/cocacola.jpg"
            alt="CocaCola"
            className="object-scale-down  w-32 h-32 shrink"
          />
          <img
            loading="lazy"
            src="/images/pozuelo.jpg"
            alt="Image 2"
            className="object-scale-down w-32 h-32 shrink"
          />
          <img
            loading="lazy"
            src="/images/pringles.png"
            alt="Image 2"
            className="object-scale-down w-32 h-32 shrink"
          />
        </div>
      </section>
      <section>
        <div
          className="relative w-full h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-snacks.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-white max-w-lg md:px-24">
                <p className="md:text-xl lg:text-2xl font-light">
                  Nos comprometemos a proporcionar un servicio integral que
                  incluye la instalación, mantenimiento y reabastecimiento.
                </p>
                <p className="mt-4 font-bold text-lg lg:text-xl">
                  + Cerca de ti
                </p>
                <p className="text-base lg:text-lg">SosVending</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default snacks;
