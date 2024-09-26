import React from "react";
import AIBlog from "@/public/images/aiBlog.jpg";
import Image from "next/image";
const value1 = "{ data x digital }ai";
const AiServicesBlog = () => {
  return (
    <div className="lg:flex md:gap-6 flex-row-reverse mt-28 items-center ">
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 z-30"
        data-aos="fade-up"
      >
        <Image
          className="rounded-lg shadow-mak max-w-full mx-auto md:max-w-none h-auto "
          src={AIBlog}
          width={540}
          height={405}
          alt="Features 01"
        />
      </div>
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 align-baseline self-baseline"
        data-aos="fade-right"
      >
        <div className="max-[1024px]:text-center">
          <h3 className="h3 mb-3">
            Enterprise Velocity ={" "}
            <span className="text-purple-600">{value1}</span>
          </h3>
          <div>
            <p className="text-lg text-gray-400 mb-4">
              <strong className="text-gray-200">Data</strong> helps anticipate
              market opportunities, track performance, and provide timely
              insights for strategic adaptation. Meanwhile,
            </p>
            <p className="text-lg text-gray-400 mb-4">
              <strong className="text-gray-200">Digital</strong> offers the
              agility necessary to execute changing strategies at scale. New
              business models—like Direct-to-Consumer (D2C), digital branches,
              and Software-as-a-Service (SaaS)—are increasingly dominant among
              high-growth enterprises.
            </p>
            <p className="text-lg text-gray-400 mb-4">
              The synergy between Digital and Data strategies often separates
              the winners from the rest. When harmonized, Data x Digital creates
              significant competitive advantages for enterprises. AI accelerates
              this process by enhancing data-driven strategy formulation and
              enabling rapid operational model changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiServicesBlog;
