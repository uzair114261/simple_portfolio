import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
      <section className="px-6 py-10" id="about">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
          About
        </h1>
        <div className="h-1 bg-white w-20 mb-8"></div>
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            I have hands-on experience in web development, working extensively
            with HTML to structure content and CSS frameworks like Tailwind CSS
            and Bootstrap for responsive, visually appealing designs. My
            expertise extends to JavaScript and TypeScript, enabling me to
            create dynamic, interactive applications, while leveraging React and
            Redux for building scalable and efficient front-end interfaces.
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            With a strong background in Python and the Django framework, I excel
            in backend development, crafting secure and robust web applications.
            I am proficient in designing and consuming APIs and managing
            databases, ensuring seamless data flow and integration for
            full-stack solutions.
          </motion.p>
        </div>
      </section>
  );
};

export default About;
