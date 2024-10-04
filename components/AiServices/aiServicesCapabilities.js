import React from "react";
import ReusableCard from "@/components/AiServices/ui/reusableCard";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";

import { IoIosDocument } from "react-icons/io";

const CapabilitiesData = [
  {
    icon: <IoIosDocument className="w-24 h-24 text-purple-600 mb-3" />,
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
      <GiArtificialIntelligence className="w-24 h-24 text-purple-600 mb-3" />
    ),
    heading: "Intelligent candidate recommendations based on job requirements.",
    // description: [
    //   "Digital & Cloud Transformation with AI",
    //   "AI-Enhanced Data Engineering",
    //   "AI Application Development",
    // ],
  },
  {
    icon: <CiTimer className="w-24 h-24 text-purple-600 mb-3" />,
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
    <div>
      <div className="text-center">
        <h3 className="mb-3 font-bold text-4xl">
          AI Hiring Assistant:
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
      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
        {CapabilitiesData.map((item, i) => {
          return (
            <ReusableCard
              key={i}
              icon={item.icon}
              description={item.description}
              heading={item.heading}
              cardStyle="flex-col items-start"
              headingStyle="mb-4"
            />
          );
        })}
      </div>
    </div>
  );
};

export default AiServicesCapabilities;
