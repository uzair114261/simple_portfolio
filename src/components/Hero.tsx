import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/me.jpg"

const Hero: React.FC = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const imageVariants = {
    hidden: {
      clipPath: "inset(0 50% 0 50%)",
    },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section id='home'>
      <div className="relative min-h-screen z-10 flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        <motion.div
          className="w-full md:w-1/2 p-8 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}
          >
            Hey there!
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
          >
            I'm Muhammad Uzair, a creative Fullstack developer, crafting
            intuitive and immersive web experience.
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl"
            variants={textVariants}
          >
            I'm currently helping businesses bring their vision to life through
            interactive digital solutions.
          </motion.p>
          <motion.a
            className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl cursor-pointer"
            variants={textVariants}
          >
            Download Resume
          </motion.a>
        </motion.div>
        <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible" variants={imageVariants}>
            <img src={HeroImage} alt="Muhammad Uzair" width={350} height={350} className="rounded-3xl mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
