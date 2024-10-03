import React from "react";
import ReusableCard from "@/components/AiServices/ui/reusableCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaEquals } from "react-icons/fa";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaRocket } from "react-icons/fa6";

const distinctiveCardDetails = [
  {
    icon: <HiOutlineLightBulb className="w-20 h-20 text-purple-600" />,
    title: "Foundational Principles Approach",
    description: ["Concepts hold greater significance than plans."],
  },
  {
    icon: <FaEquals className="w-20 h-20 text-purple-600" />,
    title: "Preference for Action",
    description: [
      "Building solutions iteratively instead of endless evaluation.",
    ],
  },
  {
    icon: <MdYoutubeSearchedFor className="w-20 h-20 text-purple-600" />,
    title: "Commitment to Impact",
    description: ["Focused attention on performance metrics."],
  },
  {
    icon: <FaRocket className="w-20 h-20 text-purple-600" />,
    title: "Scaling Innovation",
    description: ["Cutting-edge technology with robust engineering."],
  },
];

const DistinctiveSection = () => {
  return (
    <div className="py-20 mt-6">
      <div className="text-center">
        <h2 className="mb-3 font-bold text-4xl text-gray-200 ">
          What Sets Us Apart.
        </h2>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none ">
        {distinctiveCardDetails.map((element, index) => {
          return (
            <ReusableCard
              key={index}
              icon={element.icon}
              heading={element.title}
              description={element.description}
              cardStyle="items-center gap-4"
              mediaStyle="flex-col items-start"
            />
          );
        })}
      </div>
    </div>
  );
};

export default DistinctiveSection;
