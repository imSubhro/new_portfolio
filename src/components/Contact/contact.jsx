import React, { useState } from "react";
import Lottie from "lottie-react";
import testanim from "../../assets/lotti/lotti.json";
import PaperPlaneButton from "../paperPlaneButton/index.jsx";
import { useForm } from "@formspree/react";
import CurvedLoop from '../CurvedLoop';


export default function Contact() {
    // TO SET UP EMAIL FUNCTIONALITY:
    // 1. Go to https://formspree.io and create a free account
    // 2. Create a new form and get your form ID
    // 3. Replace "xgvekldz" below with your actual Formspree form ID
    const [state, handleSubmit] = useForm("xjkrqgkg"); // Replace with your Formspree form ID
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        setIsSubmitting(true);
        await handleSubmit(e);

        if (state.succeeded) {
            // Reset form after successful submission
            e.target.reset();
            setTimeout(() => {
                setIsSubmitting(false);
            }, 2000);
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-10" id="contact">
            <div className="mx-auto max-w-6xl">
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent  w-full" />
                    </div>
                </div>
                <h2 className=" pt-5 text-center text-3xl font-technor font-[700] text-orange-500 sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-[10px] xl:text-7xl xl:tracking-[14px]">
                    LET'S GET IN TOUCH!
                </h2>

                {/* CurvedLoop positioned above contact details only */}
                {/* <div className="relative w-full max-w-4xl mx-auto mt-8 mb-6 h-16 overflow-hidden">
                    <CurvedLoop
                        marqueeText="NEVER STOP ✦ WORKS HARD ✦ NJOY LIFE ✦ DO MORE ✦ DREAM BIG ✦"
                        speed={2}
                        curveAmount={200}
                        direction="right"
                        interactive={true}
                        className="text-sm text-orange-400/60"
                    />
                </div> */}

                <div className="mt-12 flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
                    {/* Animation container */}
                    <div className="mx-auto w-full max-w-xs md:mx-0 md:max-w-sm lg:max-w-md">
                        <div className="h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                            <Lottie animationData={testanim} loop={true} />
                        </div>
                    </div>

                    {/* Form container */}
                    <div className="mt-12 w-full md:mt-0 md:max-w-lg">
                        {state.succeeded && (
                            <div className=" font-technor font-[600] mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                                Thanks for your message! I'll get back to you soon.
                            </div>
                        )}

                        {state.errors && state.errors.length > 0 && (
                            <div className=" font-technor font-[600] mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                                Oops! There was an error sending your message. Please try again.
                            </div>
                        )}

                        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <input
                                    name="name"
                                    placeholder="Name"
                                    className=" font-supreme font-[600] contactInput flex-1 rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                    type="text"
                                    required
                                    disabled={isSubmitting}
                                />
                                <input
                                    name="email"
                                    placeholder="Email"
                                    className=" font-supreme font-[600] contactInput flex-1 rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                    type="email"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <input
                                name="subject"
                                placeholder="Subject"
                                className=" font-supreme font-[600] contactInput rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                type="text"
                                required
                                disabled={isSubmitting}
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                className=" font-supreme font-[600] contactInput min-h-[120px] rounded-sm border-b border-[#FF6200] bg-slate-400/10 px-4 py-3 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#FF6200]/70 focus:text-gray-300 hover:border-[#FF6200]/40"
                                required
                                disabled={isSubmitting}
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting || state.submitting}
                                className={` font-technor font-[600] transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                <div className={`transform transition-all duration-500 ${isSubmitting ? 'scale-110' : ''}`}>
                                    <PaperPlaneButton isSubmitting={isSubmitting} />
                                </div>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}