"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { CustomButton, FlyoutLink } from '@/components'



const Navbar = () => {  
    const [isOpen,setOpen] = useState(false)    

    useEffect(() => {
        setOpen(window.innerWidth > 768);
      }, [])

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth > 768)   
        }
        window.addEventListener('resize', handleResize);
        return () => {
         window.removeEventListener('resize', handleResize);
        };
      }, [isOpen]);


  return (
    <header className="w-full absolute z-10">
        <nav className="mx-full flex justify-between items-center md:p-4">
            
            <Link href="/" className="flex justify-center place-items-baseline md:ml-16 flex-grow-1">
                <Image             
                src="/images/sosvending-logo.png"
                alt="Next.js Logo"
                width={340}
                height={42}
                className="object-contain"/>
            </Link>           


            <div className={`${isOpen?'absolute flex justify-center items-center top-24 p-4 bg-white md:bg-transparent md:relative  w-full gap-4 md:justify-end md:top-0 xl:pr-72':'hidden'} flex-col md:flex-row` }>
                        <FlyoutLink FlyoutContent={ServicesContent} > Servicios</FlyoutLink>
                        <Link href="/productos"> Productos </Link>
                        <Link href="/about"> Conocenos </Link>
                <CustomButton
                        title="Login"
                        btnType="button"
                        containerStyles="bg-primary-blue text-white rounded-full sm:rounded-full min-w[130px] "
                    />
            </div>           

            <div className="p-4 md:hidden flex items-center">
                <button onClick={()=>{
                    setOpen(!isOpen);
                }}>
                        {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} className="pl-2"/>
                        ):(
                        <FontAwesomeIcon icon={faBars} className="pl-2"/>
                        )}
                </button>
            </div>

        
            
            
           
        </nav>
    </header>
  )
}

const ServicesContent = () =>{
    return (
      <div className="flex flex-col justify-center items-center gap-3 w-64 h-fit shadow-xl bg-gray-50 !rounded-xl p-5">
        <FlyoutLink href="/services/snacks">Snacks y Bebidas</FlyoutLink>
        <FlyoutLink href="/services/hotdrinks">Bebidas Calientes</FlyoutLink>
        <FlyoutLink href="/services/telemetry">Telemetría</FlyoutLink>
        <FlyoutLink href="/services/publicity">Publicidad</FlyoutLink>
    </div>
    );
  }
  
export default Navbar