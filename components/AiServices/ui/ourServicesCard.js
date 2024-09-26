import React from "react";

const OurServicesCard = ({ icon, heading, description }) => {
  return (
    // <div className="mx-auto mt-10">
    <div
      className="bg-gray-800 ring-gray-900 rounded-3xl p-8 ring-1 xl:p-10 h-full flex flex-col"
      data-aos="fade-right"
    >
      {/* icon */}
      <div>{icon}</div>
      <h3 className="text-white text-lg font-semibold leading-8 tracking-wide mt-4">
        {heading}
      </h3>
      <span className="text-gray-400 mt-4 text-sm leading-6 flex-grow">
        {description}
      </span>
    </div>
    // </div>
  );
};

export default OurServicesCard;
