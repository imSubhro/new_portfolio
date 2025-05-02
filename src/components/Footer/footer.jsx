import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


export default function Footer() {


    return (
        <>
            <div className="bg-background text-foreground py-8 border-t border-blue-500 dark:border-pink-500">

                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <div className="mb-4 text-center">
                            <p>Developed with passion❤️, caffeine☕, and just a touch of madness. Enjoy the chaos!😜 </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://github.com/imSubhro" className="hover-float">
                                <FaGithub className="text-2xl " />
                            </a>
                            <a href="https://www.linkedin.com/in/subhro-mohanta" className="hover-float">
                                <FaLinkedin className="text-2xl " />
                            </a>
                            <a href="https://x.com/subhro_vk" className="hover-float">
                                <FaXTwitter className="text-2xl " />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>



    );



}