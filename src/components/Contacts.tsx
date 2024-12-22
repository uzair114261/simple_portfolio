import React from "react";
import { motion } from "framer-motion";
import { contactContent } from "../constants/Contact";
import {
  RiGithubFill,
  RiTwitterXFill,
  RiLinkedinFill
} from "react-icons/ri";

const Contacts: React.FC = () => {
  const iconMapping = {
    RiTwitterXFill: RiTwitterXFill,
    RiGithubFill: RiGithubFill,
    RiLinkedinFill: RiLinkedinFill,
  } as const
  const textVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }),
  };
  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: (delay: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay
      },
    }),
  };
  return (
      <section
        className="min-h-screen overflow-hidden flex flex-col justify-center px-4 md:px-10"
        id="contact"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
          Contact
        </h2>
        <div className="h-1 w-20 bg-white mb-8"></div>
        <motion.h3
          className="text-6xl md:text-8xl leading-none"
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          variants={textVariant}
        >
          {contactContent.headline}
        </motion.h3>
        <motion.p
          className="text-lg md:text-2xl mt-6 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          variants={textVariant}
        >
          {contactContent.description}
        </motion.p>
        <motion.a
          href={`mailto:${contactContent.email}`}
          className="text-2xl md:text-3xl font-medium mt-8"
          initial="hidden"
          whileInView="visible"
          custom={0.8}
          variants={textVariant}
        >
          {contactContent.email}
        </motion.a>
        <div className="flex space-x-6 mt-8">
    {contactContent.socialLinks.map((link, index) => {
      const Icon = iconMapping[link.icon as keyof typeof iconMapping];
      if (!Icon) {
        console.error(`Icon "${link.icon}" not found`);
        return null; // Skip invalid icons
      }
      return (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="visible"
          custom={1.0 + index * 0.2}
          variants={iconVariants}
        >
          <Icon size={36} />
        </motion.a>
      );
    })}
  </div>
  <motion.p className="text-sm text-stone-400 mt-36" initial='hidden' whileInView='visible' custom={1.6} variants={textVariant}>
    {contactContent.footerText}
  </motion.p>
      </section>
  );
};

export default Contacts;
