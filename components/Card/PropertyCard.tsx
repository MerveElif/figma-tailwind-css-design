import React from "react";
import Image from "next/image";
import {
  FireIcon,
  HomeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const badgeColors = {
  Popular: {
    bg: "bg-[#FFE1E1]",
    text: "text-[#FF1111]",
    icon: "text-[#FF1111]",
  },
  "New Listing": {
    bg: "bg-[#E1EDFF]",
    text: "text-[#0052FF]",
    icon: "text-[#0052FF]",
  },
  "Discounted Price": {
    bg: "bg-[#E1FFE1]",
    text: "text-[#00A000]",
    icon: "text-[#00A000]",
  },
} as const;

type BadgeType = keyof typeof badgeColors;

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  badge?: BadgeType;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  title,
  location,
  beds,
  baths,
  badge,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative w-full sm:w-[300px] lg:w-[340px] h-[280px] sm:h-[300px] lg:h-[340px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-[30px]"
        />
        {badge && (
          <div
            className={`absolute top-[220px] sm:top-[240px] lg:top-[268px] left-[20px] sm:left-[25px] lg:left-[30px] px-[16px] sm:px-[20px] lg:px-[24px] py-[8px] sm:py-[10px] text-sm font-medium rounded-[20px] ${badgeColors[badge].bg}`}
          >
            <div className="flex items-center gap-2">
              {badge === "Popular" && (
                <FireIcon
                  className={`w-[16px] sm:w-[18px] lg:w-[20px] h-[18px] sm:h-[20px] lg:h-[22.51px] ${badgeColors[badge].icon}`}
                />
              )}
              {badge === "New Listing" && (
                <HomeIcon
                  className={`w-[16px] sm:w-[18px] lg:w-[20px] h-[18px] sm:h-[20px] lg:h-[22.51px] ${badgeColors[badge].icon}`}
                />
              )}
              {badge === "Discounted Price" && (
                <CheckCircleIcon
                  className={`w-[16px] sm:w-[18px] lg:w-[20px] h-[18px] sm:h-[20px] lg:h-[22.51px] ${badgeColors[badge].icon}`}
                />
              )}
              <span
                className={`font-poppins text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[20px] sm:leading-[22px] lg:leading-[24px] ${badgeColors[badge].text}`}
              >
                {badge}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="py-4 text-left">
        <p className="font-poppins text-[22px] sm:text-[24px] lg:text-[27.6px] font-semibold leading-[32px] sm:leading-[36px] lg:leading-[41.4px] text-[#2B2B2B]">
          {price}
        </p>

        <h3 className="font-poppins text-[16px] sm:text-[18px] lg:text-[19.4px] font-medium leading-[24px] sm:leading-[26px] lg:leading-[29.1px] text-[#2B2B2B] mt-1">
          {title}
        </h3>

        <p className="font-poppins text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#808080] mt-1">
          {location}
        </p>

        <div className="flex justify-start items-center gap-4 mt-3">
          <div className="flex items-center gap-2">
            <HomeIcon className="w-[24px] sm:w-[26px] lg:w-[30px] h-[18px] sm:h-[20px] lg:h-[21.5px] text-[#2B2B2B]" />
            <span className="font-poppins text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#2B2B2B]">
              {beds} Beds
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-[24px] sm:w-[26px] lg:w-[30px] h-[18px] sm:h-[20px] lg:h-[21.5px] text-[#2B2B2B]" />
            <span className="font-poppins text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#2B2B2B]">
              {baths} Bath
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
