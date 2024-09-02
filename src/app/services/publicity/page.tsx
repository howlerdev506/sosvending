import { AutoScroll, Card, CardUser, UnderConstruction } from "@/components";

UnderConstruction;
import React from "react";

const publicity = () => {
  return (
    <>
      <section id="snacks" className="relative pt-6">
        <div className="relative bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full flex-col items-center justify-center">
          <div className="container mx-auto text-center">
            <h2 className="block antialiased tracking-normal  text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14">
              Publicidad
            </h2>
            <p className="block antialiased  text-xl font-normal leading-relaxed text-black-100 mb-8 opacity-70">
              Ofrecemos una amplia gama de máquinas expendedoras de snacks y
              bebidas para satisfacer las necesidades de cualquier negocio.
            </p>
          </div>
        </div>
        <div className="px-10 pt-8 pb-16 -mt-16 lg:px-30 xl:px-40">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card vertical={true} />
            <Card vertical={true} />
            <Card vertical={true} />
            <Card vertical={true} />
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="/path/to/your/laptop-image.png"
              alt="Laptop showing application"
              className="w-full max-w-md"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Secure. Trusted. Available.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Secure your team’s communication with Wickr RAM’s multilayered,
              256-bit Advanced Encryption Standard (AES) E2EE. Customers can
              configure data retention in the cloud, or on premises. Additional
              Wickr RAM benefits include:
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                  Available on AWS GovCloud (US) and Cloud One (via Carahsoft)
                  and can support workloads up to Impact Level 5 (IL-5)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                  Adversary-resilient communications as encryption keys are
                  stored on local endpoints
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                  Denied, degraded, intermittent, and limited (DDIL) bandwidth
                  capabilities—including disconnected, and out-of-band
                  communications that can federate to the cloud when
                  connectivity is restored
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                  Built using zero trust network design principles with a FIPS
                  certified encryption library
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                  Powerful integrations with open-source Java Node bots for
                  interoperability
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔️</span>
                <span>
                  Multi-factor public key infrastructure (PKI) authentication
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 translate-x-6">
        <AutoScroll>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
            alt="Image 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
            alt="Image 2"
          />
        </AutoScroll>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Meet the <span className="text-purple-500">Innovators</span> Fueling
            Nebula's Mission
          </h2>
        </div>

        <div className="flex justify-center items-center mt-10 flex-shrink">
          <AutoScroll>
            <CardUser
              name="Pablo Martinez"
              title="Product Manager"
              imageUrl="/images/vending-m.png"
            />
            <CardUser
              name="Brigite Carderon"
              title="Product Manager"
              imageUrl="/images/vending-m.png"
            />
            <CardUser
              name="Jose Pedroza"
              title="Product Manager"
              imageUrl="/images/vending-m.png"
            />
          </AutoScroll>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 translate-x-6">
        <AutoScroll>
          <CardUser
            name="Pablo Martinez"
            title="Product Manager"
            imageUrl="/images/vending-m.png"
          />
          <CardUser
            name="Brigite Carderon"
            title="Product Manager"
            imageUrl="/images/vending-m.png"
          />
          <CardUser
            name="Jose Pedroza"
            title="Product Manager"
            imageUrl="/images/vending-m.png"
          />
        </AutoScroll>
      </div>
    </>
  );
};

export default publicity;
