import React from "react";
import Image from "next/image";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <div className="relative w-full max-w-[340px] mx-auto sm:mt-0 mt-5">
      <div
        className="relative w-full h-[240px] rounded-[30px] shadow-lg overflow-hidden"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
          boxShadow: "10px 10px 30px 0px #00000033",
        }}
      >
        <Image src={image} alt={title} fill className="object-cover" />

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div
          className="absolute top-0 left-11 flex flex-col items-center justify-center rounded-[0px_0px_10px_10px] shadow-md"
          style={{
            width: "57px",
            height: "50px",
            background: "#FFFFFF",
            boxShadow: "4px 4px 15px 0px #00000040",
          }}
        >
          <span className="font-poppins text-[19.4px] font-medium text-[#2B2B2B] leading-[29.1px]">
            {date.split(" ")[0]}
          </span>
          <span className="font-poppins text-[14px] font-normal text-[#808080] leading-[20px]">
            {date.split(" ")[1]}
          </span>
        </div>
      </div>

      <div className="mt-6 text-left">
        <h3 className="font-poppins text-[27.6px] font-medium leading-[41.4px] text-white">
          {title}
        </h3>
        <p className="font-poppins text-[16px] font-normal leading-[26px] text-[#D4D4D4] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
