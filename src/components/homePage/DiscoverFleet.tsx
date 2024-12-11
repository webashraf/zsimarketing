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
    <div className="w-full mx-auto lg:px-0 px-5">
      <CommonHeading
        title="Discover Our Fleet"
        subTitle="Embark on a journey of luxury and sophistication as you discover our exquisite fleet of vehicles designed to redefine your travel experience. Each vehicle in our fleet is a testament to our commitment to elegance, comfort, and reliability. Here's a glimpse into the diverse offerings that await you."
      />
      {/* Tab Header */}
      <div className="flex lg:flex-row flex-col border-gray-300">
        {tabItems.map((tab, index) => (
          <button
            key={index}
            className={`py-3 px-4 lg:mr-1 text-lg font-semibold transition-all duration-300 ease-in-out transform ${
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
      <div className="lg:p-10 p-5  bg-[#da9100] text-white transition-all duration-300 ease-in-out ">
        <div className="space-y-5 ">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-5">
            <div className="lg:w-[50%] w-full space-y-5">
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
            <div>
              {tabItems[activeTab].features.map((feature, i) => (
                <p key={i} className="">
                  {/* <GoDotFill size={10} /> */}
                  <strong className="inline-block text-nowrap ">
                    {feature.title}
                  </strong>
                  : {feature.description}
                </p>
              ))}
            </div>
          </div>

          <button className="bg-black hover:bg-white hover:text-black px-6 py-3 text-md">
            Book Now Pay Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFleet;
