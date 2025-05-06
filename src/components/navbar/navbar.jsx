import { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
// import { SiGoogleforms } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="p-8 pl-14 pr-14">
      <div className="border border-orange-500 flex justify-between items-center p-4 rounded-3xl relative z-10">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold ">SUBHRO</h1>
        </div>

        {/* Navigation Links - Visible on screens larger than 990px */}
        <div className="hidden md:flex justify-center items-center gap-10">
          <a
            href="/"
            className="flex items-center gap-2 hover:text-orange-600 transition-colors "
          >
            <span>
              <IoHome />
            </span>
            Home
          </a>
          <a
            href="/about"
            className="flex items-center gap-2 hover:text-orange-600 transition-colors"
          >
            <span>
              <FaCircleInfo />
            </span>
            About
          </a>
          <a
            href="/projects"
            className="flex items-center gap-2 hover:text-orange-600 transition-colors"
          >
            <span>
              <FaCode />
            </span>
            Projects
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2  hover:text-orange-600 transition-colors"
            onClick={toggleMenu}
          >
            <span>
              <FaHeadphones />
            </span>
            Contact
          </a>
          {/* <a
            href="/resume"
            className="flex items-center gap-2  hover:text-gray-600 transition-colors"
            onClick={toggleMenu}
          >
            <span>
              <SiGoogleforms />
            </span>
            Resume
          </a> */}

        </div>

        {/* Hamburger Menu Button - Visible only on screens 990px or smaller */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          <div className="flex flex-col justify-between h-6 w-8 cursor-pointer">
            {/* Bar 1 */}
            <div
              className={`h-0.5 bg-red-500 rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
            ></div>
            {/* Bar 2 */}
            <div
              className={`h-0.5 bg-yellow-500 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""
                }`}
            ></div>
            {/* Bar 3 */}
            <div
              className={`h-0.5 bg-green-500 rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-orange-600 hover:text-orange-500 transition-colors rounded-full hover:bg-black"
          aria-label="Close menu"
        >
          <IoMdClose size={24} />
        </button>

        <div className="flex flex-col pt-20 px-6 h-full">
          <a
            href="/"
            className="flex items-center gap-2 py-4   text-lg border-b border-gray-200"
            onClick={toggleMenu}
          >
            <span>
              <IoHome />
            </span>
            Home
          </a>
          <a
            href="/about"
            className="flex items-center gap-2 py-4 text-lg border-b border-gray-200"
            onClick={toggleMenu}
          >
            <span>
              <FaCircleInfo />
            </span>
            About
          </a>
          <a
            href="/projects"
            className="flex items-center gap-2 py-4 text-lg border-b border-gray-200"
            onClick={toggleMenu}
          >
            <span>
              <FaCode />
            </span>
            Projects
          </a>
          {/* <a
            href="/resume"
            className="flex items-center gap-2 py-4 text-lg border-b border-gray-200"
            onClick={toggleMenu}
          >
            <span>
              <SiGoogleforms />
            </span>
            Resume
          </a> */}
          <a
            href="/contact"
            className="flex items-center gap-2 py-4 text-lg border-b border-gray-200"
            onClick={toggleMenu}
          >
            <span>
              <FaHeadphones />
            </span>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
