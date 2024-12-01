import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const HomePage: React.FC = () => {
  return (
    <section className="z-10 mt-12" id="home">
      <h4 className="font-poppins text-[19.4px] font-medium leading-[29.1px] tracking-[0.15em] text-left text-[#4361EE]">
        REAL ESTATE
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-6 gap-2">
        <div className="flex flex-col space-y-5">
          <h1 className="font-poppins text-[39px] md:text-[57.3px] font-semibold leading-tight text-left text-[#0B090A]">
            Find a perfect home you love..!
          </h1>

          <p className="font-poppins text-base font-normal leading-7 text-left text-[#808080]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley
          </p>

          <div className="relative mx-auto w-full h-[340px] px-6">
            <div
              className="absolute"
              style={{
                width: "60px",
                height: "60px",
                top: "-30px",
                right: "-10px",
                borderRadius: "50%",
                opacity: "0.5",
                background:
                  "linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)",
                transform: "rotate(30deg)",
                zIndex: "-1",
              }}
            ></div>
            <Swiper
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              navigation={{
                prevEl: "#prev-button",
                nextEl: "#next-button",
              }}
              grabCursor={true}
              modules={[Navigation, Pagination]}
              className="w-full h-full"
              style={{
                borderRadius: "20px",
                boxShadow: "10px 10px 40px 0px #00000033",
              }}
            >
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src="/hotel.jpeg"
                    alt="Room 1"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-tl-[20px]"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src="/hotel.jpeg"
                    alt="Room 2"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-tl-[20px]"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div
              id="prev-button"
              className="absolute left-[-2px] z-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition"
            >
              <span className="text-[#AAAAAA] text-lg">{`<`}</span>
            </div>
            <div
              id="next-button"
              className="absolute right-[-2px] z-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-[#AAAAAA] rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition"
            >
              <span className="text-[#AAAAAA] text-lg">{`>`}</span>
            </div>

            <div className="custom-pagination mt-4 flex justify-center space-x-4">
              <span className=""></span>
              <span className=""></span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex flex-col w-full lg:w-[420px] max-w-[420px] mx-auto lg:ml-auto lg:mx-0 mt-6 lg:mt-0">
          <div className="relative flex items-center px-6 py-4 border-b border-[#AAAAAA] rounded-t-lg">
            <button className="font-poppins text-lg font-medium leading-6 text-center text-[#3A0CA3] w-1/2">
              For Sale
            </button>
            <button className="font-poppins text-lg font-medium leading-6 text-center text-[#808080] w-1/2">
              For Rent
            </button>

            <div className="absolute bottom-0 left-16 w-1/4 h-1 bg-[#3A0CA3]"></div>
          </div>

          <form className="p-6 space-y-6 flex-grow mt-10">
            <div className="space-y-6">
              <div className="flex items-center px-4 w-full h-14 bg-[#D4D4D433] border border-[#D4D4D4] rounded-lg">
                <input
                  type="text"
                  placeholder="New York, San Francisco, etc"
                  className="w-full bg-transparent outline-none font-poppins text-base font-normal leading-6 text-left text-[#AAAAAA]"
                />
              </div>
              <select className="w-full py-3 px-4 bg-[#D4D4D433] border border-[#D4D4D4] rounded-lg outline-none font-poppins text-base font-normal leading-6 text-[#6D6A7580]">
                <option>Select Property Type</option>
              </select>
              <select className="w-full py-3 px-4 bg-[#D4D4D433] border border-[#D4D4D4] rounded-lg outline-none font-poppins text-base font-normal leading-6 text-[#6D6A7580]">
                <option>Select Rooms</option>
              </select>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <AdjustmentsHorizontalIcon className="h-6 w-6 text-[#3A0CA3]" />
                  <span className="font-poppins text-sm font-normal leading-6 text-[#3A0CA3]">
                    Advanced Search
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="p-6 mb-10">
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 bg-[#3A0CA3] border border-[#BFBDC1] rounded-full text-white font-poppins text-base font-medium leading-6 hover:bg-[#341E9B] transition"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-white mr-2" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
