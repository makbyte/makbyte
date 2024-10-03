import React from "react";
import ReusableCard from "@/components/AiServices/ui/reusableCard";
import { MdComputer } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { IoMdCloudUpload } from "react-icons/io";

const CapabilitiesData = [
  {
    icon: <LuBrainCircuit className="w-24 h-24 text-purple-600 mb-3" />,
    heading: "AI Consulting and Strategic Planning",
    description: [
      "AI Strategy Development",
      "Establishing Enterprise AI Foundations",
      "AI Vision Workshops",
    ],
  },
  {
    icon: <BsGraphUp className="w-24 h-24 text-purple-600 mb-3" />,
    heading: "Rapid Data and Digital Transformation",
    description: [
      "Digital & Cloud Transformation with AI",
      "AI-Enhanced Data Engineering",
      "AI Application Development",
    ],
  },
  {
    icon: <IoMdCloudUpload className="w-24 h-24 text-purple-600 mb-3" />,
    heading: "AI-Enhanced Product Development",
    description: [
      "Integration of AI Capabilities",
      "Development of AI-Driven Platforms",
      // "AI Vision Workshops",
    ],
  },
];

const AiServicesCapabilities = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="mb-3 font-bold text-4xl">
          Our <strong className="text-purple-600">AI-Driven</strong> Solutions
        </h3>
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
