
import { Card, UnderConstruction } from '@/components'

UnderConstruction
import React from 'react'

const telemetry = () => {
  return (
    <>
    <section id="snacks" className="relative pt-6">
      <div className="relative bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full flex-col items-center justify-center">
        <div className="container mx-auto text-center">
          <h2 className="block antialiased tracking-normal  text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14">
            Telemetria
          </h2>
          <p className="block antialiased  text-xl font-normal leading-relaxed text-black-100 mb-8 opacity-70">
            Ofrecemos una amplia gama de máquinas expendedoras de snacks y
            bebidas para satisfacer las necesidades de cualquier negocio.
          </p>
        </div>
      </div>
      <div className="px-10 pt-8 pb-16 -mt-16 lg:px-30 xl:px-40">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">        
          <Card vertical={true}/>
          <Card vertical={true}/>
          <Card vertical={true}/>
          <Card vertical={true}/>
        </div>
      </div>
    </section>

    
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
          <div className="text-gray-600 font-semibold">ROI AFTER 1 YEAR</div>
          <div className="text-6xl text-green-600 font-bold">172%</div>
        </div>
        <div className="text-center bg-white rounded-full shadow-lg w-48 h-48 flex flex-col justify-center items-center">
          <div className="text-gray-600 font-semibold">LESS DOWNTIME</div>
          <div className="text-6xl text-green-600 font-bold">80%</div>
        </div>
        <div className="text-center bg-white rounded-full shadow-lg w-48 h-48 flex flex-col justify-center items-center">
          <div className="text-gray-600 font-semibold">LESS UNNECESSARY VISITS</div>
          <div className="text-6xl text-green-600 font-bold">65%</div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default telemetry
