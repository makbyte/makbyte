"use client";

import Image from "next/image";
import aiHero from "@/public/images/Hero.jpg";

export default function AiServicesHero() {
  return (
    // <div className="">
    <div className="lg:flex mt-40 md:gap-6 items-center ">
      {/* Image */}
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 align-baseline self-baseline"
        data-aos="fade-right"
      >
        <div className="max-[1024px]:text-center">
          <h1 className="mb-6 font-bold h1">
            Unlock the Power of AI for
            <strong className="text-purple-600"> Your Business</strong>
          </h1>
          <p
            className="text-xl text-gray-400 lg:text-justify text-center mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At Makbyte, we believe in a future where AI transforms the way
            businesses operate-making them more efficient, smarter, and better
            equipped to meet challenges head-on. Our cutting-edge AI-powered
            solutions are designed to seamlessly integrate into your existing
            infrastructure, driving automation, and unlocking new levels of
            performance.Whether it’s streamlining workflows, improving
            decision-making processes, or enhancing data accuracy.
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
