import { useState } from "react";

import python from "../../assets/image/logos/python.svg";
import c from "../../assets/image/logos/c.svg";
import Cplus from "../../assets/image/logos/c++.png";
import html from "../../assets/image/logos/html.svg";
import css from "../../assets/image/logos/css.svg";
import js from "../../assets/image/logos/javascript.svg";
import react from "../../assets/image/logos/react.webp";
import vite from "../../assets/image/logos/vite.svg";
import flask from "../../assets/image/logos/flask.png";
import django from "../../assets/image/logos/django.svg";
import tailwind from "../../assets/image/logos/tailwind.png";
import bootstrap from "../../assets/image/logos/bootstrap.png";
import nodejs from "../../assets/image/logos/nodejs.svg";
import next from "../../assets/image/logos/next.webp";
import mysql from "../../assets/image/logos/mysql.svg";
import postgresql from "../../assets/image/logos/postgresql.svg";
import mongodb from "../../assets/image/logos/mongodb.svg";
import supabase from "../../assets/image/logos/supabase.png";
import firebase from "../../assets/image/logos/firebase.png";
import docker from "../../assets/image/logos/docker.svg";
import numpy from "../../assets/image/logos/numpy.png";
import matplotlib from "../../assets/image/logos/matplotlib.png";
import opencv from "../../assets/image/logos/opencv.png";
import pandas from "../../assets/image/logos/pandas.png";
import tensorflow from "../../assets/image/logos/tensorflow.png";
import pytorch from "../../assets/image/logos/pytorch.png";
import scikit from "../../assets/image/logos/scikit.png";
import matlab from "../../assets/image/logos/matlab.png";
import npm from "../../assets/image/logos/npm.png";
import vercel from "../../assets/image/logos/vercel.png";
import render from "../../assets/image/logos/render.png";
import colab from "../../assets/image/logos/colab.png";
import jupyter from "../../assets/image/logos/jupyter.png";
import markdown from "../../assets/image/logos/markdown.png";
import git from "../../assets/image/logos/git.svg";
import github from "../../assets/image/logos/github.png";
import vscode from "../../assets/image/logos/vscode.svg";
import figma from "../../assets/image/logos/figma.png";




export default function Skills() {


    const [hoveredIndex, setHoveredIndex] = useState(null);


    // This is where you just need to change the image paths
    // Replace these paths with your actual image paths
    const skillLogos = [
        { src: python, alt: "Python" },
        { src: c, alt: "C" },
        { src: Cplus, alt: "C++" },
        { src: html, alt: "HTML" },
        { src: css, alt: "CSS" },
        { src: js, alt: "JavaScript" },
        { src: react, alt: "React" },
        { src: vite, alt: "Vite" },
        { src: flask, alt: "Flask" },
        { src: django, alt: "Django" },
        { src: tailwind, alt: "Tailwind" },
        { src: bootstrap, alt: "Bootstrap" },
        { src: nodejs, alt: "Node.js" },
        { src: next, alt: "Next.js" },
        { src: mysql, alt: "MySQL" },
        { src: postgresql, alt: "PostgreSQL" },
        { src: mongodb, alt: "MongoDB" },
        { src: supabase, alt: "Supabase" },
        { src: firebase, alt: "Firebase" },
        { src: docker, alt: "Docker" },
        { src: numpy, alt: "Numpy" },
        { src: matplotlib, alt: "Matplotlib" },
        { src: opencv, alt: "Opencv" },
        { src: pandas, alt: "Pandas" },
        { src: tensorflow, alt: "Tensorflow" },
        { src: scikit, alt: "Scikit" },
        { src: pytorch, alt: "Pytorch" },
        { src: matlab, alt: "Matlab" },
        { src: npm, alt: "npm" },
        { src: vercel, alt: "Vercel" },
        { src: render, alt: "Render" },
        { src: git, alt: "Git" },
        { src: github, alt: "Github" },
        { src: markdown, alt: "Markdown" },
        { src: vscode, alt: "Vscode" },
        { src: figma, alt: "Figma" },
        { src: colab, alt: "Colab" },
        { src: jupyter, alt: "Jupyter" },

    ];

    const duplicatedLogos = [...skillLogos, ...skillLogos];


    return (

        <>
            <div className="font-technor py-12 overflow-hidden" id="skills">

                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent  w-full" />
                    </div>
                </div>
                <div className="flex justify-center my-5 lg:py-10">
                    <div className="flex  items-center">
                        <span className="w-24 h-[1.5px] bg-orange-400"></span>
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 w-fit text-white p-2 px-5 text-xl rounded-md">
                            Skills
                        </span>
                        <span className="w-24 h-[1.5px] bg-orange-400"></span>
                    </div>
                </div>


                {/* Infinite scrolling container */}
                <div className="relative w-full h-36 overflow-hidden">
                    <div className="flex absolute animate-scroll hover:animation-pause">
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="group relative mx-4 md:mx-8 h-25 w-25 border border-orange-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-90 hover:shadow-lg hover:shadow-orange-500/50"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Background fade animation on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

                                <div className="flex flex-col items-center">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="w-12 h-12 z-10 group-hover:text-orange-500"
                                    />
                                    <p className="text-white text-xs sm:text-sm mt-1 text-center">
                                        {logo.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for the infinite scroll animation with pause on hover */}
                <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 50s linear infinite;
  }
`}</style>

            </div>

        </>

    );
}


