
"use client";

import Image from "next/image";
import CustomButton from "../customElements/CustomButton";
import {headerInnerHtml} from "@/constants"

const Hero = () => {
    const handleScroll = () => {}

    return(
    <section className="hero mt-9">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">{headerInnerHtml.title}</h1>
            <span>{headerInnerHtml.subtitle}</span>
            <p className="hero__subtitle">
                {headerInnerHtml.text}
                <span className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary-pink hover:before:bg-primary-blue relative inline-block">
                    <span className="relative text-white">{headerInnerHtml.hltext} </span>
                </span>
            </p>
            <CustomButton 
                title="Ver Mas..."
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
            <Image src="/images/vending-m.png" alt="hero" fill className="pt-14 object-contain"/>
        </div>
        
        <div className="hero__image-overlay" />
      </div>
    </section>
    )
}

export default Hero