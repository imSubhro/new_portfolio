// import { useState } from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';

// Project data embedded in the same file
const projectsData = [
    {
        id: 1,
        name: "KHELRATNA",
        description: "Decentralized and borderless platform worldwide users can collectively learn, teach and GROW TOGETHER. Collaborative community platform for sharing knowledge through videos.",
        tags: ["Python", "Next.js", "Supabase", "PostgreSQL", "FastAPI", "Tailwind CSS", "JWT"],
        code: "https://github.com/yourusername/open-course",
        demo: "https://opencourse.com",
        tools: ["Python", "Next.js", "Supabase", "PostgreSQL", "FastAPI", "Tailwind CSS", "JWT"],
        role: "Full Stack Developer"
    },
    {
        id: 2,
        name: "WeatherVista",
        description: "This is a web app developed using React.js ⚛️. It allows users to search for the weather conditions of any city in the world and provides real-time weather updates. The app fetches data from the SheCodes Weather API 🌐.",
        tags: ["Javascript", "HTML", "Tailwind CSS", "API"],
        code: "https://github.com/imSubhro/WeatherVista",
        demo: "https://weather-app-c366.onrender.com/",
        tools: ["Javascript", "React.js", "HTML", "Tailwind CSS", "API"],
        role: "Lead Developer"
    },
    {
        id: 3,
        name: "SylloGenie",
        description: "SylloGenie is a smart Flask-based web application that allows users to upload their syllabus PDFs and generates a concise, summarized PDF effortlessly. 🚀",
        tags: ["Vue.js", "Firebase", "CSS"],
        code: "https://github.com/imSubhro/SylloGenie",
        demo: "https://pdfsummary-uwt7.onrender.com/",
        tools: ["Python", "HTML", "Tailwind CSS"],
        role: "Lead Developer"
    },
    {
        id: 4,
        name: "Weather Dashboard",
        description: "An interactive weather dashboard that provides real-time weather data, forecasts, and historical weather information for locations worldwide.",
        tags: ["JavaScript", "API", "CSS"],
        code: "https://github.com/yourusername/weather-dashboard",
        demo: "https://yourweatherapp.com",
        tools: ["JavaScript", "OpenWeather API", "Chart.js"],
        role: "Frontend Developer"
    }
];

// SingleProject component
const SingleProject = ({ project }) => {
    const { name, description, tags, code, demo, tools, role } = project;

    return (
        <div className='group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-3 py-6 bg-[#202020] shadow-2xl rounded-lg border border-[#D3D3D3]'>
            <div className='flex flex-col items-center justify-between w-full h-full '>

                <div className="flex items-center w-full relative mb-2">
                    {/* Left corner dots */}
                    <div className="flex flex-row space-x-1 absolute left-5">
                        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500"></div>
                    </div>

                    {/* Centered name */}
                    <h2 className='text-[#EFF3F4] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-[110%] capitalize mb-2 mx-auto'>
                        {name}
                    </h2>
                </div>



                <div className="bg-background py-5 pl-6  border-t  border-orange-500 ">

                    <div className="blink">
                        <span className="mr-2 text-white">const</span>
                        <span className="mr-2 text-orange-400 font-semibold ">project</span>
                        <span className="mr-2 text-white">=</span>
                        <span className="text-gray-200">{'{'}</span>
                    </div>
                    <div className="w-full px-4 py-3 flex flex-col gap-2">
                        <p className="text-[#EFF3F4] text-xs sm:text-sm md:text-base">
                            <span className="font-bold text-orange-400 underline underline-offset-2">myRole:</span> {role}
                        </p>

                        <div>
                            <p className="text-orange-400 text-xs sm:text-sm md:text-base font-bold mb-1.5 underline underline-offset-2">
                                Tech Stack:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-orange-500 text-[#EFF3F4] px-2 py-1 rounded-md text-xs"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-[#EFF3F4] text-xs sm:text-sm md:text-base mt-2">
                            <span className="font-bold text-orange-400 underline underline-offset-2">Description:</span> {description}
                        </p>
                        <div><span className="text-gray-200">{`};`}</span></div>
                    </div>
                </div>



                <div className="flex items-center justify-between w-full mt-4 px-4">
                    <a
                        href={demo}
                        target='_blank'
                        rel="noreferrer"
                        className="flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 group hover:text-orange-600 hover:border-orange-600 hover:scale-110 decoration-clone cursor-pointer no-underline delay-[0.3s]">
                        <FaPlay className="text-xs sm:text-sm md:text-base" />
                    </a>

                    <a
                        href={code}
                        target='_blank'
                        rel="noreferrer"
                        className="flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:text-orange-600 hover:border-orange-600 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 group cursor-pointer no-underline delay-[0.3s]">
                        <FaCode className="text-xs sm:text-sm md:text-base" />
                    </a>
                </div>
            </div>
        </div>
    );
};

// Main Projects component
const Projects = () => {
    return (
        <div id='projects' className="relative z-50 my-8 sm:my-10 md:my-12 lg:my-24 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="sticky top-6 sm:top-8 md:top-10">
                <div className="w-[50px] sm:w-[60px] md:w-[80px] h-[50px] sm:h-[60px] md:h-[80px] bg-violet-500 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
                <div className="flex items-center justify-start relative">
                    <span className=" bg-gradient-to-r from-orange-500 to-red-600 absolute left-0 w-fit text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-base sm:text-lg md:text-xl rounded-md">
                        PROJECTS
                    </span>
                    <span className="w-full h-[2.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent "></span>
                </div>
            </div>
            <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                    {projectsData.map((project, index) => (
                        <div
                            id={`sticky-card-${index + 1}`}
                            key={index}
                            className="sticky-card w-full mx-auto max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl sticky"
                            style={{ top: `${60 + index * 20}px` }}
                        >
                            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                                <SingleProject project={project} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;