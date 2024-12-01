import React from "react";
import Image from "next/image";

const HappyCustomers: React.FC = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto flex flex-wrap justify-center gap-8 items-center content-wrapper">
        <div
          className="flex items-center space-x-4 bg-white rounded-full px-6 w-[360px] h-[100px] "
          style={{
            boxShadow: "10px 30px 50px 0px #0000000D",
          }}
        >
          <div className="flex -space-x-3">
            <Image
              src="/hotel.jpeg"
              alt="Customer 1"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full border-2 border-white"
            />
            <Image
              src="/hotel.jpeg"
              alt="Customer 2"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full border-2 border-white"
            />
            <Image
              src="/hotel.jpeg"
              alt="Customer 3"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full border-2 border-white"
            />
            <Image
              src="/hotel.jpeg"
              alt="Customer 4"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full border-2 border-white"
            />
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
              <span className="font-medium text-base text-gray-600 p-6">+</span>
            </div>
          </div>

          <div>
            <h3 className="font-poppins text-[19.4px] font-medium leading-[29.1px] text-left text-[#2B2B2B] ml-7">
              72k+ Happy Customers
            </h3>
          </div>
        </div>

        <div
          className="flex items-center space-x-4 bg-white rounded-full  px-6 w-[360px] md:w-[300px] h-[100px] "
          style={{ boxShadow: "10px 30px 50px 0px #0000000D" }}
        >
          <Image
            src="/hotel.jpeg"
            alt="Listing Icon"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full"
          />
          <h3 className="font-poppins text-[19.4px] font-medium leading-[29.1px] text-left text-[#2B2B2B]">
            200+ New Listings Everyday!
          </h3>
        </div>
        <div
          className="hidden lg:flex absolute rounded-full opacity-50"
          style={{
            width: "100px",
            height: "100px",
            top: "920px",
            left: "86px",
            transform: "rotate(320deg)",
            background:
              "linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default HappyCustomers;
