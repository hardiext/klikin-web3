"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { images } from "@/data/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: images.shopingGroup,
    benefit:
      "Browse thousands of products, add to cart in one click, and enjoy a seamless shopping experience.",
    title: "Shop Like a Pro",
    role: "Lead Designer, Circoloes",
  },
  {
    image: images.unboxing,
    benefit:
      "All your transactions are protected with advanced security, so you can shop with confidence.",
    title: "Safe & Secure",
    role: "Web Developer",
  },
  {
    image: images.vlogger,
    benefit:
      "All your transactions are protected with advanced security, so you can shop with confidence.",
    title: "Vlog Like a Pro",
    role: "Content Creator",
  },
];

const OnBoardingBenefit = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleBack = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, title, benefit } = slides[currentIndex];

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full min-h-[95vh] max-w-3xl relative overflow-hidden rounded-4xl box-border">
  
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-80"
      />

  
      <div className="absolute top-10 px-6">
        <Image src={images.logoWhite} alt="Logo" width={80} height={80} />
      </div>

      <div className="absolute bottom-8 right-4 flex items-center space-x-4 z-40">
        <div className="relative rounded-full">
          <button
            onClick={handleBack}
            className="bg-transparent bg-opacity-70 rounded-full p-3 hover:bg-opacity-90 relative z-10 hover:bg-white cursor-pointer group"
          >
            <ArrowLeft className="text-white group-hover:text-neutral-800 transition-colors ease-in-out duration-500" />
          </button>
          <BorderBeam
            reverse
            duration={2}
            borderWidth={2}
            colorTo="white"
            colorFrom="white"
            className="absolute rounded-full inset-0 pointer-events-none"
          />
        </div>
        <div className="relative rounded-full">
          <button
            onClick={handleNext}
            className="bg-transparent hover:bg-white cursor-pointer bg-opacity-70 rounded-full p-3 hover:bg-opacity-90 relative z-10 group"
          >
            <ArrowRight className="text-white group-hover:text-neutral-800 transition-colors ease-in-out duration-500" />
          </button>
          <BorderBeam
            borderWidth={2}
            duration={2}
            colorTo="white"
            colorFrom="white"
            className="absolute inset-0 pointer-events-none text-white"
          />
        </div>
      </div>

    
      <div className="absolute bottom-8 left-6 flex flex-col z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="text-white font-semibold text-xl md:text-2xl max-w-lg mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-white font-medium text-md md:max-w-md">
              {benefit}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnBoardingBenefit;
