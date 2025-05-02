
import python from "../../assets/image/logos/python.svg";
import c from "../../assets/image/logos/c.svg";
import Cplus from "../../assets/image/logos/c++.png";
import html from "../../assets/image/logos/html.svg";
import css from "../../assets/image/logos/css.svg";
import js from "../../assets/image/logos/javascript.svg";
import react from "../../assets/image/logos/react.webp";
import flask from "../../assets/image/logos/flask.png";
import django from "../../assets/image/logos/django.svg";
import tailwind from "../../assets/image/logos/tailwind.png";
import bootstrap from "../../assets/image/logos/bootstrap.png";
import nodejs from "../../assets/image/logos/nodejs.svg";
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
    // This is where you just need to change the image paths
    // Replace these paths with your actual image paths
    const skillLogos = [
        { src: python, alt: "Python" },
        { src: c, alt: "c" },
        { src: Cplus, alt: "c++" },
        { src: html, alt: "html" },
        { src: css, alt: "css" },
        { src: js, alt: "js" },
        { src: react, alt: "react" },
        { src: flask, alt: "c" },
        { src: django, alt: "c" },
        { src: tailwind, alt: "c" },
        { src: bootstrap, alt: "c" },
        { src: nodejs, alt: "c" },
        { src: mysql, alt: "c" },
        { src: postgresql, alt: "c" },
        { src: mongodb, alt: "c" },
        { src: supabase, alt: "c" },
        { src: firebase, alt: "c" },
        { src: docker, alt: "c" },
        { src: numpy, alt: "c" },
        { src: matplotlib, alt: "c" },
        { src: opencv, alt: "c" },
        { src: pandas, alt: "c" },
        { src: tensorflow, alt: "c" },
        { src: scikit, alt: "c" },
        { src: pytorch, alt: "c" },
        { src: matlab, alt: "c" },
        { src: npm, alt: "c" },
        { src: vercel, alt: "c" },
        { src: render, alt: "c" },
        { src: git, alt: "c" },
        { src: github, alt: "c" },
        { src: markdown, alt: "c" },
        { src: vscode, alt: "c" },
        { src: figma, alt: "c" },
        { src: colab, alt: "c" },
        { src: jupyter, alt: "c" },

    ];



    return (

        <>
            <div className="">
                <h1 className='text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Skills</h1>
                <marquee direction="left" className="w-[100%] h-[150px] flex items-center justify-center ">
                    <div className="flex items-center">
                        {skillLogos.map((logo, index) => (
                            <div key={index} className=" cursor-pointer hover:transform hover:scale-140 hover:bg-linear-to-bl from-violet-500 to-fuchsia-500 mx-4 md:mx-8 h-[100px] w-[100px] border border-gray-400 rounded-full flex items-center justify-center">
                                <img src={logo.src} alt={logo.alt} className="w-[60px] h-[60px]" />
                            </div>
                        ))}
                    </div>
                </marquee>
            </div>

        </>

    );
}


