import React, { useState } from "react";
import { Links } from "../constants/Links";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";  

const NavbarMain: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">M.Uzair</a>
        </div>
        <div className="hidden md:flex space-x-8">
          {Links.map((link, index) => (
            <a
              className="text-white hover:text-stone-400 transition duration-300"
              key={index}
              href={`#${link.link}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
               <RiCloseFill className="w-6 h-6" /> 
            ):(
                <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
            {Links.map((link, index) => (
            <a
              className="text-white hover:text-stone-400 transition duration-300"
              key={index}
              href={link.link}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
