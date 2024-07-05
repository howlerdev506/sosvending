import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/navbar/Navbar";
import {Footer, Quicklinks} from "@/components/index"


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
        {children}
        <Quicklinks/> 
      <Footer/> 
      </body>
    </html>
  );
}
