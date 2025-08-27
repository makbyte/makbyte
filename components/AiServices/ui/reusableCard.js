import Link from "next/link";

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
      className="group [perspective:2000px] h-full text-left"
      data-aos="fade-right"
    >
      <div
        className={`relative flex ${cardStyle} gap-4 flex-col max-[700px]:items-start
        h-full rounded-xl bg-gray-800 ring-gray-900 p-8 shadow-md border border-transparent
        transform-gpu origin-top [transform-style:preserve-3d] [will-change:transform]
        
        transition-all duration-500 ease-out
        
        hover:[transform:rotateX(-6deg)] hover:shadow-2xl hover:shadow-purple-900/20
        hover:border-purple-500 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900
        `}
      >
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none"></div>

        {/* Icon / Title */}
        <div className="flex-shrink-0 z-10 m-0">
          {!title ? icon : ""}
          <strong className="text-purple-600 text-2xl">{title}</strong>
        </div>

        {/* Content */}
        <div
          className="min-w-0 flex-1 z-10 flex flex-col justify-between"
          style={{ margin: 0 }}
        >
          <span aria-hidden="true" className="absolute inset-0" />
          <p
            className={`text-xl text-left font-medium text-gray-200 ${headingStyle} transition-colors duration-300 group-hover:text-white`}
          >
            {heading}
          </p>
          <p className="text-lg mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
            {description}
          </p>

          {btnLink && (
            <Link
              className="btn-sm relative self-start text-white bg-purple-600 hover:bg-purple-700 mt-4 cursor-pointer rounded-lg px-4 py-2 transition-transform duration-300 transform hover:scale-105"
              href={btnLink}
            >
              Schedule Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
