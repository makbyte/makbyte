"use client";
import React, { useRef } from "react";

const items = [
  {
    title: "Expertise",
    text: "Our team comprises top-tier developers and consultants adept at leveraging the latest technologies and industry best practices.",
  },
  {
    title: "Tailored Solutions",
    text: "Every project undertaken by us is approached with a focus on customization, ensuring that the end product perfectly aligns with your business objectives.",
  },
  {
    title: "Client-Centric Approach",
    text: "We value collaboration and transparency, working closely with our clients throughout the development process to deliver solutions that exceed expectations.",
  },
  {
    title: "Innovation and Quality",
    text: "Innovation is at the core of our ethos. We prioritize quality in every aspect of our work, delivering solutions that are not just functional but also future-proof.",
  },
  {
    title: "Global Reach",
    text: "With a diverse clientele, we cater to businesses worldwide, bringing our expertise to various industries and geographical regions.",
  },
  {
    title: "End-to-End Support",
    text: "Beyond development, our commitment extends to providing comprehensive support and maintenance, ensuring your software remains efficient and up-to-date.",
  },
  {
    title: "Data Security & Compliance",
    text: "We adhere to stringent security measures and global compliance standards to safeguard your data and maintain user trust at every step.",
  },
  {
    title: "Scalable Architecture",
    text: "Our solutions are designed with scalability in mind, ensuring they grow seamlessly alongside your business without compromising performance.",
  },
];

export default function RotatingCarousel() {
  const carouselRef = useRef(null);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="w-full py-16 bg-gray-900 flex items-center justify-center overflow-hidden">
      <div
        ref={carouselRef}
        className="relative"
        style={{
          padding: "20px 0",
          width: "200px",
          height: "250px",
          transformStyle: "preserve-3d",
          animation: "spin 25s linear infinite",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute flex flex-col justify-center items-center text-center rounded-xl bg-white/5 border border-[#5D5DFF] backdrop-blur-md shadow-lg cursor-pointer text-white p-3 lg:p-4"
            style={{
              width: "200px",
              height: "220px",
              transform: `rotateY(calc(${index} * (360deg / ${items.length}))) translateZ(340px)`,
            }}
          >
            <h2 className="text-md text-[#5D5DFF] font-semibold mb-2">
              {item.title}
            </h2>
            <p className="text-gray-400 text-xs">{item.text}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: perspective(1000px) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}
