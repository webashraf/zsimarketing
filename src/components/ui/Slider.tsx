"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = ({ carImages }: { carImages: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("currentIndex", currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carImages?.length]);

  return (
    <div className="relative w-[600px] max-w-3xl  overflow-hidden">
      <div
        className="w-[600px] h-[300px] flex transition-transform duration-[1500ms] ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 600}px)`, // Adjust to move images horizontally
        }}
      >
        {carImages?.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[600px] h-[300px]">
            <Image
              src={image}
              width={600} // Set width to 600px for each image
              height={400} // Set height to 300px for each image
              alt={`Slide ${index}`}
              className="object-cover w-full" // Ensure images cover the area correctly
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
