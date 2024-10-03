import OurAiServicesCard from "@/components/AiServices/ui/ourServicesCard";
import { MdComputer } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa6";
import { FaShapes } from "react-icons/fa";

const cardsData = [
  {
    icon: <MdComputer className="w-28 h-28 text-purple-600" />,
    heading: "Collaboratively Build New Digital Business Models",
    description:
      "Develop always-connected platforms enhanced by AI-driven applications and software solutions.",
  },
  {
    icon: <FaCircleNotch className="w-28 h-28 text-purple-600" />,
    heading: "Redefine Workflows and Business Operations",
    description:
      "Boost efficiency and optimize processes using intelligent AI-powered agents.",
  },
  {
    icon: <FaShapes className="w-28 h-28 text-purple-600" />,
    heading: "Facilitate Smarter Decision Making",
    description:
      "Enable faster, more informed decisions by leveraging high-quality data through AI engineering.",
  },
];

export default function OurAiServices() {
  return (
    // <div className="bg-white">
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Driving
          <strong className="text-purple-600"> Enterprise Agility</strong> with
          AI
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
          At MAK Byte, our mission is to fast-track enterprise business
          strategies by harnessing AI-driven digital and data capabilities. We
          utilize AI to enhance enterprise agility in three core areas:
        </p>
        {/* <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div> */}
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
        {cardsData.map((item, i) => {
          return (
            <OurAiServicesCard
              icon={item.icon}
              description={item.description}
              heading={item.heading}
            />
          );
        })}
      </div>
    </div>
    // </div>
  );
}
