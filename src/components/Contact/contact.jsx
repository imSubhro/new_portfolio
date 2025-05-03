import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdMailUnread } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Contact() {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: ""
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log("Form submitted:", formData);
    //     // Reset form after submission
    //     setFormData({
    //         name: "",
    //         email: "",
    //         subject: "",
    //         message: ""
    //     });
    // };


    const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        window.location.href = `mailto:mohanta.subhro04@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} :
       ${formData.message} (${formData.email})`;
    };


    return (
        <>

            <div className=" flex flex-col relative text-center overflow-hidden lg-tablet:text-left  px-4 sm:px-6 lg-tablet:px-10 justify-start p-15  items-center z-0">
                <div className="w-[100%] text-4xl p-2 text-center text-[#E2711E] lg:text-7xl font-bold top-24 uppercase tracking-[4px] lg-tablet:tracking-[14px]">
                    Let's get in Touch!
                </div>

                <div className="flex flex-col space-y-10 pt-16">
                    <div className="flex flex-col lg-tablet:flex-row lg-tablet:gap-15 w-full justify-center items-center pt-4 ">
                        <div className="flex flex-col items-center w-full ">

                            <div className="flex flex-col items-center text-left text-sm font-light space-y-4">
                                <div className="border-b border-t dark:border-neutral-500 flex items-center w-full max-w-md">
                                    <div className=" px-4 my-2">
                                        <p className="text-base lg-tablet:text-xl">+91-9876543210</p>
                                    </div>
                                </div>


                                <div className="border-b dark:border-neutral-500 flex items-center w-full max-w-md">
                                    <div className="whitespace-nowrap px-4 mb-2">
                                        <p className="text-base lg-tablet:text-xl">mohanta.subhro04@gmail.com</p>
                                    </div>
                                </div>



                                <div className="border-b dark:border-neutral-500 flex items-center w-full max-w-md">
                                    <div className="whitespace-nowrap px-4 mb-2">
                                        <p className="text-base lg-tablet:text-xl">Kolkata, India</p>
                                    </div>
                                </div>

                            </div>

                        </div>



                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full max-w-lg">
                            <div className="flex flex-col lg-tablet:flex-row gap-2 lg-tablet:gap-4">
                                <input {...register('name')} placeholder="Name" className="contactInput outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#E69254]/40 focus:text-[#E69254]/40 hover:border-[#E69254]/40" type="text" />
                                <input {...register('email')} placeholder="Email" className="contactInput outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#E69254]/40 focus:text-[#E69254]/40 hover:border-[#E69254]/40" type="email" />
                            </div>
                            <div className="flex flex-col space-y-2 lg-tablet:w-full">
                                <input {...register('subject')} placeholder="Subject" className="contactInput outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#E69254]/40 focus:text-[#E69254]/40 hover:border-[#E69254]/40" type="text" />
                                <textarea {...register('message')} placeholder="Message" className="contactInput outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#E69254]/40 focus:text-[#E69254]/40 hover:border-[#E69254]/40" />
                                <button type="submit" className="py-5 px-10 rounded-md text-[#fffdfb] uppercase font-bold bg-[#D26412] hover:cursor-pointer">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}