import { useState, useEffect } from 'react';
import './home.css';
import Mine from "../../assets/image/mine.png";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Home() {

  const phrases = [
    "Hey, I'm Subhro",
    "I'm a passionate Web developer with a slight twist!",
    "I'm also interested in Artificial Intelligence and Machine Learning!",
    "Welcome to my portfolio!",
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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


  return (
    <>
      <div className="grid grid-cols-1 lg-tablet:grid-cols-2 gap-8 w-[100%] pl-20 pr-20 pt-18">

        {/* 1st column */}
        <div className="flex flex-col justify-center items-start order-2 lg-tablet:order-1 ">
          <h1 className="text-5xl font-bold">
            Hello There! Subhro Here!
          </h1>
          {/* Adding the typing effect text display here */}
          <div className="h-16 text-2xl mt-4 text-pink-500 ">
            <div className="typing-animation">
              {text}
              <span className="cursor">|</span>
            </div>
          </div>

          <div className="flex flex-row gap-4 pt-4">
            <button className='w-[150px] h-[60px] border border-gray-400 bg-blue-500 text-white rounded-lg font-medium cursor-pointer relative overflow-hidden group'>
              <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-300">Work with Me</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>

            <button className='cursor-pointer font-bold text-blue-500 '>View Resume</button>

          </div>
          <div className="social-icons">
            <div class="flip flex justify-around items-center p-2.5">
              <a href="#"><FaGithub className='w-[45px] h-[45px] icon' /></a>
              <a href="#"><TbBrandLinkedinFilled className='w-[46px] h-[46px] icon' /></a>
              <a href="#"><FaXTwitter className='w-[45px] h-[45px] icon' /></a>
              <a href="#"><FaInstagram className='w-[46px] h-[46px] icon' /></a>
            </div>
          </div>
        </div>

        {/* 2nd column */}
        <div className="flex justify-center items-center w-[100%] transform transition-all duration-800 hover:scale-105 order-1 lg-tablet:order-2">
          <img
            src={Mine}
            alt="Subhro's_Profile_Picture"
            className="h-[370px] w-[370px] rounded-full overflow-hidden object-cover"
          />
        </div>

      </div>
    </>
  );
}