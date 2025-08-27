import Image from "next/image";

import HoverImage from "./ui/hoverImage";
import { featuresData } from "@/data/featuresData";
export default function Zigzag() {
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Reach goals that matter
            </div>
            <h1 className="h2 mb-4">One Team, Unlimited solutions</h1>
            <p className="text-xl text-gray-400">
              A unified team offering boundless service expertise.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {featuresData.map((feature, index) => {
              const isReversed = index % 2 !== 0; // Reverse for odd cards

              return (
                <div
                  key={feature.id}
                  className={`md:gap-6 items-center ${
                    isReversed
                      ? "flex md:flex-row-reverse"
                      : "md:grid md:grid-cols-12"
                  }`}
                >
                  {/* Image */}
                  <HoverImage
                    src={feature.image}
                    alt={feature.alt}
                    width={540}
                    height={405}
                    className={`md:col-span-5 lg:col-span-6 mb-8 md:mb-0`}
                  />

                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos={feature.animation}
                  >
                    <div
                      className={`${
                        !isReversed
                          ? "md:pl-4 lg:pl-12 xl:pl-16"
                          : "md:pr-4 lg:pr-12 xl:pr-16"
                      }`}
                    >
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        {feature.subHeading}
                      </div>
                      <h3 className="h3 mb-3">{feature.heading}</h3>
                      <p className="text-xl text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        {feature.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-center mb-2 last:mb-0"
                          >
                            <svg
                              className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
