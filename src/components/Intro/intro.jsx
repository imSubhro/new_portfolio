import Introimg from "../../assets/image/aboutme.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


export default function Intro() {
    // Journey data
    const journeyData = [
        {
            title: "Bengal Institute of Technology, Kolkata",
            company: "B.Tech in Computer Science and Engineering",
            period: "Oct 2022 - present",
            position: "left",
            logo: "B"
        },
        {
            title: "Salar E.Z. High School, Murshidabad",
            company: "Higher Secondary (WBCHSEB)",
            period: "Mar 2020 - April 2022",
            position: "right",
            logo: "S"
        },
        {
            title: "Simulia Tarini Prasad Institution, Murshidabad",
            company: "Secondary (WBBSE)",
            period: "Jan 2015 - Jan 2020",
            position: "left",
            logo: "S"
        },
    ];

    return (
        <div className="bg-[#161616] text-white">
            {/* About Me Section */}
            <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg-tablet:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col items-center mx-auto max-w-md lg-tablet:max-w-none">
                        <img
                            src={Introimg}
                            alt="About Me"
                            className="w-full max-w-md rounded-lg "
                        />
                        <p className="text-gray-400 font-semibold mt-4 text-center">
                            <span className="text-orange-500 font-bold">एक</span> Developer
                        </p>
                    </div>

                    <div className="mt-8 lg-tablet:mt-0">
                        <h2 className="text-3xl sm:text-4xl lg-tablet:text-5xl font-bold text-orange-500 mb-6">
                            About Me
                        </h2>
                        <div className="space-y-4 p-2">
                            <p className="text-base sm:text-lg text-gray-300">
                                Hey! I'm Subhro Mohanta, a curious and driven Computer Science student based in Kolkata. I'm someone who genuinely enjoys learning, solving problems, and exploring how technology can improve everyday life. Whether it's diving into the world of AI or building something cool with code, I love the creative process behind tech.
                            </p>
                            <p className="text-base sm:text-lg text-gray-400">
                                I'm also a strong believer in community and collaboration —I've led technical workshops, mentored peers, and enjoy being part of a team that builds and grows together. Outside of tech, I'm passionate about cricket, leading my college team with the same energy and focus I bring to coding.
                            </p>
                            <p className="text-base sm:text-lg text-gray-300">
                                I'm constantly evolving, and I'm always up for a good challenge and meaningful conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

                <div className="flex justify-center -translate-y-[1px] pb-5" >
                    <div className="w-3/2">
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent  w-full" />
                    </div>
                </div>
                <div className="bg-gray-400 rounded-xl p-6 sm:p-10 shadow-xl">
                    <h2 className="text-3xl sm:text-4xl lg-tablet:text-5xl font-bold text-orange-500 text-center mb-12 lg-tablet:mb-16">
                        My Journey
                    </h2>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute h-full w-1 bg-gray-700 left-6 lg-tablet:left-1/2 lg-tablet:transform lg-tablet:-translate-x-1/2"></div>

                        {/* Timeline Items */}
                        {journeyData.map((item, index) => (
                            <div key={index} className="relative mb-12 sm:mb-16 lg-tablet:mb-24">
                                {/* Mobile & Tablet View */}
                                <div className="lg-tablet:hidden flex">
                                    {/* Circle Marker (Left) */}
                                    <div className="absolute left-1 z-10">
                                        <div className="bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center border-4 border-gray-700">
                                            <span className="text-orange-500 font-bold">{item.logo}</span>
                                        </div>
                                    </div>

                                    {/* Content Box (Right) */}
                                    <div className="ml-16 w-full">
                                        <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
                                            <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                                            <p className="text-gray-400 font-medium mt-1 text-sm sm:text-base">{item.company}</p>
                                            <p className="text-gray-500 font-medium mt-2 text-sm sm:text-base">{item.period}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop View */}
                                <div className="hidden lg-tablet:grid lg-tablet:grid-cols-2 gap-8 items-center">
                                    {/* Left Side */}
                                    <div className={`${item.position === 'left' ? 'block' : 'invisible'}`}>
                                        <div className={`bg-gray-900 p-6 rounded-lg shadow-lg ${item.position === 'left' ? 'text-right ml-auto mr-8' : ''}`} style={{ maxWidth: "90%" }}>
                                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                            <p className="text-gray-400 font-medium mt-1">{item.company}</p>
                                            <p className="text-gray-500 font-medium mt-2">{item.period}</p>
                                        </div>
                                    </div>

                                    {/* Circle Marker (Center) */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center border-4 border-gray-700">
                                            <span className="text-orange-500 font-bold">{item.logo}</span>
                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className={`${item.position === 'right' ? 'block' : 'invisible'}`}>
                                        <div className={`bg-gray-900 p-6 rounded-lg shadow-lg ${item.position === 'right' ? 'ml-8' : ''}`} style={{ maxWidth: "90%" }}>
                                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                            <p className="text-gray-400 font-medium mt-1">{item.company}</p>
                                            <p className="text-gray-500 font-medium mt-2">{item.period}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className=" w-full h-[2.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent">

                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <div className="mb-5 pt-5 text-center">
                            <p>Developed with passion❤️, caffeine☕, and just a touch of madness. Enjoy the chaos!😜 </p>
                        </div>
                        <div className="flex  ">
                            <a href="https://github.com/imSubhro" className="hover-float w-12 h-12 md:w-14 md:h-14 icon hover:text-orange-500">
                                <FaGithub className="text-3xl " />
                            </a>
                            <a href="https://www.linkedin.com/in/subhro-mohanta" className="hover-float w-12 h-12 md:w-14 md:h-14 icon hover:text-blue-500">
                                <FaLinkedin className="text-3xl " />
                            </a>
                            <a href="https://x.com/subhro_vk" className="hover-float w-12 h-12 md:w-14 md:h-14 icon hover:text-blue-600">
                                <FaXTwitter className="text-3xl " />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}