import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface ServiceCardProps {
    title:string;
    description:string;
    image?:string ;
    characteristics?: characteristic;
}

export interface characteristic {
    title:string;
    items:item[];
}

export interface item {
    title:string;
    info:string;
}