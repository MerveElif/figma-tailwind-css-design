import React, { useState } from "react";
import TestimonialCard from "./Testimonial/TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
      author: "Barbara D. Smith",
      avatar: "/profile.jpeg",
      rating: 4,
    },
    {
      quote:
        "This is another testimonial about how amazing the product or service is. It really made a difference in my life.",
      author: "John Doe",
      avatar: "/profile.jpeg",
      rating: 5,
    },
    {
      quote:
        "I have tried many options before, but this one really stands out. Highly recommended!",
      author: "Jane Williams",
      avatar: "/profile.jpeg",
      rating: 3,
    },
    {
      quote:
        "Excellent quality and great customer service. I will definitely recommend this to my friends.",
      author: "Michael Brown",
      avatar: "/profile.jpeg",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="py-12 lg:h-[85vh] flex items-center justify-center content-wrapper"
      id="services"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start content-wrapper">
        {/* Sol Bölüm */}
        <div className="max-w-md text-center lg:text-left">
          <h4 className="font-poppins text-[19.4px] font-medium leading-[29.1px] tracking-[0.15em] text-[#4361EE]">
            TESTIMONIALS
          </h4>
          <h2 className="font-poppins text-[39.8px] font-semibold leading-[47px] text-[#2B2B2B] mt-4">
            Look What Our Customers Say!
          </h2>
          <p className="font-poppins text-[16px] font-normal leading-[26px] text-[#2B2B2B] mt-4">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </p>
          {/* Navigasyon */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-[40px] h-[40px] border border-[#4361EE] text-[#4361EE] rounded-full flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-[40px] h-[40px] border border-[#4361EE] text-[#4361EE] rounded-full flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Sağ Bölüm */}
        <div className="mt-8 lg:mt-0 flex justify-center">
          <TestimonialCard {...testimonials[currentIndex]} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
