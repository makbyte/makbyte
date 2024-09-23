"use client";

import Image from "next/image";
import AiServicesHeroImg from "@/public/images/saas.jpg";

export default function AiServicesHero() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-28">
      <div className="lg:flex md:gap-6 items-center ">
        {/* Image */}
        {/* Content */}
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 align-baseline self-baseline"
          data-aos="fade-right"
        >
          <div className="max-[1024px]:text-center">
            <h3 className="h3 mb-3">
              Strategy, architecture, & development of SaaS & mobile products.
            </h3>
            <p className="text-xl text-gray-400 mb-4">
              Our adept team creates bespoke software tailored to your needs,
              prioritizing innovation and precision for exceptional
              functionality, scalability, and user experience from conception to
              deployment.
            </p>
          </div>
        </div>
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
          data-aos="fade-up"
        >
          <Image
            className="rounded-lg shadow-mak max-w-full mx-auto md:max-w-none h-auto"
            src={AiServicesHeroImg}
            width={540}
            height={405}
            alt="Features 01"
          />
        </div>
      </div>
    </div>
  );
}
