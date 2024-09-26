export default function ReusableCard({
  icon,
  description,
  heading,
  cardStyle,
  headingStyle,
  mediaStyle,
}) {
  console.log(cardStyle, "desc");

  return (
    <div
      className={`relative flex ${cardStyle} space-x-3 max-[700px]:flex-col max-[700px]:items-start h-full rounded-lg bg-gray-800 ring-gray-900 p-8 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 
      hover:border-gray-400 hover:bg-gray-700 hover:text-gray-800 transition-colors duration-300`}
      data-aos="fade-right"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="min-w-0 flex-1" style={{ margin: 0 }}>
        <span aria-hidden="true" className="absolute inset-0" />
        <p
          className={`text-xl font-medium text-gray-200 hover:text-gray-800 ${headingStyle}`}
        >
          {heading}
        </p>
        {description.length === 1 ? (
          <p className="text-lg text-gray-400 hover:text-gray-600">
            {description}
          </p>
        ) : (
          <ul className="ml-6 list-disc text-gray-400 hover:text-gray-600 list-item text-lg">
            {description.map((val, i) => (
              <li key={i} className="mb-2">
                {val}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
