
import './preloader.css';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Hello", "नमस्ते", "নমস্কার", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export default function IntroductionComponent() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) {
            // When we reach the last word, wait a bit, then trigger exit
            const exitTimeout = setTimeout(() => {
                setIsVisible(false);
            }, 1000);
            return () => clearTimeout(exitTimeout);
        }

        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    // Animation variants
    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 0.75,
            transition: { duration: 1, delay: 0.2 }
        },
    };

    const slideUp = {
        initial: {
            top: 0
        },
        exit: {
            top: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
    };

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && dimension.width > 0 && (
                <motion.div
                    variants={slideUp}
                    initial="initial"
                    exit="exit"
                    className="introduction"
                >
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                    >
                        <span></span>{words[index]}
                    </motion.p>
                    <svg>
                        <motion.path
                            variants={curve}
                            initial="initial"
                            exit="exit"
                        ></motion.path>
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}