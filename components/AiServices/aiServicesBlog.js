import React from "react";
import AIBlog from "@/public/images/aiBlog.jpg";
import Image from "next/image";
const value1 = "{ analytics + technology } powered by AI";

const AiServicesBlog = () => {
  return (
    <div className="flex flex-col-reverse gap-6 lg:flex-row md:gap-6 mt-28 items-center">
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 z-30"
        data-aos="fade-up"
      >
        <Image
          className="rounded-lg shadow-mak max-w-full mx-auto md:max-w-none h-auto"
          src={AIBlog}
          width={540}
          height={405}
          alt="AI Blog Image"
        />
      </div>
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 align-baseline self-baseline"
        data-aos="fade-right"
      >
        <div className="max-[1024px]:text-center">
          <h3 className="h3 mb-3">
            Enterprise Speed = <span className="text-purple-600">{value1}</span>
          </h3>
          <div>
            <p className="text-lg text-gray-400 mb-4">
              <strong className="text-gray-200">Analytics</strong> is key to
              uncovering market patterns, tracking performance, and providing
              real-time insights for agile strategic shifts.
            </p>
            <p className="text-lg text-gray-400 mb-4">
              <strong className="text-gray-200">Technology</strong> enables the
              adaptability required to scale and implement evolving strategies.
              New business models, such as Direct-to-Consumer (D2C), digital
              platforms, and Software-as-a-Service (SaaS), are increasingly
              shaping high-growth enterprises.
            </p>
            <p className="text-lg text-gray-400 mb-4">
              The integration of technology and analytics often distinguishes
              leaders from the competition. When aligned, they create powerful
              competitive advantages. AI accelerates this process by driving
              data-informed strategic decisions and enabling rapid operational
              shifts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiServicesBlog;
