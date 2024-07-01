import React from 'react'
import {ServiceCard} from "@/components"
import { ServiceSection} from "@/constants/index"

const Services = () => {
  return (
<section id="Servicios" className="relative pt-6">
  <div className="relative bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full flex-col items-center justify-center !bg-primary-blue-100">
    <div className="container mx-auto text-center">
      <h2 className="block antialiased tracking-normal  text-4xl font-semibold leading-[1.3] text-black-100 mb-4">{ServiceSection.title}</h2>
        <p className="block antialiased  text-xl font-normal leading-relaxed text-black-100 mb-8 opacity-70">
            {ServiceSection.legend}
        </p>
    </div>
  </div>
  <div className="px-10 pt-8 pb-16 -mt-16 lg:px-30 xl:px-40">
    <div className={"grid gap-8 md:grid-cols-2 lg:grid-cols-4"}>
    {ServiceSection.services.map((service) =>(
        <ServiceCard 
            key={service.title} 
            title={service.title} 
            description={service.description} 
            image={service.image}
            characteristics={service.characteristic}/>
    ))}
    </div>
  </div>
</section>
  )
}

export default Services
