import { Card, UnderConstruction } from '@/components'
import React from 'react'

export default function About() {
    return (
      <section id="snacks" className="relative pt-6">
      <div className="relative bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full flex-col items-center justify-center">
        <div className="container mx-auto text-center">
          <h2 className="block antialiased tracking-normal  text-4xl font-semibold leading-[1.3] text-black-100 mb-4 mt-14">
            Conocenos
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
    )
  }


