import React from "react";
import ReusableCard from "@/components/AiServices/ui/reusableCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaEquals } from "react-icons/fa";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaRocket } from "react-icons/fa6";

const uniqueCardData = [
  {
    icon: <HiOutlineLightBulb className="w-20 h-20 text-purple-600" />,
    heading: "First Principles Mindset",
    desc: ["Ideas matter more than blueprints."],
  },
  {
    icon: <FaEquals className="w-20 h-20 text-purple-600" />,
    heading: "Bias for Action",
    desc: ["Iterative solution building versus continuous analysis."],
  },
  {
    icon: <MdYoutubeSearchedFor className="w-20 h-20 text-purple-600" />,
    heading: "Obsession for Impact",
    desc: ["Laser-sharp focus on business metrics."],
  },
  {
    icon: <FaRocket className="w-20 h-20 text-purple-600" />,
    heading: "Innovation at Scale",
    desc: ["Latest technology with enterprise-grade engineering."],
  },
];
const UniqueSection = () => {
  return (
    <div className="py-20 mt-6">
      <div className="text-center">
        <h2 className="mb-3 font-bold text-4xl text-gray-200 ">
          What Makes Us Unique.
        </h2>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none ">
        {uniqueCardData.map((item, i) => {
          return (
            <ReusableCard
              key={i}
              icon={item.icon}
              heading={item.heading}
              description={item.desc}
              cardStyle="items-center gap-4"
              mediaStyle="flex-col items-start"
            />
          );
        })}
      </div>
    </div>
  );
};

export default UniqueSection;
