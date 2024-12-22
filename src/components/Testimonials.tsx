import React from "react";
import { motion } from "framer-motion";
import { testimonialslist } from "../constants/Testimonials";

const Testimonials: React.FC = () => {
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.5,
      },
    }),
  };
  return (
    <section className="px-6 py-10" id="testimonials">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        What people are saying
      </h1>
      <div className="h-1 w-20 bg-white mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialslist.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={childVariants}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-semibold">
                    {testimonial.name}
                </h2>
                <p className="text-sm font-light">{testimonial.title}</p>
              </div>
            </div>
            <p className="leading-relaxed">{testimonial.testimonial}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
