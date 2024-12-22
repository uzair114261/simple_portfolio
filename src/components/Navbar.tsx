import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const menus = ["Home", "Services", "Pricing", "Why Us", "Our work"];
  const hoverRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  console.log(position);
  
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between py-6 px-4">
        <div className="logo">
          <h1 className="font-bold text-3xl">Uzair</h1>
        </div>
        <div className="menu bg-gray-800 rounded-3xl">
          <ul
            onMouseLeave={() =>
              setPosition((prev) => ({
                ...prev,
                opacity: 0,
              }))
            }
            className="relative flex"
          >
            {menus.map((menu, index) => (
              <li
                key={index}
                ref={(el) => (hoverRefs.current[index] = el)}
                onMouseEnter={() => {
                  const refElement = hoverRefs.current[index];
                  if (refElement) {
                    const data = refElement.getBoundingClientRect();
                    console.log(data);
                    
                    setPosition({
                      left: refElement.offsetLeft,
                      width: data.width,
                      opacity: 1,
                    });
                  }
                }}
                className="relative z-10 cursor-pointer px-6 py-3 text-white mix-blend-difference rounded-3xl"
              >
                {menu}
              </li>
            ))}
            <motion.li
              animate={position}
              className="absolute z-0 rounded-3xl h-7 md:h-12 bg-white"
            ></motion.li>
          </ul>
        </div>
        <div className="contact">
          <button className="px-6 py-3 bg-gray-800 hover:text-gray-700 hover:bg-white rounded-3xl">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
