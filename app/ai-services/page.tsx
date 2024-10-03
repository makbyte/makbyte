import React from "react";
import AiServicesHero from "@/components/AiServices/aiServicesHero";
import OurAiServices from "@/components/AiServices/ourAiServices";
import UniqueSection from "@/components/AiServices/uniqueSection";
import AiServicesBlog from "@/components/AiServices/aiServicesBlog";
import AiServicesCapabilities from "@/components/AiServices/aiServicesCapabilities";
import AiServicesApproach from "@/components/AiServices/aiServicesApproach";
import AiServicesConnectUs from "@/components/AiServices/aiServicesConnectUs";

const AiServices = () => {
  return (
    // <div className="h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
      <AiServicesHero />
      <AiServicesBlog />
      <OurAiServices />

      <AiServicesCapabilities />
      <AiServicesApproach />

      <UniqueSection />
      <AiServicesConnectUs />
    </div>

    // </div>
  );
};

export default AiServices;
