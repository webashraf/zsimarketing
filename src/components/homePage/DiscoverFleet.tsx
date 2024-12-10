"use client";

import { tabItems } from "@/constents/tabItems";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaLuggageCart } from "react-icons/fa";
import CommonHeading from "../commonHeading/commonHeading";
import Slider from "../ui/Slider";

const DiscoverFleet = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-auto">
      <CommonHeading
        title="Discover Our Fleet"
        subTitle="Embark on a journey of luxury and sophistication as you discover our exquisite fleet of vehicles designed to redefine your travel experience. Each vehicle in our fleet is a testament to our commitment to elegance, comfort, and reliability. Here's a glimpse into the diverse offerings that await you."
      />
      {/* Tab Header */}
      <div className="flex border-gray-300">
        {tabItems.map((tab, index) => (
          <button
            key={index}
            className={`py-3 px-4 mr-1 text-lg font-semibold transition-all duration-300 ease-in-out transform ${
              activeTab === index
                ? "bg-[#da9100] text-white"
                : "bg-[#ffd787] hover:bg-[#da9100] hover:text-white transition-all duration-300 ease-in-out transform"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <p className="text-sm">{tab.label}</p>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-10  bg-[#da9100] text-white transition-all duration-300 ease-in-out ">
        <div className="space-y-5 ">
          <div className="flex  justify-center gap-5">
            <div className="w-[50%] space-y-5">
              <h2 className="text-3xl">{tabItems[activeTab].title}</h2>
              <p className="text-lg">{tabItems[activeTab].description}</p>
              <div>
                <div className="flex items-center gap-2 text-lg">
                  <BiUser size={25} />
                  <span className="font-semibold font-mulish">
                    Passenger Capacity:
                  </span>{" "}
                  {tabItems[activeTab].totalPassenger}
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <FaLuggageCart size={25} />
                  <span className="font-semibold font-mulish">
                    Luggage Capacity:
                  </span>{" "}
                  {tabItems[activeTab].totalLuggage}
                </div>
              </div>
            </div>
            <Slider carImages={tabItems[activeTab].images} />
          </div>
          <div>
            <h2 className="text-3xl">Features:</h2>
            <ul>
              <li></li>
              {tabItems[activeTab].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-1">
                  {/* <GoDotFill size={10} /> */}
                  <span className="font-semibold font-mulish">
                    {feature.title}:
                  </span>
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-black px-6 py-3 text-md">
            Book Now Pay Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFleet;
