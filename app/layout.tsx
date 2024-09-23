"use client";
import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import PageIllustration from "@/components/page-illustration";

import Footer from "@/components/ui/footer";
import { useEffect } from "react";
import { PromoBar } from "@/components/Promobar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export interface promoType {
  [key: string]: string;
}

export const promoData: promoType = {
  title:
    "Revolutionizing Enterprise Solutions with AI-Powered Systems by MAK {Byte}",
  description:
    "In today's fast-paced business world, managing data, optimizing processes, and enhancing efficiency are crucial. Stay ahead with MAK {Byte}'s AI-powered solutions, letting AI do the work for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <main className="grow">
            <PromoBar
              title={promoData?.title}
              description={promoData?.description}
            />
            <Header />
            <PageIllustration />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
