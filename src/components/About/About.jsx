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
        <section className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-[#1a1a1a] via-[#282828] to-[#1f1f1f] overflow-hidden" id='about'>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-400/3 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Text content with enhanced typography */}
                        <div
                            className={`space-y-6 md:space-y-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="space-y-4">
                                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text leading-tight'>
                                    Who Am I...
                                </h2>
                                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                                    Hey! I'm <span className="text-orange-400 font-medium">Subhro</span>, a curious and driven Computer Science student based in Kolkata.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                                    I'm someone who genuinely enjoys learning, solving problems, and exploring how technology can improve everyday life.
                                </p>
                            </div>

                            {/* Additional info cards for desktop */}
                            <div className="hidden md:flex space-x-4 mt-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-orange-500/20">
                                    <p className="text-orange-400 text-sm font-medium">Location</p>
                                    <p className="text-gray-300 text-xs">Kolkata, India</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-orange-500/20">
                                    <p className="text-orange-400 text-sm font-medium">Field</p>
                                    <p className="text-gray-300 text-xs">Computer Science</p>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced button section */}
                        <div
                            className={`flex items-center justify-center lg:justify-end mt-8 lg:mt-0 transform transition-all duration-700 delay-300 ${isButtonAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="relative group">
                                {/* Main button */}
                                <button
                                    className={`
                                        relative
                                        h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40
                                        rounded-full 
                                        flex items-center justify-center
                                        border-2 border-orange-500/60
                                        cursor-pointer
                                        overflow-hidden
                                        transition-all duration-500 ease-in-out
                                        hover:border-orange-400
                                        hover:shadow-2xl hover:shadow-orange-500/30
                                        hover:scale-105
                                        active:scale-95
                                        bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10
                                        backdrop-blur-sm
                                        ${isHovered ? 'text-white shadow-2xl shadow-orange-500/40 border-orange-400' : 'text-white'}
                                    `}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={handleExploreClick}
                                >
                                    <div className="relative z-10 text-center transition-all duration-300">
                                        <span className={`text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ${isHovered ? 'transform scale-110' : ''}`}>
                                            More
                                        </span>
                                        <br />
                                        <span className={`text-xs sm:text-sm md:text-base font-medium text-gray-300 transition-all duration-300 ${isHovered ? 'transform scale-110 text-orange-200' : ''}`}>
                                            About Me
                                        </span>
                                    </div>

                                    {/* Enhanced background effects */}
                                    <div
                                        className={`
                                            absolute inset-0 
                                            bg-gradient-to-r from-orange-500/20 via-orange-400/25 to-red-500/20
                                            rounded-full
                                            transform transition-all duration-500 ease-out
                                            ${isHovered ? 'scale-110 opacity-100' : 'scale-0 opacity-0'}
                                        `}
                                    />

                                    {/* Outer ring animation with better scaling */}
                                    <div
                                        className={`
                                            absolute inset-0 
                                            border-2 border-orange-400/40
                                            rounded-full
                                            transform transition-all duration-700 ease-out
                                            ${isHovered ? 'scale-125 opacity-100 border-orange-300' : 'scale-100 opacity-50'}
                                        `}
                                    />

                                    {/* Mobile optimized pulsing ring */}
                                    <span className="absolute inset-0 rounded-full border-2 border-orange-500/30 
                                          animate-ping opacity-40 group-hover:opacity-70 
                                          md:opacity-30 md:group-hover:opacity-50"></span>

                                    {/* Enhanced desktop pulse */}
                                    <span className="hidden md:block absolute inset-0 rounded-full border-2 border-orange-500/20 
                                          animate-pulse opacity-50 group-hover:opacity-80"></span>

                                    {/* New: Rotating border effect */}
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-orange-400/30 to-transparent 
                                          transition-all duration-1000 ${isHovered ? 'animate-spin' : ''}`}></div>
                                </button>

                                {/* Enhanced floating elements around button */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-bounce delay-100 opacity-60"></div>
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-400 rounded-full animate-bounce delay-300 opacity-40"></div>
                                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-orange-300 rounded-full animate-pulse opacity-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile info cards */}
                    <div className={`md:hidden flex justify-center space-x-4 mt-8 transform transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-orange-500/20">
                            <p className="text-orange-400 text-xs font-medium">Location</p>
                            <p className="text-gray-300 text-xs">Kolkata, India</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-orange-500/20">
                            <p className="text-orange-400 text-xs font-medium">Field</p>
                            <p className="text-gray-300 text-xs">Computer Science</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

