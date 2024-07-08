"use client"

import React, { useState, useEffect } from 'react';
import { CustomButton, FlyoutLink } from "@/components";
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {      


    return(
        <header className="sm:w-full absolute z-10">
            <nav className="flex-no-wrap relative sm:max-w-[1440] mx-auto flex justify-between items-center text-xl">
                <Link href="/" className="flex justify-center items-center pl-2 sm:pl-7 md:pl-11 md:translate-x-20">
                    <Image             
                    src="/images/sosvending-logo.png"
                    alt="Next.js Logo"
                    width={250}
                    height={36}
                    className="object-contain"/>
                </Link>
                {/* view in mobile */}





                {/* view in sm md xl */}
                <div className="sm:flex justify-between items-center gap-6 sm:mr-[200px] -translate-x-24 ">
                    <div className="flex justify-center gap-5 px-3 py-12">  
                        <FlyoutLink FlyoutContent={ServicesContent} > Servicios</FlyoutLink>
                        <FlyoutLink href="/productos"> Productos </FlyoutLink>
                        <FlyoutLink href="/about"> Conocenos </FlyoutLink>
                    </div>
                    <CustomButton
                        title="Login"
                        btnType="button"
                        containerStyles="bg-primary-blue text-white rounded-full sm:rounded-full min-w[130px] "
                    />
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