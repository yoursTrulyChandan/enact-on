import React, { useState } from 'react';
import prev from "../assets/Expand_left_double_light.png";
import next from "../assets/Expand_right_double_light.png"

const Carousel = ({ items, renderItem, cardWidth, itemsToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const totalWidth = cardWidth * itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="relative overflow-hidden max-w-fit px-10">
      <div
        className="flex relative transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${(currentIndex * cardWidth)}px)`,
          width: `${totalWidth}px`,
        }}
      >
        {items.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
          <div
            key={index}
            className="flex"
            style={{ minWidth: `${cardWidth}px` }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      <button
        className="absolute inset-y-0 left-0 flex items-center justify-center w-12  mb-10 text-yellow-600 hover:text-yellow-300"
        onClick={prevSlide}
      >
        <img src={prev} alt='Previous' />
      </button>
      <button
        className="absolute inset-y-0 right-0 flex items-center justify-center w-12 mb-10 text-yellow-600 hover:text-yellow-300"
        onClick={nextSlide}
      >
        <img src={next} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
