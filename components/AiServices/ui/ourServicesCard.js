import React from "react";

const OurServicesCard = ({ icon, heading, description }) => {
  return (
    <div className="relative cursor-pointer group">
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl px-8 py-6 w-80 h-full flex flex-col justify-between items-center text-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-900/20 border border-gray-700">
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-4xl mb-4 flex text-blue-600 justify-center">
            {icon}
          </div>
          <h3 className="text-white text-lg font-semibold leading-tight">
            {heading}
          </h3>
          {description && (
            <span className="text-gray-400 mt-4 text-sm block">
              {description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurServicesCard;
