"use client";

import React from "react";
import { ReactNode } from "react";

interface AutoScrollProp {
  children: ReactNode | ReactNode[];
}

const AutoScroll = ({ children }: AutoScrollProp) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className=" inline-flex flex-nowrap gap-4">
      <ul className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
        { ...childrenArray.map((item , index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoScroll;
