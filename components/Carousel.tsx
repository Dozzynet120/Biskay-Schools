"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Video files to display
const videos = [
  "/videos/bis.mp4",
  "/videos/bis2.mp4",
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => emblaApi.scrollNext(), 8000); // switch every 8 sec
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel video container */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {videos.map((src, i) => (
            <div className="embla__slide flex-[0_0_100%]" key={i}>
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[120vh] md:h-[100vh] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl uppercase">
          Welcome to Biskay Schools
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl font-medium drop-shadow-lg">
          We provide learning and teaching methods that match all learners.
        </p>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-wine text-white p-3 rounded-full shadow-lg hover:opacity-90"
      >
        &#10094;
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-wine text-white p-3 rounded-full shadow-lg hover:opacity-90"
      >
        &#10095;
      </button>
    </div>
  );
}
