import React from "react";

const Background: React.FC = () => {
  return (
    <div
      className="absolute top-0 w-full h-[1200px] md:h-[902px] rounded-b-[800px] opacity-70 -z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3) 100%)",
      }}
    ></div>
  );
};

export default Background;
