import React from "react";
import Lottie from "lottie-react";
import testanim from "../../assets/lotti/lotti.json";
import PaperPlaneButton from "../paperPlaneButton/index.jsx";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        window.location.href = `mailto:mohanta.subhro04@gmail.com?subject=${subject}&body=Hi, my name is ${name} : ${message} (${email})`;
    };

    return (
        <div className="relative w-full overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-10">
            <div className="mx-auto max-w-6xl">

                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent  w-full" />
                    </div>
                </div>
                <h2 className=" pt-5 text-center text-3xl font-bold text-orange-500 sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-[10px] xl:text-7xl xl:tracking-[14px]">
                    LET'S GET IN TOUCH!
                </h2>

                <div className="mt-12 flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
                    {/* Animation container */}
                    <div className="mx-auto w-full max-w-xs md:mx-0 md:max-w-sm lg:max-w-md">
                        <div className="h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                            <Lottie animationData={testanim} loop={true} />
                        </div>
                    </div>

                    {/* Form container */}
                    <div className="mt-8 w-full md:mt-0 md:max-w-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <input
                                    name="name"
                                    placeholder="Name"
                                    className="contactInput flex-1 rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                    type="text"
                                    required
                                />
                                <input
                                    name="email"
                                    placeholder="Email"
                                    className="contactInput flex-1 rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                    type="email"
                                    required
                                />
                            </div>

                            <input
                                name="subject"
                                placeholder="Subject"
                                className="contactInput rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                type="text"
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                className="contactInput min-h-[120px] rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                required
                            />
                            <button><PaperPlaneButton /></button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}