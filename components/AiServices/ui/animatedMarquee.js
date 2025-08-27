import React from "react";

const AnimatedMarquee = ({ children }) => {
  return (
    <>
      <div className="relative mt-16 ">
        <div className="animate-marquee flex gap-6">{children}</div>
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
    </>
  );
};

export default AnimatedMarquee;
