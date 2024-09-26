import React from "react";

const ApproachCard = ({ heading, description, icon, stepText }) => {
  return (
    <div
      className="relative flex space-x-3 max-[700px]:flex-col max-[700px]:items-start h-full rounded-lg bg-gray-800 ring-gray-900 p-8 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      data-aos="fade-right"
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-6">
          <div className="flex-shrink-0">{icon}</div>
          <div>
            <span aria-hidden="true" className="absolute inset-0" />
            <p className="text-md tracking-wider text-gray-200 mb-2">
              {stepText}
            </p>
            <span className="text-lg font-medium text-purple-600">
              {heading}
            </span>
          </div>
        </div>
        <div className="">
          <p className="text-lg text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachCard;
