"use client";

import Image from "next/image";
import aiHero from "@/public/images/aiHero.webp";

export default function AiServicesHero() {
  return (
    // <div className="">
    <div className="lg:flex md:gap-6 items-center ">
      {/* Image */}
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 align-baseline self-baseline"
        data-aos="fade-right"
      >
        <div className="max-[1024px]:text-center">
          <h1 className="mb-3 font-bold h1">
            Boost Your Strategy with AI-Driven
            <strong className="text-purple-600"> Enterprise Speed</strong>
          </h1>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Succeeding in a rapidly changing world requires enterprise agility –
            the ability to quickly develop and execute strategies through rapid
            iterations.
          </p>
        </div>
      </div>
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 z-30"
        data-aos="fade-up"
      >
        <Image
          className="rounded-lg shadow-mak max-w-full mx-auto md:max-w-none h-auto "
          src={aiHero}
          width={540}
          height={405}
          alt="Features 01"
        />
      </div>
    </div>
    // </div>
  );
}
