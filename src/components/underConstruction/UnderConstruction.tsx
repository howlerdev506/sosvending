import React from 'react'
import Image from 'next/image'


const UnderConstruction = () => {
  return (
 <section className="bg-gray-100 dark:bg-gray-800">
    <div className="min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
        Estamos Trabajando en el Sitio.</h1>
    <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
    ¡SOS Vending + cerca de usted! </p>
    <div className="flex space-x-4">
      <a href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600">Volcer a Inicio</a>
      <a href="#" className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white">Recargar</a>
    </div>
  </div>
</section>
  )
}

export default UnderConstruction
