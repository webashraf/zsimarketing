"use client";

import { tabItems } from "@/constents/tabItems";
import { useState } from "react";

const DiscoverFleet = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-auto">
      {/* Tab Header */}
      <div className="flex border-b border-gray-300">
        {tabItems.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <p className="text-sm"> {tab.label}</p>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        <div></div>
        <div>
          <h2 className="text-3xl">{tabItems[activeTab].title}</h2>
          <p className="text-lg">{tabItems[activeTab].description}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFleet;
