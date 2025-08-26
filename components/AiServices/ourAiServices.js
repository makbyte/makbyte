"use client";
import React from "react";
import OurServicesCard from "@/components/AiServices/ui/ourServicesCard";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";

const cardsData = [
  {
    icon: <IoPeople className="w-16 h-16 text-blue-400" />,
    heading: "Instant insights into customer/prospect interactions.",
  },
  {
    icon: <GiSatelliteCommunication className="w-16 h-16 text-blue-400" />,
    heading: "Seamless integration with popular communication platforms.",
  },
  {
    icon: <FaDatabase className="w-16 h-16 text-blue-400" />,
    heading: "Detailed analytics based on historical data.",
  },
];

export default function OurAiServices() {
  return (
    <div className="relative py-24 sm:py-32 bg-gray-900 overflow-hidden">
      {/* Left shadow gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>

      {/* Right shadow gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

      <div className="mx-auto max-w-4xl text-center relative z-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          AI Integrated Communication Tool <br />
          <strong className="text-blue-600">
            Your Team's AI Ally for Deep Insights
          </strong>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
          In today's fast-paced business world, staying informed is key to
          building relationships with customers and prospects. With our AI
          Integrated Communication Tool, your in-house team can ask direct
          questions about clients via communication tools like Slack or
          Microsoft Teams.
        </p>
      </div>

      <div className="relative mt-16 ">
        <div className="animate-marquee flex gap-6">
          {cardsData.map((item, i) => (
            <OurServicesCard key={i} icon={item.icon} heading={item.heading} />
          ))}
          {cardsData.map((item, i) => (
            <OurServicesCard
              key={`dup-${i}`}
              icon={item.icon}
              heading={item.heading}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          width: max-content;
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
