import Link from "next/link";
import { title } from "process";

export default function ReusableCard({
  icon,
  description,
  heading,
  cardStyle,
  headingStyle,
  mediaStyle,
  title,
  btnLink,
}) {
  return (
    <div
      className={`relative flex ${cardStyle} space-x-3 gap-4 flex-col max-[700px]:items-start h-full rounded-lg bg-gray-800 ring-gray-900 p-8 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 
      hover:border-gray-400 hover:bg-gray-700 hover:text-gray-800 transition-colors duration-300`}
      data-aos="fade-right"
    >
      <div className="flex-shrink-0">
        {!title ? icon : ""}
        <strong className="text-purple-600 text-2xl">{title}</strong>
      </div>
      <div className="min-w-0 flex-1" style={{ margin: 0 }}>
        <span aria-hidden="true" className="absolute inset-0" />
        <p
          className={`text-xl  font-medium text-gray-200 hover:text-gray-800 ${headingStyle}`}
        >
          {heading}
        </p>
        <p className="text-lg mt-3 text-gray-400 hover:text-gray-600">
          {description}
        </p>
        {btnLink && (
          <Link
            className="btn-sm relative self-start text-white bg-purple-600 hover:bg-purple-700 mt-4 cursor-pointer"
            href={btnLink}
          >
            Schedule Demo
          </Link>
        )}
      </div>
    </div>
  );
}
