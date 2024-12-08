/* eslint-disable @typescript-eslint/no-explicit-any */
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import CommonHeading from "../commonHeading/commonHeading";

const QuickPriceCheck = () => {
  const quickPriceData = [
    {
      icon: <BsClock size={45} />,
      title: "Search",
      minPrice: 10,
    },
    {
      icon: <BiSolidPlaneTakeOff size={45} />,
      title: "LGA AIRPORT",
      minPrice: 20,
    },
    {
      icon: <BiSolidPlaneTakeOff size={45} />,
      title: "JFK AIRPORT",
      minPrice: 15,
    },
    {
      icon: <BiSolidPlaneTakeOff size={45} />,
      title: "EWR AIRPORT",
      minPrice: 30,
    },
  ];

  return (
    <div className="mb-10">
      <CommonHeading
        title="Quick Price Check
"
        position="center"
      />

      <div className="flex justify-center gap-2 ">
        {quickPriceData.map((quickPriceItem: any) => (
          <div
            key={quickPriceItem.title}
            className="flex justify-center items-center gap-3 bg-[#da9100] p-5 text-white w-full hover:bg-black hover:text-white transition-all duration-300"
          >
            <div>{quickPriceItem.icon}</div>
            <div className="">
              <h4 className="text-[22px] font-taviraj mb-5">Hourly Rate</h4>
              <h5 className="text-[20px] font-taviraj">Start from $60</h5>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-Epilogue text-[80px] text-center mt-12">
        RPC LIMO NATIONWIDE
      </h2>
      <h5 className="text-[35px] font-mulish text-center mt-12">
        Headquarters in New York serving multiple cities.
      </h5>
      <div className="flex gap-3 items-center justify-center mt-12">
        <button className="bg-[#da9100] font-mulish px-4 py-2 text-[20px] text-white hover:bg-black hover:text-white transition-all duration-300">
          View Price & Book A Ride
        </button>
        <button className="bg-[#da9100] font-mulish px-4 py-2 text-[20px] text-white hover:bg-black hover:text-white transition-all duration-300">
          Toll free: 1-833 711 4606
        </button>
      </div>
    </div>
  );
};

export default QuickPriceCheck;
