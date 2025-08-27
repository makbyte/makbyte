"use client";

import React, { useRef, useState } from "react";
import AIBlog from "@/public/images/aiBlog2.webp";
import Image from "next/image";
import HoverImage from "@/components/ui/hoverImage";
const AiServicesBlog = () => {
  return (
    <div className="flex flex-col-reverse gap-6 lg:flex-row md:gap-6 mt-28 items-center">
      <HoverImage src={AIBlog} alt="AI Blog" width={540} height={405} />
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
