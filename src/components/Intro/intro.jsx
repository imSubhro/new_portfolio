import Introimg from "../../assets/image/aboutme.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import ScrollTop from "../Scrolltop/scroll";
import BackToHome from "../BackToHome/BackToHome";

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
            company: "Higher Secondary (WBCHSE)",
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
            <ScrollTop />
            <BackToHome />
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
                <div className="bg-gray-900 rounded-xl p-6 sm:p-10 shadow-xl">
                    <h2 className="text-3xl sm:text-4xl lg-tablet:text-5xl font-bold text-orange-500 text-center mb-12 lg-tablet:mb-16">
                        My Journey
                    </h2>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-600"></div>

                        {/* Timeline Items */}
                        {journeyData.map((item, index) => {
                            const colors = [
                                { bg: 'bg-red-500', text: 'text-white' },
                                { bg: 'bg-green-500', text: 'text-white' },
                                { bg: 'bg-blue-500', text: 'text-white' }
                            ];
                            const color = colors[index % colors.length];

                            return (
                                <div key={index} className="relative mb-8 flex items-center">
                                    {/* Timeline Circle */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                        <div className={`${color.bg} w-4 h-4 rounded-full border-4 border-gray-900`}></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`${item.position === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'} w-5/12`}>
                                        <div className={`${color.bg} ${color.text} p-6 rounded-lg shadow-lg relative`}>
                                            {/* Arrow pointing to timeline */}
                                            <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${item.position === 'left'
                                                ? 'right-0 translate-x-full border-l-8 border-l-current border-t-8 border-t-transparent border-b-8 border-b-transparent'
                                                : 'left-0 -translate-x-full border-r-8 border-r-current border-t-8 border-t-transparent border-b-8 border-b-transparent'
                                                }`}></div>

                                            <h3 className="text-lg font-bold mb-2">{item.period}</h3>
                                            <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                                            <p className="text-sm opacity-90">{item.company}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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