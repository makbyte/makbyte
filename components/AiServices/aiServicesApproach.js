import React from "react";
import ApproachCard from "@/components/AiServices/ui/approachCard";
import { LuBrainCircuit } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { IoCloudUploadSharp } from "react-icons/io5";

const ApproachCardData = [
  {
    icon: <LuBrainCircuit className="w-12 h-12 text-purple-600 mb-3" />,
    stepText: "Step 1",
    heading: "Boot",
    description:
      "Understand how AI aligns with your business strategy, discover opportunities AI presents for your enterprise.",
  },
  {
    icon: <BsGraphUp className="w-12 h-12 text-purple-600 mb-3" />,
    stepText: "Step 1",
    heading: "Studio",
    description:
      "Expedite AI Implementation, establish a technical platform and design and test AI solutions.",
  },
  {
    icon: <IoCloudUploadSharp className="w-24 h-12 text-purple-600 mb-3" />,
    stepText: "Step 1",
    heading: "Realize",
    description:
      "Seamlessly integrate AI solutions into your current workflows, effectively measuring and driving adoption.",
  },
];
const AiServicesApproach = () => {
  return (
    <div className="py-20 mt-12">
      <div className="text-center">
        <h2 className="mb-3 font-bold text-4xl text-gray-200 ">
          Our <strong className="text-purple-600">3-Step Approach:</strong>{" "}
          Focused on Delivering Value
        </h2>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none ">
        {ApproachCardData.map((item, i) => (
          <ApproachCard
            key={i}
            icon={item.icon}
            stepText={item.stepText}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AiServicesApproach;
