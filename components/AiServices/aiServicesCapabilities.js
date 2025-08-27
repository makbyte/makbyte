"use client";
import React from "react";
import ReusableCard from "@/components/AiServices/ui/reusableCard";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";

import { IoIosDocument } from "react-icons/io";
import HoverImage from "../ui/hoverImage";
import AnimatedMarquee from "./ui/animatedMarquee";
import OurServicesCard from "./ui/ourServicesCard";

const CapabilitiesData = [
  {
    icon: (
      <IoIosDocument className="md:w-24 md:h-24 w-20 h-20 text-purple-600 mb-3" />
    ),
    heading:
      "Automated resume analysis and sorting by technologies and skills.",
    // description: [
    //   "AI Strategy Development",
    //   "Establishing Enterprise AI Foundations",
    //   "AI Vision Workshops",
    // ],
  },
  {
    icon: (
      <GiArtificialIntelligence className="md:w-24 md:h-24 w-20 h-20 text-purple-600 mb-3" />
    ),
    heading: "Intelligent candidate recommendations based on job requirements.",
    // description: [
    //   "Digital & Cloud Transformation with AI",
    //   "AI-Enhanced Data Engineering",
    //   "AI Application Development",
    // ],
  },
  {
    icon: (
      <CiTimer className="md:w-24 md:h-24 w-20 h-20 text-purple-600 mb-3" />
    ),
    heading: "Streamlined hiring processes to save time and improve outcomes.",
    // description: [
    //   "Integration of AI Capabilities",
    //   "Development of AI-Driven Platforms",
    //   // "AI Vision Workshops",
    // ],
  },
  {
    icon: (
      <IoIosDocument className="md:w-24 md:h-24 w-20 h-20 text-purple-600 mb-3" />
    ),
    heading:
      "Automated resume analysis and sorting by technologies and skills.",
    // description: [
    //   "AI Strategy Development",
    //   "Establishing Enterprise AI Foundations",
    //   "AI Vision Workshops",
    // ],
  },
  {
    icon: (
      <GiArtificialIntelligence className="md:w-24 md:h-24 w-20 h-20 text-purple-600 mb-3" />
    ),
    heading: "Intelligent candidate recommendations based on job requirements.",
    // description: [
    //   "Digital & Cloud Transformation with AI",
    //   "AI-Enhanced Data Engineering",
    //   "AI Application Development",
    // ],
  },
  {
    icon: (
      <CiTimer className="md:w-24 w-20 h-20 md:h-24 text-purple-600 mb-3" />
    ),
    heading: "Streamlined hiring processes to save time and improve outcomes.",
    // description: [
    //   "Integration of AI Capabilities",
    //   "Development of AI-Driven Platforms",
    //   // "AI Vision Workshops",
    // ],
  },
];

const AiServicesCapabilities = () => {
  return (
    <div className="relative py-24 sm:py-32 bg-gray-900 overflow-hidden">
      {/* Left shadow gradient */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-900 via-gray-900/10 to-transparent z-10"></div>

      {/* Right shadow gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-900 via-gray-900/10 to-transparent z-10"></div>

      <div className="text-center relative z-20">
        <h3 className="mb-3 font-bold text-4xl text-white">
          AI Hiring Assistant <br />
          <strong className="text-purple-600">
            Smarter Recruitment Starts Here
          </strong>
        </h3>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
          Finding the right candidate is often like searching for a needle in a
          haystack. With Makbyte’s AI Hiring Assistant, the process becomes a
          breeze. This smart tool automatically analyzes resumes based on
          technologies, skills, and experience, sorting candidates into
          categories to help you find the perfect fit.
        </p>
      </div>

      <AnimatedMarquee>
        {CapabilitiesData.map((item, i) => {
          return (
            <OurServicesCard
              key={`dup-${i}`}
              icon={item.icon}
              heading={item.heading}
            />
          );
        })}
      </AnimatedMarquee>
    </div>
  );
};

export default AiServicesCapabilities;
