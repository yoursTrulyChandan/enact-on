import React, { useState, useEffect } from "react";
import { offerData } from "../data/data";

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
  "https://via.placeholder.com/600x400?text=Image+4",
];

const Offer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-4/6 relative flex flex-col justify-center min-h-[480px] my-24">
      {offerData.map((item, index) => (
        <div
          key={index}
          className={`w-full transition-transform duration-1000 relative flex items-center text-black ${
            index === currentImageIndex ? "block" : "hidden"
          }
            `}
        >
          <img
            src={item.img}
            className={`z-1 absolute w-full h-auto ${
              index === currentImageIndex ? "static" : "absolute"
            }`}
          />
          <div className="z-10 flex flex-col items-center justify-center h-full w-full gap-8">
            <p className="font-normal text-4xl underline">ONLINE ONLY</p>
            <div className="max-w-md break-words">
              <span className="font-normal text-xl">
                GET {item.discount}% OFF YOUR ORDER OF $50 OR MORE Use code
              </span>
              <span className="font-extrabold text-xl">
                “{item.couponCode}”
              </span>
            </div>
            <div className="border-[3px] border-black px-10 py-2 text-2xl font-normal">
              Shop Now
            </div>
          </div>
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-16 flex justify-center mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full z-10 border-[1px] border-gray-500  mx-2 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
