import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const HeaderTop: React.FC = () => {
  return (
    <div className="bg-primary text-textLight px-0 lg:px-24">
      <div className="container hidden md:flex flex-col md:flex-row justify-between items-center py-2">
        <div className="flex items-center space-x-2 font-poppins text-smallParagraph font-normal mb-2 md:mb-0">
          <MapPinIcon className="h-5 w-5 text-textLight" />
          <span>Lorem Ipsum has been the industry's standard dummy</span>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-16 font-poppins text-smallParagraph font-normal">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-textLight" />
            <a
              href="tel:+901234567"
              className="hover:underline"
              aria-label="Phone number"
            >
              +90123 45 67
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="h-5 w-5 text-textLight" />
            <a
              href="mailto:merveelifsarac@gmail.com"
              className="hover:underline"
              aria-label="Email address"
            >
              merveelifsarac@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
