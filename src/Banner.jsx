import { useState } from "react";
import banner from '/src/assets/banner-1.jpg'; 
import slider from '/src/assets/slider-2.jpg'; 
import slide from '/src/assets/slide-3.jpg'; 

const slides = [
  { id: 1, image:banner, title: "Slide 1", subtitle: "This is slide 1" },
  { id: 2, image: slider, title: "Slide 2", subtitle: "This is slide 2" },
  { id: 3, image: slide, title: "Slide 3", subtitle: "This is slide 3" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-96 lg:h-[600px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 text-white">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">{slide.title}</h2>
            <p className="text-sm sm:text-md md:text-lg">{slide.subtitle}</p>
          </div> */}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:flex top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden md:flex top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
