"use client";
import Image from "next/image";


interface CardUserProp {
    name?:string;
    title?:string;
    imageUrl?: string | undefined;
    className?:string;
  }

const CardUser = ({name, title, imageUrl,className}:CardUserProp) => {
    return (
        <div className={"bg-gray-800 text-white rounded-lg p-4 shadow-lg flex items-center" + `{$className}`}>
        <img loading="lazy" src={imageUrl} alt={name} className="w-26 h-16 rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
      
    );
  }
  
  export default CardUser
  