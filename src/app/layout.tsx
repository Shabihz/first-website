import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Headermain from "@/components/Headermain";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import MobNavbar from "@/components/MobNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop/>
        <Headermain/>
        <Navbar/>
        <MobNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
