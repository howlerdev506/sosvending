"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";
import { getPathArray } from "@/lib/helpers";


const Navigator = () => {
  const pathname = usePathname();
  const array = getPathArray(pathname);

  return (
    <>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {array.map((item, index) =>
            index === array.length - 1 ? (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="capitalize">                  
                    {item["currentFolder"]}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : (
              <>
                <BreadcrumbItem  key={index}>
                  <BreadcrumbLink asChild>
                    <Link className="capitalize" href={item["path"]}>
                      {item["currentFolder"]}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default Navigator;
