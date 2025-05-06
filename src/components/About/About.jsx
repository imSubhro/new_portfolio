import { useState, useEffect } from 'react';


export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isButtonAnimating, setIsButtonAnimating] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        // Add button entrance animation after content is visible
        const timer = setTimeout(() => {
            setIsButtonAnimating(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[250px] p-6 md:p-10 bg-[#282828] overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center w-full px-4 md:px-12">
                    {/* Text content with fade-in animation */}
                    <div
                        className={`text-3xl transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <p className="text-base md:text-lg text-white">
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
                            onClick={() => {
                                // Add any navigation or modal open functionality here
                            }}
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





// <section className="min-h-screen flex flex-col items-center justify-center pt-17">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 w-full max-w-7xl px-4">
//         <div className={`transform transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
//             <h2 className="text-5xl md:text-5xl text-center font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">About Me</h2>
//             <h4 className='text-1xl md:text-2xl  mb-4'>Let's keep this Simple</h4>
//             <p className="text-lg mb-4 text-black ">
//                 Hey! I'm Subhro Mohanta, a curious and driven Computer Science student based in Kolkata. I'm someone who genuinely enjoys learning, solving problems, and exploring how technology can improve everyday life. Whether it's diving into the world of AI or building something cool with code, I love the creative process behind tech.
//             </p>
//             <p className="text-lg mb-4 text-black-500">
//                 I'm also a strong believer in community and collaboration —I've led technical workshops, mentored peers, and enjoy being part of a team that builds and grows together. Outside of tech, I'm passionate about cricket, leading my college team with the same energy and focus I bring to coding.
//             </p>
//             <p className="text-lg text-black">
//                 I'm constantly evolving, and I'm always up for a good challenge and meaningful conversation.
//             </p>
//         </div>
//         <div className={`relative w-70 h-70 mx-auto transform transition-all duration-800 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-lg">
//                 <div className="absolute inset-0.5 rounded-full overflow-hidden bg-white dark:bg-gray-800">
//                     <img src={helloimg} alt="Profile" className="w-full h-full object-cover" />
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>