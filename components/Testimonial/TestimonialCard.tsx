import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  avatar,
  rating,
}) => {
  return (
    <div className="relative bg-white rounded-[30px] shadow-lg p-16 w-[90%] max-w-[500px] mx-auto">
      <div
        className="absolute"
        style={{
          width: "60px",
          height: "60px",
          top: "-30px",
          left: "-20px",
          borderRadius: "50%",
          opacity: "0.5",
          background:
            "linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)",
          transform: "rotate(30deg)",
          zIndex: "-1",
        }}
      ></div>

      <div
        className="flex items-center"
        style={{
          color: "#FFC70066",
          fontSize: "120px",
          lineHeight: "0.3",
          filter: "blur(0.3px)",
        }}
      >
        <span>“</span>
      </div>

      <p className="font-poppins text-[19.4px] font-medium leading-[29.1px] text-[#2B2B2B] mt-[-10px]">
        {quote}
      </p>

      <hr className="border-t-[1px] border-[#D4D4D4] my-4" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={author}
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
          <p className="font-poppins text-[19.4px] font-medium text-[#2B2B2B]">
            {author}
          </p>
        </div>

        <div className="flex">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                className={`text-yellow-400 ${
                  index >= rating ? "text-gray-300" : ""
                }`}
              >
                ★
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
