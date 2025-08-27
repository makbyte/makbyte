import React from "react";

const ApproachCard = ({ heading, description, icon, stepText }) => {
  return (
    <div className="group relative [perspective:2000px]" data-aos="fade-right">
      {/* Subtle Gradient Background Effect */}
      <div className="absolute -top-5 -left-5 w-40 h-40 bg-blue-700/20 rounded-full filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-purple-700/20 rounded-full filter blur-2xl opacity-30 animate-pulse"></div>

      {/* Card Content */}
      <div
        className="
          relative cursor-pointer flex space-x-3 max-[700px]:flex-col max-[700px]:items-start
          h-full rounded-lg bg-gray-800 ring-gray-900 p-8 shadow-sm
          focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2
          border border-transparent hover:border-blue-500
          transition-transform transition-colors duration-500 ease-out origin-bottom transform-gpu
          [transform-style:preserve-3d] [will-change:transform]
          group-hover:[transform:rotateX(10deg)]
        "
      >
        <div className="flex flex-col gap-4">
          <div className="flex-shrink-0">{icon}</div>
          <div>
            <span aria-hidden="true" className="absolute inset-0" />
            <span className="text-lg font-medium text-gray-200">{heading}</span>
            {description && (
              <p className="mt-2 text-sm text-gray-400">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachCard;
