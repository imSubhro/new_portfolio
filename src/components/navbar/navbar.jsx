import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
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
    <div className="p-8 pl-15 pr-15">
      <div className={`border border-orange-500 flex justify-between items-center p-4 rounded-3xl relative z-10 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : ''}`}>
        {/* Logo */}
        <div className="group">
          <h1 className="text-xl font-bold relative">
            SUBHRO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </div>

        {/* Navigation Links - Visible on screens larger than 990px */}
        <div className="hidden md:flex justify-center items-center gap-10">

          <a
            href="/about"
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .About( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/"
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .Skills( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/projects"
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >

            .Projects( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/"
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .Experience( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/contact"
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .Contact( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Hamburger Menu Button - Visible only on screens 990px or smaller */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          <div className="flex flex-col justify-between h-6 w-8 cursor-pointer">
            {/* Bar 1 */}
            <div
              className={`h-0.5 bg-red-500 rounded-full transform transition-all duration-500 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5 w-8" : "w-6 ml-2"}`}
            ></div>
            {/* Bar 2 */}
            <div
              className={`h-0.5 bg-yellow-500 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 w-8" : "opacity-100 w-4 ml-4"}`}
            ></div>
            {/* Bar 3 */}
            <div
              className={`h-0.5 bg-green-500 rounded-full transform transition-all duration-500 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5 w-8" : "w-8"}`}
            ></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg z-30 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-orange-600 hover:text-orange-500 transition-colors rounded-full hover:bg-black"
          aria-label="Close menu"
        >
          <IoMdClose size={24} className="animate-pulse" />
        </button>

        <div className="flex flex-col pt-20 px-6 h-full">
          {[
            { href: "/", text: "Home" },
            { href: "/about", text: "About" },
            { href: "/", text: "Skills" },
            { href: "/projects", text: "Projects" },
            { href: "/", text: "Experience" },
            { href: "/contact", text: "Contact" }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`flex items-center gap-2 py-4 text-lg border-b border-gray-700 transition-all duration-300 transform hover:translate-x-2 hover:text-orange-500`}
              onClick={toggleMenu}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}