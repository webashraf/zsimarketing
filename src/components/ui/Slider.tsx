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
    <div className="relative lg:w-[600px] w-full max-w-3xl  overflow-hidden ">
      <div
        className="lg:w-[600px] lg:h-[300px] flex transition-transform duration-[1500ms] ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carImages?.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[100%] lg:h-[300px]">
            <Image
              src={image}
              width={600}
              height={400}
              alt={`Slide ${index}`}
              className="object-cover w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
