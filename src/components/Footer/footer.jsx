import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


export default function Footer() {


    return (
        <>
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


        </>



    );



}


