import React from 'react'
import Image
 from 'next/image'
import {ServiceCardProps} from "@/types/index"



const ServiceCard = ({title,description,image,characteristics } :ServiceCardProps) => {
  return (
    <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
        <h1 className="service__card_title ">{title}</h1>
    <div className="relative mb-4 service__image-container">
        <Image src={image || "/images/vending-m.png"}  alt="hero" fill className="object-cover max-h-80 rounded-2xl w-full transition-transform duration-300 transform group-hover:scale-105g group-hover:blur-sm"/>
            <div className="items-start bg-blue-300 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full font-normal leading-relaxed text-black rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 group-hover:opacity-100 p-6 overflow-scroll no-scrollbar">
            <h1 className="font-extrabold overscroll-contain">{characteristics?.title}</h1>
            {
              characteristics?.items.map((item)=>(
                <ul key={item.title}>
                    <li className="my-1 w-auto items-center text-[14px]">
                        <samp className="over font-semibold text-[15px]">{item.title}</samp>< samp className="text-balance">{item.info}</samp>
                    </li>
                </ul>
              ))
            }
            </div>

    </div>
    <div className="flex justify-between items-center w-full pb-4 mb-auto">
      <div className="flex items-center">
        <div className="flex flex-1">
          <p className="text-balance text-gray-500">{description}</p>
        </div>
      </div>
        </div>
  </article>
  
  )
}

export default ServiceCard
