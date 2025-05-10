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
                                transition-all duration-500
                                hover:shadow-lg hover:shadow-orange-500/30
                                group
                                ${isHovered ? 'text-white scale-105' : 'text-white'}
                            `}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={
                                handleExploreClick
                                // Add any navigation or modal open functionality here
                            }
                        >
                            <div className="relative z-10 text-center">
                                <span className="text-sm md:text-base font-medium">More</span>
                                <br />
                                <span className="text-xs md:text-sm font-medium">About Me</span>
                            </div>

                            <div
                                className={`
                                    absolute inset-0 
                                    bg-white-500
                                    rounded-full
                                    transform scale-0
                                    transition-transform duration-500 ease-out
                                    ${isHovered ? 'scale-100' : 'scale-0'}
                                `}
                            />

                            {/* Animated circular pulse */}
                            <span className="absolute inset-0 rounded-full border-2 border-orange-500/50 
                                  animate-ping opacity-30 group-hover:opacity-70"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

