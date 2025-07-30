"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function BlobCursor({
    blobType = "circle",
    fillColor = "#FF7127",
    trailCount = 3,
    sizes = [60, 125, 75],
    innerSizes = [],
    innerColor = "rgba(255,255,255,0.8)",
    opacities = [0.6, 0.6, 0.6],
    shadowColor = "rgba(0,0,0,0.75)",
    shadowBlur = 5,
    shadowOffsetX = 10,
    shadowOffsetY = 10,
    filterId = "blob",
    filterStdDeviation = 30,
    filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
    useFilter = true,
    fastDuration = 0.1,
    slowDuration = 0.5,
    fastEase = "power3.out",
    slowEase = "power1.out",
    zIndex = 100,
}) {
    const blobsRef = useRef([]);
    const isVisible = useRef(true);

    const handleMove = useCallback(
        (e) => {
            if (!isVisible.current) return;

            const x = "clientX" in e ? e.clientX : e.touches?.[0]?.clientX;
            const y = "clientY" in e ? e.clientY : e.touches?.[0]?.clientY;

            if (x === undefined || y === undefined) return;

            blobsRef.current.forEach((el, i) => {
                if (!el) return;
                const isLead = i === 0;
                gsap.to(el, {
                    x: x,
                    y: y,
                    duration: isLead ? fastDuration : slowDuration,
                    ease: isLead ? fastEase : slowEase,
                });
            });
        },
        [fastDuration, slowDuration, fastEase, slowEase]
    );

    const handleMouseEnter = useCallback(() => {
        isVisible.current = true;
        blobsRef.current.forEach((el) => {
            if (el) {
                gsap.to(el, { opacity: el.dataset.originalOpacity || 0.4, duration: 0.3 });
            }
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        isVisible.current = false;
        blobsRef.current.forEach((el) => {
            if (el) {
                gsap.to(el, { opacity: 0, duration: 0.3 });
            }
        });
    }, []);

    useEffect(() => {
        // Global mouse event listeners
        document.addEventListener("mousemove", handleMove);
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Set original opacity for each blob
        blobsRef.current.forEach((el, i) => {
            if (el) {
                el.dataset.originalOpacity = opacities[i];
            }
        });

        return () => {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("touchmove", handleMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [handleMove, handleMouseEnter, handleMouseLeave, opacities]);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full pointer-events-none select-none z-[9999]"
            style={{ zIndex }}
        >
            {useFilter && (
                <svg className="absolute w-0 h-0">
                    <filter id={filterId}>
                        <feGaussianBlur
                            in="SourceGraphic"
                            result="blur"
                            stdDeviation={filterStdDeviation}
                        />
                        <feColorMatrix in="blur" values={filterColorMatrixValues} />
                    </filter>
                </svg>
            )}

            <div
                className="absolute inset-0 overflow-hidden"
                style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
            >
                {Array.from({ length: trailCount }).map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => (blobsRef.current[i] = el)}
                        className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            width: sizes[i],
                            height: sizes[i],
                            borderRadius: blobType === "circle" ? "50%" : "0",
                            backgroundColor: fillColor,
                            opacity: opacities[i],
                            boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
                            transition: "opacity 0.3s ease",
                        }}
                    >
                        <div
                            className="absolute"
                            style={{
                                width: innerSizes[i],
                                height: innerSizes[i],
                                top: (sizes[i] - innerSizes[i]) / 2,
                                left: (sizes[i] - innerSizes[i]) / 2,
                                backgroundColor: innerColor,
                                borderRadius: blobType === "circle" ? "50%" : "0",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
