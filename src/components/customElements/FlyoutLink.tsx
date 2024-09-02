"use client"

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react'

interface FlyoutLinkProp {
  children?: ReactNode | string;
  href?: string;
  FlyoutContent?: any;
  className?: string | undefined;
  isActive?: boolean;
}
  
  const FlyoutLink = ({children = "placeholder" ,href,FlyoutContent,className,isActive=false}:FlyoutLinkProp) => {
    const [open,setOppen] = useState(false);
    const showFlyout = open && FlyoutContent;
  
  
    return (
      <div 
      onMouseEnter={()=> setOppen(true)}
      onMouseLeave={()=> setOppen(false)}
      className={`${className}` + " relative h-fit w-fit"}>
        {isActive && (
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-green-400 transition-transform duration-300 ease-out"></span>
        )}
        <a 
          href={href} className="group relative" >
          {FlyoutContent ? 
          <>
          {children}
          <FontAwesomeIcon icon={faCaretDown} className="pl-2"/>
          </>
          : children}
          <span style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)"
          }} 
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"></span>
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div 
            initial={{ opacity: 0 , y: 15}}
            animate={{ opacity: 1 , y: 0}}
            exit={{ opacity: 0 , y: 15}}
            style={{ translateX: "-50%"}}
            transition={{ duration:0.3,ease:"easeInOut"}}
            className="absolute rounded-xl left-1/2 top-12 bg-white text-black pt-5">
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
              <FlyoutContent/>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    )
  
  }
  


export default FlyoutLink