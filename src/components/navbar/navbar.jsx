import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Hamburger from 'hamburger-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    // Check for hash in URL on page load - handles direct links with hash
    const handleHashOnLoad = () => {
      if (isHomePage() && window.location.hash) {
        const sectionId = window.location.hash.substring(1); // Remove the # character
        const element = document.getElementById(sectionId);
        if (element) {
          // Use a slight delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500);
        }
      }
    };

    handleHashOnLoad();

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

  // Check if current page is homepage
  const isHomePage = () => {
    return window.location.pathname === "/" || window.location.pathname === "/index.html";
  };

  // Navigate to section function - handles both same-page scrolling and page navigation
  const navigateToSection = (sectionId) => {
    // Close mobile menu if open
    setIsOpen(false);

    if (isHomePage()) {
      // If we're on the homepage, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div className="p-8 pl-15 pr-15">
      <div className={`border border-orange-500 flex justify-between items-center p-4 rounded-3xl relative z-10 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : ''}`}>
        {/* Logo */}
        <div className="group">
          <h1 className="text-xl font-bold relative">
            SUBHRO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5  transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </div>

        {/* Navigation Links - Visible on screens larger than 990px */}
        <div className="hidden lg-tablet:flex justify-center items-center gap-10">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("about");
            }}
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .About( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("skills");
            }}
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .Skills( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("projects");
            }}
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .Projects( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("experience");
            }}
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .Experience( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("contact");
            }}
            className="flex items-center text-xl gap-2 hover:text-orange-600 transition-colors relative group"
          >
            .Contact( )
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Hamburger Menu Button - Visible only on screens 990px or smaller */}
        <div className="lg-tablet:hidden z-50">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color={isOpen ? "#ffffff" : "#f97316"} />
        </div>
      </div>

      {/* Mobile Menu Overlay - Blurred background when menu is open */}
      <div
        className={`fixed inset-0 backdrop-blur-lg z-20 transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-80 backdrop-filter backdrop-blur-md shadow-lg z-30 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-orange-500 hover:text-orange-400 transition-colors rounded-full hover:bg-black hover:bg-opacity-50"
          aria-label="Close menu"
        >
          <IoMdClose size={28} className="animate-pulse" />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col pt-20 px-6 h-full">
          {[
            { id: "home", text: "Home", icon: "🏠" },
            { id: "about", text: "About", icon: "👤" },
            { id: "skills", text: "Skills", icon: "🛠️" },
            { id: "projects", text: "Projects", icon: "💼" },
            { id: "experience", text: "Experience", icon: "📝" },
            { id: "contact", text: "Contact", icon: "📞" }
          ].map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="group flex items-center gap-3 py-4 text-lg border-b border-gray-700 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection(link.id);
              }}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="w-8 h-8 flex items-center justify-center bg-orange-500 bg-opacity-20 rounded-full group-hover:bg-orange-500 transition-all duration-300">
                {link.icon}
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 group-hover:text-orange-500">
                {link.text}
              </span>

            </a>
          ))}
        </div>
      </div>
    </div>
  );
}