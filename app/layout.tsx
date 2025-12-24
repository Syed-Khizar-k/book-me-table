import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
 subsets: ["latin"],
 variable: "--font-playfair",
});

const outfit = Outfit({
 subsets: ["latin"],
 variable: "--font-outfit",
});

export const metadata: Metadata = {
 title: "Midnight Reserve",
 description: "Exclusive table reservations.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body
    className={`${playfair.variable} ${outfit.variable} antialiased bg-[#050505] text-[#e2d1c3]`}>
    {children}
   </body>
  </html>
 );
}
