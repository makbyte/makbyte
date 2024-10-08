import React from "react";
import circle from "@/public/images/circle2.png";
import Image from "next/image";

const AiServicesCollaborateWithUs = () => {
  return (
    <div className="lg:flex md:gap-6 items-center mb-12">
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 align-baseline self-baseline lg:pr-[34%]"
        data-aos="fade-right"
      >
        <div className="max-[1024px]:text-center">
          <h3 className="mb-3 font-bold text-4xl">
            Ready to Transform
            <strong className="text-purple-600"> with AI</strong>
          </h3>
          <p className="text-lg text-gray-400 mb-4">
            Makbyte is here to help you harness the power of AI to streamline
            processes, improve decision-making, and deliver better outcomes for
            your business. Get in touch with us today for a demo of our AI
            solutions.
          </p>
        </div>
      </div>
      {/* <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
        data-aos="fade-up"
      >
        <Image
          className="max-w-full mx-auto md:max-w-none h-auto"
          src={circle}
          width={540}
          height={405}
          alt="Features 01"
        />
      </div> */}
    </div>
  );
};

export default AiServicesCollaborateWithUs;
