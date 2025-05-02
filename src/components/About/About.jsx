import { useState, useEffect } from 'react';
import helloimg from "../../assets/image/helloimg.jpeg";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-17">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 w-full max-w-7xl px-4">
                <div className={`transform transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    <h2 className="text-5xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">About Me</h2>
                    <h4 className='text-1xl md:text-2xl  mb-4'>Let's keep this Simple</h4>
                    <p className="text-lg mb-4 text-black ">
                        Hey! I'm Subhro Mohanta, a curious and driven Computer Science student based in Kolkata. I'm someone who genuinely enjoys learning, solving problems, and exploring how technology can improve everyday life. Whether it's diving into the world of AI or building something cool with code, I love the creative process behind tech.
                    </p>
                    <p className="text-lg mb-4 text-black-500">
                        I'm also a strong believer in community and collaboration —I've led technical workshops, mentored peers, and enjoy being part of a team that builds and grows together. Outside of tech, I'm passionate about cricket, leading my college team with the same energy and focus I bring to coding.
                    </p>
                    <p className="text-lg text-black">
                        I'm constantly evolving, and I'm always up for a good challenge and meaningful conversation.
                    </p>
                </div>
                <div className={`relative w-70 h-70 mx-auto transform transition-all duration-800 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-lg">
                        <div className="absolute inset-0.5 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                            <img src={helloimg} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}