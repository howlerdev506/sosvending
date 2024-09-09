"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import {
  Home,
  Building,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
  Layout,
  User,
  Blocks,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";



const menuItems = [
      {
        title: "profile",
        href: "/dashboard/profile",
        icon: (
          <User className="h-5 w-5 transition-all group-hover:scale-110" />
        ),
      },
      {
        title: "maquinas",
        href: "/dashboard/assets",
        icon: (
          <Blocks className="h-5 w-5 transition-all group-hover:scale-110" />
        ),
      },
      {
        title: "analytics",
        href: "/dashboard/analytics",
        icon: 
          <LineChart className="h-5 w-5" />
        ,
      },
      {
        title: "template",
        href: "/template",
        icon: 
          <Layout className="h-5 w-5" />
        ,
      },
];

const SideMenu = () => { 

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base mb-6"
          >
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
          </Link>
        {menuItems.map((item) => (
          <NavigationTooltip
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavigationTooltip
            title="Settings"
            href="/dashboard/settings"
            icon={<Settings className="h-5 w-5" />}
          />
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;

interface navigationTooltipProps {
  title: string;
  href?: string;
  icon?: any;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const NavigationTooltip = ({
  title,
  href,
  icon,
  handleClick,
}: navigationTooltipProps) => {
  let isCurrent = false;
  const isDisabled = false;

  const styles = {
    current:
      "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-muted-foreground md:h-8 md:w-8 md:text-base",
    notcurrent:
      "flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent transition-colors hover:text-foreground text-muted-foreground md:h-8 md:w-8",
  };  

  return (    
    <Tooltip>
      <TooltipTrigger
        asChild
        {...(isDisabled ? { style: { cursor: "not-allowed" } } : {})}
      >
        <Link href={href ? href : "#"} className={styles.notcurrent}>
          {icon ? icon : <Home className="h-5 w-5" />}
          <span className="sr-only capitalize">{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent className="capitalize" side="right">{title}</TooltipContent>
    </Tooltip>
  );
};
