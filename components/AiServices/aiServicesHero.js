"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import aiHero from "@/public/images/Hero.jpg";

export default function AiServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center mb-12 justify-center ">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-start text-center items-center">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-4">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                AI-Powered Business Solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Unlock the Power of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  AI
                </span>{" "}
                for Your Business
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                At Makbyte, we believe in a future where AI transforms the way
                businesses operate—making them more efficient, smarter, and
                better equipped to meet challenges head-on.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
}
