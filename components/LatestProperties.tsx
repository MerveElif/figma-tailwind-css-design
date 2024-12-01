import React from "react";
import PropertyCard from "./Card/PropertyCard";

const LatestProperties: React.FC = () => {
  const properties = [
    {
      image: "/latest1.jpeg",
      price: "$5,970",
      title: "Tranquil Haven in the Woods",
      location: "103 Wright CourtBurien, WA 98168",
      beds: 4,
      baths: 3,
      badge: "Popular",
    },
    {
      image: "/latest2.jpeg",
      price: "$1,970",
      title: "Serene Retreat by the Lake",
      location: "1964 Jehovah Drive, VA 22408",
      beds: 3,
      baths: 2,
      badge: "New Listing",
    },
    {
      image: "/latest3.jpeg",
      price: "$3,450",
      title: "Charming Cottage in the Meadow",
      location: "1508 Centennial Farm RoadHarlan, 51537",
      beds: 4,
      baths: 4,
      badge: "Discounted Price",
    },
  ] as const;

  return (
    <section className="py-12" id="listings">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-left">
            <h4 className="font-poppins text-[19.4px] font-medium leading-[29.1px] tracking-[0.15em] text-left text-[#4361EE]">
              CHECKOUT OUR NEW
            </h4>
            <h2 className="font-poppins text-[39.8px] font-semibold leading-[47px] text-[#2B2B2B] mt-4">
              Latest Listed Properties
            </h2>
            <p className="font-poppins text-[16px] font-normal leading-[26px] text-[#808080] mt-4">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="px-[30px] py-[10px] text-[#3A0CA3] bg-white border border-[#3A0CA3] rounded-[30px] font-poppins text-base font-medium">
              All
            </button>
            <button className="px-[30px] py-[10px] text-white bg-[#3A0CA3] rounded-[30px] font-poppins text-base font-medium">
              Sell
            </button>
            <button className="px-[30px] py-[10px] text-[#3A0CA3] bg-white border border-[#3A0CA3] rounded-[30px] font-poppins text-base font-medium">
              Rent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;
