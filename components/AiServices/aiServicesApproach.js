import React from "react";
import ApproachCard from "@/components/AiServices/ui/approachCard";
import { LuBrainCircuit } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { IoCloudUploadSharp } from "react-icons/io5";

const ApproachCardDetails = [
  {
    icon: <LuBrainCircuit className="w-12 h-12 text-purple-600 mb-3" />,
    stepLabel: "Stage 1",
    title: "Initiate",
    details:
      "Comprehend how AI corresponds with your organizational strategy and identify the possibilities AI offers for your business.",
  },
  {
    icon: <BsGraphUp className="w-12 h-12 text-purple-600 mb-3" />,
    stepLabel: "Stage 2",
    title: "Workshop",
    details:
      "Accelerate AI Deployment, create a technical infrastructure, and design and evaluate AI innovations.",
  },
  {
    icon: <IoCloudUploadSharp className="w-12 h-12 text-purple-600 mb-3" />,
    stepLabel: "Stage 3",
    title: "Achieve",
    details:
      "Effortlessly incorporate AI innovations into your existing workflows while effectively assessing and promoting usage.",
  },
];

const AiServicesMethodology = () => {
  return (
    <div className="py-20 mt-12">
      <div className="text-center">
        <h2 className="mb-3 font-bold text-4xl text-gray-200 ">
          Our <strong className="text-purple-600">Three-Step Method:</strong>{" "}
          Aimed at Providing Value
        </h2>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none ">
        {ApproachCardDetails.map((element, index) => (
          <ApproachCard
            key={index}
            icon={element.icon}
            stepText={element.stepLabel}
            heading={element.title}
            description={element.details}
          />
        ))}
      </div>
    </div>
  );
};

export default AiServicesMethodology;
