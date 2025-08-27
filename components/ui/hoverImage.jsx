"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const HoverImage = ({
  src,
  alt,
  width = 540,
  height = 405,
  className = "",
}) => {
  const imageRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const tiltX = (y * 10).toFixed(2);
    const tiltY = (x * -10).toFixed(2);
    const hoverHeight = 5;

    setTransform(
      `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${hoverHeight}px)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    );
  };

  return (
    <div
      className={`max-w-xl md:max-w-none md:w-full mx-auto mb-8 z-30 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={imageRef}
        className="rounded-lg shadow-mak max-w-full mx-auto h-auto transition-transform duration-500 ease-out overflow-hidden"
        style={{ transform }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HoverImage;
