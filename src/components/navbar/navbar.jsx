import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Hamburger from 'hamburger-react';
import LightRays from '../LightRays';

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

  // Prevent scrolling when menu is open and handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Check if current page is homepage
  const isHomePage = () => {
    return window.location.pathname === "/" || window.location.pathname === "/index.html";
  };

  // Navigate to section function - handles both same-page scrolling and page navigation
  const navigateToSection = (sectionId) => {
    console.log('Navigating to section:', sectionId); // Debug log

    // Close mobile menu if open
    setIsOpen(false);

    if (isHomePage()) {
      // If we're on the homepage, just scroll to the section
      if (sectionId === "home") {
        console.log('Scrolling to top'); // Debug log
        // For home section, scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        const section = document.getElementById(sectionId);
        console.log('Found section:', section); // Debug log
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } else {
          console.error('Section not found:', sectionId); // Debug log
        }
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      if (sectionId === "home") {
        window.location.href = "/";
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  return (
    <div className="relative">
      {/* LightRays background for navbar extending to full viewport */}
      <div className="absolute inset-0 z-0" style={{ height: '100vh' }}>
        <LightRays
          raysOrigin="top"
          raysColor="#ff6600"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.08}
          distortion={0.04}
          className="custom-rays "
        />
      </div>

      <div className="relative z-50 pt-8 pl-15 pr-15">
        <div className={`border border-orange-500 flex justify-between items-center p-4 rounded-3xl relative z-50 transition-all duration-300 ${scrolled ? 'bg-[#161616]  backdrop-blur-sm' : ''}`}>
          {/* Logo */}
          <div className="group">
            <h1 className="text-xl font-bold relative hover:cursor-pointer" onClick={(e) => {
              e.preventDefault();
              navigateToSection("home");
            }}>
              SUBHRO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </h1>
          </div>

          {/* Navigation Links - Visible on screens larger than 990px */}
          <div className="hidden lg-tablet:flex justify-center items-center gap-10">
            <a
              href="#about"
              onClick={(e) => {
                console.log('Desktop About clicked'); // Debug log
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
          <div className="lg-tablet:hidden z-[60]">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color={isOpen ? "#ffffff" : "#f97316"} />
          </div>
        </div>

        {/* Premium Mobile Menu Overlay with enhanced blur */}
        <div
          className={`fixed inset-0 backdrop-blur-2xl bg-black/30 z-[55] transition-all duration-700 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsOpen(false)}
          style={{
            background: isOpen ? 'radial-gradient(circle at center, rgba(249, 115, 22, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)' : 'transparent'
          }}
        ></div>

        {/* Premium Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#1a1a1a]/95 via-[#161616]/98 to-[#0d0d0d]/95 backdrop-filter backdrop-blur-xl border-l border-orange-500/20 shadow-2xl z-[60] transform transition-all duration-700 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Premium Header with Close Button */}
          <div className="relative pt-6 pb-4 px-6 border-b border-orange-500/10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">

                <p className="text-2xl font-bold pl-5 text-gray-300">Explore</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="group relative p-3 text-orange-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30"
                aria-label="Close menu"
              >
                <IoMdClose size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute inset-0 bg-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Premium Menu Content */}
          <div className="flex flex-col pt-8 px-6 h-full space-y-3">
            {[
              { id: "home", text: "Home", icon: "🏠", desc: "Welcome page" },
              { id: "about", text: "About", icon: "👤", desc: "My story" },
              { id: "skills", text: "Skills", icon: "🛠️", desc: "Technical expertise" },
              { id: "projects", text: "Projects", icon: "💼", desc: "My work" },
              { id: "experience", text: "Experience", icon: "📝", desc: "Career journey" },
              { id: "contact", text: "Contact", icon: "📞", desc: "Get in touch" }
            ].map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 hover:transform hover:scale-[1.02] border border-transparent hover:border-orange-500/20 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                onClick={(e) => {
                  console.log('Mobile menu item clicked:', link.id); // Debug log
                  e.preventDefault();
                  e.stopPropagation(); // Prevent event bubbling
                  navigateToSection(link.id);
                }}
                style={{
                  transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms',
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%)'
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Icon container */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl group-hover:from-orange-500/40 group-hover:to-orange-600/20 transition-all duration-300 group-hover:scale-110 border border-orange-500/10 group-hover:border-orange-500/30">
                  <span className="text-lg filter drop-shadow-sm">{link.icon}</span>
                </div>

                {/* Text content */}
                <div className="relative z-10 flex-1">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-white group-hover:text-orange-300 transition-all duration-300 group-hover:translate-x-1">
                      {link.text}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-orange-200/70 transition-all duration-300">
                      {link.desc}
                    </span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
}