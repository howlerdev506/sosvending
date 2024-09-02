"use client"

import React, { useState, useEffect } from 'react';
import { CustomButton, FlyoutLink } from "@/components";
import Image from "next/image";
import Link from "next/link";



const Navbar2 = () => {      
    const [isOpen, setIsOpen] = useState(false);

    return(
               <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-lg font-bold">Brand</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pages
                    <svg className="inline ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Page 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Page 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Page 3</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>


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

  
export default Navbar2