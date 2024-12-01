import React from "react";
import { HomeIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F8FF] w-full">
      <div className="container mx-auto px-2 md:px-10 lg:px-44 py-10 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 mb-4">
            <div className="bg-primary p-2 rounded-full">
              <HomeIcon className="h-8 w-8 text-white" />
            </div>
            <span className="font-poppins text-[19.4px] font-semibold text-[#0B090A]">
              Rezilla
            </span>
          </div>
          <p className="font-poppins text-[16px] font-medium text-[#808080] sm:text-[#2B2B2B] leading-[24px]">
            Lorem ipsum has been the industry standard dummy text.
          </p>
          <div className="mt-4">
            <a
              href="tel:+901234567"
              className="flex justify-center md:justify-start items-center text-[16px] font-medium text-[#808080] sm:text-[#2B2B2B] leading-[24px] mb-2 hover:underline"
            >
              <PhoneIcon className="h-5 w-5 mr-2 text-[#808080] sm:text-[#2B2B2B]" />
              +90123 45 67
            </a>
            <a
              href="mailto:merveelifsarac@gmail.com"
              className="flex justify-center md:justify-start items-center text-[16px] font-medium text-[#808080] sm:text-[#2B2B2B] leading-[24px] hover:underline"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2 text-[#808080] sm:text-[#2B2B2B]" />
              merveelifsarac@gmail.com
            </a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-poppins text-[19.4px] font-semibold leading-[29.1px] text-[#0B090A] mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Home", url: "/#home" },
              { name: "About", url: "/#about" },
              { name: "Listings", url: "/#listings" },
              { name: "Services", url: "/#services" },
              { name: "Blogs", url: "/#blogs" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="font-poppins text-[16px] font-medium text-[#2B2B2B] leading-[24px] hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="font-poppins text-[19.4px] font-semibold leading-[29.1px] text-[#0B090A] mb-4">
            Discovery
          </h4>
          <ul className="space-y-2">
            {["Canada", "United States", "Germany", "Africa", "India"].map(
              (location) => (
                <li
                  key={location}
                  className="font-poppins text-[16px] font-medium text-[#2B2B2B] leading-[24px]"
                >
                  {location}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-poppins text-[19.4px] font-semibold leading-[29.1px] text-[#0B090A] mb-4">
            Subscribe to our Newsletter!
          </h4>
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-[45px] rounded-[30px] border border-[#E0E0E0] px-4 text-sm focus:outline-none"
            />
            <button className="absolute right-2 top-[5px] w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white">
              →
            </button>
          </div>
          <p className="font-poppins text-[16px] font-medium text-[#2B2B2B] leading-[24px] mb-2">
            Follow Us on
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-lg hover:text-[#0B090A]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-lg hover:text-[#0B090A]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-lg hover:text-[#0B090A]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#000000] py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white px-2 md:px-12 lg:px-44">
          <p className="font-poppins text-center md:text-left">
            © Company – All rights reserved
          </p>
          <div className="space-x-4 mt-4 md:mt-0 hidden sm:flex">
            <a href="#" className="font-poppins hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="font-poppins hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="font-poppins hover:underline">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
