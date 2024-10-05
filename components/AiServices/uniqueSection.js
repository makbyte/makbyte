import React from "react";
import ReusableCard from "@/components/AiServices/ui/reusableCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaEquals } from "react-icons/fa";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaRocket } from "react-icons/fa6";
import Link from "next/link";

const distinctiveCardDetails = [
  {
    icon: <HiOutlineLightBulb className="w-20 h-20 text-purple-600" />,
    title: "AI Integrated Communication Tool",
    subTitle: "AI-Enhanced Organizational Insights",
    description:
      "Makbyte’s AI Integrated Communication Tool offers your team direct access to rich insights about customers and prospects, analyzing past communications to provide actionable intelligence.",
    btnLink: "/contact",
  },
  {
    icon: <FaEquals className="w-20 h-20 text-purple-600" />,
    title: "AI Hiring Assistant",
    subTitle: "Streamline Recruitment with AI",
    description:
      "The AI Hiring Assistant automates resume sorting by skills, technologies, and experience, ensuring that you never miss the perfect candidate. With intelligent suggestions and sorting features, this tool optimizes your recruitment process, saving time and enhancing results.",
    btnLink: "/contact",
  },
];

const DistinctiveSection = () => {
  return (
    <div className="py-20 mt-6">
      <div className="text-center">
        <h2 className="mb-3 font-bold text-4xl text-gray-200 ">Our AI Apps</h2>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none ">
        {distinctiveCardDetails.map((element, index) => {
          return (
            <ReusableCard
              key={index}
              icon={element.icon}
              heading={element.subTitle}
              description={element.description}
              title={element.title}
              btnLink={element.btnLink}
              // cardStyle="items-center gap-4"
              mediaStyle="flex-col items-start"
            />
          );
        })}
      </div>
    </div>
  );
};

export default DistinctiveSection;
