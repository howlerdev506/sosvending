"use client";
import Image from "next/image";

interface CardProp {
  image?: string | undefined;
  title?: string | undefined;
  text?: string | undefined;
  vertical?: boolean;
}

const Card = ({image,title,text,vertical}: CardProp) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-48 bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105" style={{ 
        backgroundImage: `url('${image}')`, backgroundSize: 'contain',backgroundRepeat: 'no-repeat' }}></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {text}
        </p>
      </div>
    </div>

      
    );
  }
  
  export default Card
  