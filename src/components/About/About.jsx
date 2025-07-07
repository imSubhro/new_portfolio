import { useState, useEffect } from 'react';
// import background from '../../assets/image/about.jpeg';
import { useNavigate } from 'react-router-dom';


export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isButtonAnimating, setIsButtonAnimating] = useState(false);

    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/intro');
    };


    useEffect(() => {
        setIsVisible(true);

        // Add button entrance animation after content is visible
        const timer = setTimeout(() => {
            setIsButtonAnimating(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="flex  flex-col items-center justify-center min-h-[250px] p-6 md:p-10 bg-[#282828] overflow-hidden " id='about'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg-tablet:grid-cols-2 gap-4 md:gap-8 items-center w-full  lg-tablet:px-12">
                    {/* Text content with fade-in animation */}
                    <div
                        className={`text-3xl transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <h2 className='text-3xl md:text-5xl font-bold text-orange-500 pb-4'>Who Am I...</h2>
                        <p className="text-base md:text-1xl text-gray-300 pl-3">
                            Hey! I'm Subhro, a curious and driven Computer Science student based in Kolkata. I'm someone who genuinely enjoys learning, solving problems, and exploring how technology can improve everyday life
                        </p>
                    </div>


                    {/* Button container that moves below on small screens */}
                    <div
                        className={`flex items-center justify-center md:justify-end mt-6 md:mt-0 pt-2 pr-25 transform transition-all duration-700 delay-300 ${isButtonAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <button
                            className={`
                                relative
                                h-25 w-25 md:h-35 md:w-35
                                rounded-full 
                                flex items-center justify-center
                                border-2 border-orange-500
                                cursor-pointer
                                overflow-hidden
                                transition-all duration-500 ease-in-out
                                hover:shadow-lg hover:shadow-orange-500/50
                                hover:scale-110
                                active:scale-95
                                group
                                ${isHovered ? 'text-white shadow-2xl shadow-orange-500/40' : 'text-white'}
                                animate-pulse
                            `}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={
                                handleExploreClick
                                // Add any navigation or modal open functionality here
                            }
                        >
                            <div className="relative z-10 text-center transition-all duration-300">
                                <span className={`text-sm md:text-base font-medium transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}>More</span>
                                <br />
                                <span className={`text-xs md:text-sm font-medium transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}>About Me</span>
                            </div>

                            {/* Background bubble effect */}
                            <div
                                className={`
                                    absolute inset-0 
                                    bg-gradient-to-r from-orange-500/20 to-red-500/20
                                    rounded-full
                                    transform transition-all duration-500 ease-out
                                    ${isHovered ? 'scale-110 opacity-100' : 'scale-0 opacity-0'}
                                `}
                            />

                            {/* Outer ring animation */}
                            <div
                                className={`
                                    absolute inset-0 
                                    border-2 border-orange-500/30
                                    rounded-full
                                    transform transition-all duration-700 ease-out
                                    ${isHovered ? 'scale-125 opacity-100' : 'scale-100 opacity-50'}
                                `}
                            />

                            {/* Continuous pulsing ring for mobile */}
                            <span className="absolute inset-0 rounded-full border-2 border-orange-500/30 
                                  animate-ping opacity-40 group-hover:opacity-70 
                                  md:hidden"></span>

                            {/* Desktop-only subtle pulse */}
                            <span className="hidden md:block absolute inset-0 rounded-full border-2 border-orange-500/20 
                                  animate-pulse opacity-50 group-hover:opacity-80"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

