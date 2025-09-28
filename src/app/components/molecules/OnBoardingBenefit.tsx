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
    <div className="w-full max-w-3xl relative overflow-hidden lg:rounded-4xl box-border h-[28vh] md:h-[95vh]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-70"
      />

      {/* Logo */}
      <div className="absolute top-4 px-4 lg:block hidden">
        <Image src={images.logoWhite} alt="Logo" width={80} height={80} />
      </div>

      <div className="absolute flex lg:flex-row flex-col bottom-0  justify-between items-end  p-4 md:p-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" bg-transparent bg-opacity-40 lg:rounded-xl  max-h-max"
          >
            <h1 className="text-white font-semibold text-xl md:text-2xl max-w-full md:max-w-lg mb-2 md:mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-white text-md md:text-md md:max-w-md">
              {benefit}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-end space-x-4 mt-4">
          <div className="relative rounded-full max-h-max">
            <button
              onClick={handleBack}
              className="bg-trasnparent bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-2 md:p-3 hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer group"
            >
              <ArrowLeft />
            </button>
            <BorderBeam borderWidth={2} colorFrom="white" colorTo="white"/>
          </div>
          <div className="relative rounded-full max-h-max">
          <button
            onClick={handleNext}
            className="bg-trasnparent bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-2 md:p-3 hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer group"
          >
            <ArrowRight />
          </button>
            <BorderBeam borderWidth={2} colorFrom="white" colorTo="white"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingBenefit;
