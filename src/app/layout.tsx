import type { Metadata } from "next";
<<<<<<< Updated upstream
import "./globals.css";
import Navbar from "@/components/layouts/navbar/Navbar";
import {Footer, Quicklinks} from "@/components/index"

=======
import "@/app/globals.css";

import { Provider } from "@/app/(auth)/_providers/sessionProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
>>>>>>> Stashed changes

export const metadata: Metadata = {
  title: "Sosvending.io",
  description: "Sosvending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative">
      <Navbar />
        {children}<Quicklinks/> 
      <Footer/> 
      </body>
    </html>
  );
}
