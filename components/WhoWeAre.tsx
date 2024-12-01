import React from "react";
import Image from "next/image";
import { HomeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-12" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 content-wrapper">
        <div className="w-full lg:w-1/2">
          <h4
            className="font-poppins text-[19.4px] font-medium leading-[29.1px] tracking-[0.15em] text-left"
            style={{ color: "#4361EE" }}
          >
            WHO ARE WE
          </h4>
          <h2
            className="font-poppins text-[39.8px] font-semibold leading-[47px] text-left mt-4"
            style={{ color: "#2B2B2B" }}
          >
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p
            className="font-poppins text-[16px] font-normal leading-[26px] text-left mt-4"
            style={{ color: "#808080" }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <div
              className="flex items-center p-4 rounded-[30px] shadow-md w-full lg:w-[400px]"
              style={{
                background: "#FFFFFF",
                boxShadow: "4px 10px 30px 0px #0000000F",
              }}
            >
              <HomeIcon className="h-10 w-10 text-[#4361EE]" />

              <div className="ml-6">
                <h4
                  className="font-poppins text-[19.4px] font-medium leading-[29.1px] text-left"
                  style={{ color: "#4361EE" }}
                >
                  Lorem ipsum has been the
                </h4>
                <p
                  className="font-poppins text-[16px] font-normal leading-[26px] text-left mt-1"
                  style={{ color: "#808080" }}
                >
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
            <div
              className="flex items-center p-4 rounded-[30px] shadow-md w-full lg:w-[400px]"
              style={{
                background: "#FFFFFF",
                boxShadow: "4px 10px 30px 0px #0000000F",
              }}
            >
              <PencilSquareIcon className="h-10 w-10 text-[#4361EE]" />

              <div className="ml-6">
                <h4
                  className="font-poppins text-[19.4px] font-medium leading-[29.1px] text-left"
                  style={{ color: "#4361EE" }}
                >
                  Lorem ipsum has been the
                </h4>
                <p
                  className="font-poppins text-[16px] font-normal leading-[26px] text-left mt-1"
                  style={{ color: "#808080" }}
                >
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-full lg:w-1/2 flex flex-row items-center gap-4 pt-10 lg:pt-0 justify-center">
          <div
            className="relative w-[160px] h-[300px] md:w-[280px] md:h-[500px] rounded-[30px] lg:ml-2"
            style={{
              boxShadow: "4px 10px 30px 0px #00000026",
              marginTop: "20px",
            }}
          >
            <Image
              src="/Image1.jpeg"
              alt="Property"
              layout="fill"
              className="rounded-[30px] object-cover"
              priority
            />
          </div>

          <div className="relative flex flex-col items-center">
            <div
              className="relative w-[130px] h-[150px] md:w-[277px] md:h-[280px] rounded-[30px]"
              style={{
                boxShadow: "4px 10px 30px 0px #00000026",
                marginBottom: "20px",
                marginTop: "-60px",
              }}
            >
              <Image
                src="/Image2.jpeg"
                alt="Bedroom"
                layout="fill"
                className="rounded-[30px] object-cover"
                priority
              />
            </div>
            <div
              className="relative w-[130px] h-[120px] md:w-[277px] md:h-[180px] rounded-[30px]"
              style={{ boxShadow: "4px 10px 30px 0px #00000026" }}
            >
              <Image
                src="/Image3.jpeg"
                alt="Living Room"
                layout="fill"
                className="rounded-[30px] object-cover"
                priority
              />
              <div
                className="absolute w-[60px] h-[60px] opacity-50 top-[90px] sm:top-[160px]"
                style={{
                  left: "30%",
                  transform: "translateX(-50%) rotate(50deg)",
                  background:
                    "linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
