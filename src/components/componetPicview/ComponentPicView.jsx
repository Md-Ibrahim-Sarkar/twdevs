"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ComponentPicView = ({ data }) => {
  const [styles, setStyles] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setStyles({
      transform: "scale(1.9)",
      transformOrigin: `${xPercent}% ${yPercent}%`,
      transition: "transform 0.3s ease-in-out, transform-origin 0.3s ease-in-out",
    });
  };

  const handleMouseLeave = () => {
    setStyles({
      transform: "scale(1)",
      transformOrigin: "50% 50%",
      transition: "transform 0.3s ease-in-out, transform-origin 0.3s ease-in-out",
    });
  };


  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
      <Link href={data?.link || "#"} target="_blank">
        <div
          className="relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={data?.image || "https://placehold.co/600x400"}
            alt={data?.name || "Zoom Effect"}
            className="w-full h-auto transition-transform ease-in-out duration-600 rounded-tr rounded-tl"
            style={styles}
            width={500}
            height={300}
            priority={false}
          />
        </div>
        <div className="p-4 dark:bg-black border-t">
          <h2 className="text-xl font-semibold">{data?.name || "Untitled"}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ComponentPicView;
