// import gsap from 'gsap';
// import { motion } from 'framer-motion';

// export default function Projects() {
//     const projects = [
//         {
//             name: "Khelratna",
//             category: "Design & Development"
//         },
//         {
//             name: "SylloGenie",
//             category: "Design & Development"
//         },
//         {
//             name: "WeatherVista",
//             category: "Design & Development"
//         }
//     ];

//     return (
//         <>


//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">

//                 <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Projects</h2>

//                 <div className="space-y-6 sm:space-y-8 hover:">

//                     {projects.map((project, index) => (
//                         <div key={index} className="group cursor-pointer">
//                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6">
//                                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium transition-all duration-300 group-hover:pl-4 mb-2 sm:mb-0">{project.name}</h3>
//                                 <p className="text-gray-600 text-sm sm:text-base">{project.category}</p>
//                             </div>
//                             <div className="h-px w-full bg-gray-200"></div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex justify-center mt-10 sm:mt-16">
//                     <button className="border border-gray-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer transition-all duration-300">
//                         More work <sup>+</sup>
//                     </button>
//                 </div>
//             </div>

//         </>
//     );
// }






















import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Projects() {
    const projects = [
        {
            name: "Khelratna",
            category: "Design & Development"
        },
        {
            name: "SylloGenie",
            category: "Design & Development"
        },
        {
            name: "WeatherVista",
            category: "Design & Development"
        }
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Projects</h2>

                <div className="space-y-6 sm:space-y-8">
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </div>

                <div className="flex justify-center mt-10 sm:mt-16">
                    <button className="border border-gray-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 hover:bg-blue-500 hover:text-white border-blue-500 cursor-pointer transition-all duration-300">
                        More work <sup>+</sup>
                    </button>
                </div>
            </div>
        </>
    );
}

function ProjectItem({ project }) {
    const projectRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        // Set initial state
        gsap.set(overlayRef.current, {
            scale: 0,
            opacity: 0
        });

        // Create hover in animation
        const handleMouseEnter = () => {
            gsap.to(overlayRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        // Create hover out animation
        const handleMouseLeave = () => {
            gsap.to(overlayRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        };

        // Add event listeners
        const projectElement = projectRef.current;
        if (projectElement) {
            projectElement.addEventListener('mouseenter', handleMouseEnter);
            projectElement.addEventListener('mouseleave', handleMouseLeave);
        }

        // Clean up event listeners
        return () => {
            if (projectElement) {
                projectElement.removeEventListener('mouseenter', handleMouseEnter);
                projectElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={projectRef} className="group cursor-pointer relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium transition-all duration-300 group-hover:pl-4 mb-2 sm:mb-0">{project.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{project.category}</p>
            </div>

            <motion.div
                ref={overlayRef}
                className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm h-[300px] w-[400px] flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
            >
                <button className="bg-blue-500 text-white px-6 py-3 h-25 w-25 rounded-full font-medium transform transition-transform hover:scale-105 cursor-pointer ">
                    View Project
                </button>
            </motion.div>

            <div className="h-px w-full bg-gray-200"></div>
        </div>
    );
}