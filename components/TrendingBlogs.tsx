import React, { useState } from "react";
import BlogCard from "./TrendingBlogs/BlogCard";

const TrendingBlogs: React.FC = () => {
  const blogs = [
    {
      image: "/blog1.jpeg",
      date: "28 Tue",
      title: "Top 10 Home Buying Mistakes to Avoid",
      description:
        "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.",
    },
    {
      image: "/blog2.jpeg",
      date: "08 Mon",
      title: "How to Stage Your Home for a Quick Sale",
      description:
        "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    },
    {
      image: "/blog3.jpeg",
      date: "26 Wed",
      title: "5 Tips for First-Time Home Sellers",
      description:
        "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    },
    {
      image: "/blog2.jpeg",
      date: "12 Fri",
      title: "How to Increase Your Property Value",
      description:
        "Proin vehicula metus vel elit efficitur, nec pharetra lorem euismod.",
    },
    {
      image: "/blog3.jpeg",
      date: "19 Sun",
      title: "Top 5 Reasons to Invest in Real Estate",
      description: "Morbi in lacus nec ipsum gravida tincidunt nec quis odio.",
    },
    {
      image: "/blog1.jpeg",
      date: "01 Mon",
      title: "Understanding Real Estate Market Trends",
      description:
        "Donec vel turpis convallis, tincidunt ipsum vel, interdum erat.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1) // 0 ve 1 grubu arasında geçiş
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1) // 1 ve 0 grubu arasında geçiş
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 px-0 lg:px-40 bg-[#3A0CA3]" id="blogs">
      <div className="container mx-auto text-center">
        <h4 className="font-poppins text-[19.4px] font-medium leading-[29.1px] tracking-[0.15em] text-white">
          WHAT’S TRENDING
        </h4>
        <h2 className="font-poppins text-[39.8px] font-semibold leading-[47px] text-white mt-2">
          Latest Blogs & Posts
        </h2>

        <div className="relative mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs
              .slice(currentIndex * 3, currentIndex * 3 + 3)
              .map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
          </div>

          {/* Alt Oklar ve Çizgiler */}
          <div className="sm:flex hidden flex-col items-center mt-24">
            <div className="flex justify-between items-center w-2/4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition"
              >
                <span className="text-gray-600 text-lg">{`<`}</span>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition"
              >
                <span className="text-gray-600 text-lg">{`>`}</span>
              </button>
            </div>

            <div className="flex space-x-4 mt-10">
              {[...Array(2)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`cursor-pointer w-24 h-1 rounded-full transition-all ${
                    currentIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBlogs;
