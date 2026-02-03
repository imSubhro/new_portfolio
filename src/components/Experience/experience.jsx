import { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import './experience.css';

// Experience data
const experienceData = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "BITS2BYTES Techfest 2025 & IMPULSE Cultural Fest 2025",
        location: "Remote",
        duration: "June 2025 - Sept 2025",
        type: "College Fest",
        description: [
            "Wrote frontend for static website using Next.js, React, JavaScript, Tailwind CSS.",
            "Developed an Awwwards nominated website animation clone using GSAP, Framer Motion, and JavaScript.",
            "Optimized website performance by implementing efficient state management and memoized selectors, with Redux Toolkit, reducing re-renders and improving load times."
        ],
        techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "GSAP", "Framer Motion", "Redux Toolkit"],
        // achievement: "Awwwards Nominated"
    }
];

// Single Experience Card Component - Timeline Style
const ExperienceCard = ({ experience, isLast }) => {
    const [expanded, setExpanded] = useState(true);
    const { role, company, location, duration, type, description, techStack, achievement } = experience;

    return (
        <div className="exp-timeline-item relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[19px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-orange-500/20 hidden sm:block" style={{ display: isLast ? 'none' : undefined }}></div>

            {/* Timeline Dot */}
            <div className="absolute left-0 top-4 hidden sm:flex">
                <div className="exp-dot w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-orange-500 flex items-center justify-center">
                    <FaBriefcase className="text-orange-500 text-sm" />
                </div>
            </div>

            {/* Content Card */}
            <div className="sm:ml-16 ml-0">
                {/* Duration Badge */}
                <div className="flex items-center gap-3 mb-3">
                    <span className="exp-duration px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs sm:text-sm font-technor font-[600] flex items-center gap-2">
                        <FaCalendarAlt className="text-xs" />
                        {duration}
                    </span>
                    <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-technor font-[600] uppercase">
                        {type}
                    </span>
                    {achievement && (
                        <span className="exp-achievement hidden md:flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-supreme">
                            <HiSparkles className="text-yellow-400" />
                            {achievement}
                        </span>
                    )}
                </div>

                {/* Main Card */}
                <div className="exp-card relative overflow-hidden rounded-xl border border-gray-700/50 bg-[#1a1a1a] hover:border-orange-500/50 transition-all duration-300">
                    {/* Accent Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-red-500"></div>

                    <div className="p-5 sm:p-6 pl-6 sm:pl-8">
                        {/* Role & Company */}
                        <div className="mb-4">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-technor font-[700] text-white mb-1">
                                {role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-gray-400">
                                <span className="font-supreme font-[500] text-sm sm:text-base">{company}</span>
                                <span className="text-orange-500">•</span>
                                <span className="flex items-center gap-1 text-sm">
                                    <FaMapMarkerAlt className="text-orange-500 text-xs" />
                                    {location}
                                </span>
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="space-y-3 mb-5">
                            {description.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 group">
                                    <FaChevronRight className="text-orange-500 text-xs mt-1.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                    <p className="text-gray-300 font-supreme font-[400] text-sm sm:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="pt-4 border-t border-gray-700/50">
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="exp-tech px-3 py-1.5 bg-[#161616] rounded-lg text-xs sm:text-sm font-supreme font-[500] text-gray-300 border border-gray-700/50 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Experience() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 bg-[#161616]" id="experience">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl">
                {/* Section Header */}
                <div className="flex justify-center mb-2">
                    <div className="w-3/4">
                        <div className="h-[1.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full" />
                    </div>
                </div>

                {/* Section Title */}
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="font-technor font-[700] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3">
                        Work <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">Experience</span>
                    </h2>
                    <p className="font-supreme text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
                        Building impactful digital experiences
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-8">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            isLast={index === experienceData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}