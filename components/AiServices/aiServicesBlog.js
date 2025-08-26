"use client";

import React, { useRef, useState } from "react";
import AIBlog from "@/public/images/aiBlog2.webp";
import Image from "next/image";

const AiServicesBlog = () => {
  const imageRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const tiltX = (y * 10).toFixed(2);
    const tiltY = (x * -10).toFixed(2);
    const hoverHeight = 5;

    setTransform(
      `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${hoverHeight}px)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    );
  };

  return (
    <div className="flex flex-col-reverse gap-6 lg:flex-row md:gap-6 mt-28 items-center">
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 z-30"
        data-aos="fade-up"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={imageRef}
          className="rounded-lg shadow-mak max-w-full mx-auto md:max-w-none h-auto transition-transform duration-500 ease-out overflow-hidden"
          style={{ transform }}
        >
          <Image
            src={AIBlog}
            width={540}
            height={405}
            alt="AI Blog Image"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 align-baseline self-baseline"
        data-aos="fade-right"
      >
        <div className="max-[1024px]:text-center">
          <h3 className="h3 mb-3">
            <span className="text-purple-600"> Innovate, Simplify, Lead </span>
          </h3>
          <div>
            <p className="text-lg text-gray-400 mb-4">
              Makbyte is pioneering AI solutions that not only optimize your
              current processes but also help you lead your industry.
            </p>
            <p className="text-lg text-gray-400 mb-4">
              Whether it's empowering internal teams to derive insights from
              customer data or automating your hiring workflows, we provide the
              tools to help you succeed in the AI-driven future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiServicesBlog;
