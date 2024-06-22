import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar/Navbar";

const inter = Lato({
  subsets: ["latin-ext"],
  weight: "700"
});

export const metadata: Metadata = {
  title: "Sosvending,io",
  description: "Sosvending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
