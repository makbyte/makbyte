import React from "react";
import ApproachCard from "@/components/AiServices/ui/approachCard";
import { BsGraphUp } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";

const ApproachCardDetails = [
  {
    icon: <FaPeopleGroup className="w-12 h-12 text-purple-600 mb-3" />,
    title: "AI-powered analysis of customer behaviors.",
  },
  {
    icon: <BsGraphUp className="w-12 h-12 text-purple-600 mb-3" />,
    title: "Detailed trend tracking to identify customer preferences.",
  },
  {
    icon: <BiSolidReport className="w-12 h-12 text-purple-600 mb-3" />,
    title: "Real-time reporting to make immediate, impactful decisions.",
  },
];

const AiServicesMethodology = () => {
  return (
    <div className="py-20 mt-12">
      <div className="text-center">
        <h2 className="mb-3 font-bold text-4xl text-gray-200 ">
          Transforming Customer Relationships{" "}
          <strong className="text-purple-600"> AI-Driven </strong> with Insights
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
          Understanding customer needs is crucial to building lasting
          relationships. Makbyte’s AI solutions allow your team to delve into
          comprehensive insights on customer behaviors, preferences, and trends
          by analyzing historical data. This empowers your team to make more
          personalized and timely decisions, fostering better relationships and
          driving higher satisfaction.
        </p>
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
