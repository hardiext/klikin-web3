"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { images } from "@/data/image";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Explore The World",
    description: "Discover amazing destinations around the globe.",
    image: images.discover1,
  },
  {
    id: 2,
    title: "Adventure Awaits",
    description: "Find your next thrilling adventure with us.",
    image: images.discover1,
  },
  {
    id: 3,
    title: "Relax & Unwind",
    description: "Escape the stress and recharge in paradise.",
    image: images.discover1,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full  lg:h-screen h-[60vh] overflow-hidden bg-white">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority
            className="object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
              {slides[index].title}
            </h1>
            <p className="text-lg md:text-2xl text-white">
              {slides[index].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/60 hover:bg-white p-3 rounded-full shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/60 hover:bg-white p-3 rounded-full shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
