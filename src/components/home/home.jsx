import { useState, useEffect } from 'react';
import './home.css';
import Mine from "../../assets/image/me.png";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa"; // Added for resume icon
import LightRays from '../LightRays';
import BlobCursor from '../BlobCursor';
// import Ribbons from './Ribbons';

// Add document head for favicon
import { Helmet } from "react-helmet";

export default function home() {
  const phrases = [
    "Hey, I'm Subhro!",
    "I'm a passionate Web developer with a slight twist!",
    "I'm also interested in Artificial Intelligence and Machine Learning!",
    "Welcome to my portfolio!",
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeVisible, setResumeVisible] = useState(false);

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1bZzMDpKTPBdYOsrmkPLyG8r-U4DzwcZH/view?usp=sharing", "_blank");
  };

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 1000 : 2000;

    if (!isDeleting && text === currentPhrase) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentPhrase.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  const toggleResume = () => {
    setResumeVisible(!resumeVisible);
  };

  return (
    <>

      <BlobCursor
        blobType="circle"
        fillColor="#FF7127"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />

      {/* <Ribbons
        baseThickness={30}
        colors={['#ffffff']}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
      /> */}

      {/* Add favicon */}
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      {/* Home section without separate LightRays background */}
      <div className="relative min-h-screen" id="home">
        {/* Main content */}
        <div className="relative z-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full p-4 md:p-8 lg:p-19 min-h-screen">
          {/* Image column - changes order on mobile vs desktop */}
          <div className="flex justify-center items-center w-full order-1 lg:order-2 py-12">
            <div className="relative w-60 h-60 md:w-75 md:h-75 lg:w-105 lg:h-105 transform transition-all duration-500 hover:scale-110">
              <img
                src={Mine}
                alt="Subhro's_Profile_Picture"
                className=" "
              />
            </div>
          </div>

          {/* Content column */}
          <div className="flex flex-col justify-center items-start order-2 lg:order-1 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300">
              Hello There! Subhro Here!
            </h1>

            {/* Typing effect text */}
            <div className="h-16 md:h-20 text-xl md:text-2xl mt-4 text-gray-600">
              <div className="typing-animation">
                {text}
                <span className="cursor">|</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => window.location.href = 'mailto:subhromohanta16@gmail.com?subject=Work Opportunity&body=Hi Subhro, I would like to discuss a work opportunity with you.'}
                className="w-full sm:w-52 h-14 border border-orange-400 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium cursor-pointer relative overflow-hidden group">
                <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300 flex items-center justify-center">
                  Work with Me
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>

              <button
                onClick={handleResumeClick}
                className="w-full sm:w-auto cursor-pointer font-bold text-orange-500 hover:text-orange-600 transition-colors duration-300 flex items-center justify-center px-4 py-2 rounded"
              >
                <FaFileAlt className="mr-2" /> View Resume
              </button>
            </div>

            {/* Resume modal - shows when resumeVisible is true */}
            {resumeVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[70]">
                <div className="bg-white rounded-lg p-6 w-11/12 max-w-4xl h-5/6 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">My Resume</h3>
                    <button
                      onClick={toggleResume}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Social icons - made responsive */}
            <div className="social-icons w-full mt-6">
              <div className="flip flex justify-start gap-4 items-center ">
                <a href="https://github.com/imSubhro" className="transform transition-transform hover:scale-110">
                  <FaGithub className="w-8 h-8 md:w-10 md:h-10 icon text-gray-500 hover:text-orange-500" />
                </a>
                <a href="https://www.linkedin.com/in/subhro-mohanta/" className="transform transition-transform hover:scale-110">
                  <TbBrandLinkedinFilled className="w-8 h-8 md:w-10 md:h-10 icon text-blue-700 hover:text-blue-500" />
                </a>
                <a href="https://x.com/subhro_vk" className="transform transition-transform hover:scale-110">
                  <FaXTwitter className="w-8 h-8 md:w-10 md:h-10 icon text-gray-500 hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com/just.subhro?igsh=MTcycm43Nzc5NTlneg==" className="transform transition-transform hover:scale-110">
                  <FaInstagram className="w-8 h-8 md:w-10 md:h-10 icon text-pink-600 hover:text-pink-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}