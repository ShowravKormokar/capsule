import React, { useEffect } from 'react';
import gsap from 'gsap';
import './marqueetext.css';

const MarqueeText = () => {
    useEffect(() => {
        const handleWheel = (event) => {
            if (event.deltaY > 0) {
                // Scrolling down
                gsap.to(".marquee-text-marquee", {
                    transform: "translateX(-200%)",
                    duration: 6,
                    repeat: -1,
                    ease: "none"
                });

                gsap.to(".marquee-text-marquee img", {
                    rotation: 180,
                    duration: 1
                });
            } else {
                // Scrolling up
                gsap.to(".marquee-text-marquee", {
                    transform: "translateX(0%)",
                    duration: 6,
                    repeat: -1,
                    ease: "none"
                });

                gsap.to(".marquee-text-marquee img", {
                    rotation: 0,
                    duration: 1
                });
            }
        };

        // Add wheel event listener
        window.addEventListener("wheel", handleWheel);

        // Cleanup function
        return () => {
            window.removeEventListener("wheel", handleWheel);
            // Kill any ongoing GSAP animations
            gsap.killTweensOf(".marquee-text-marquee");
            gsap.killTweensOf(".marquee-text-marquee img");
        };
    }, []);

    // Create multiple marquee items
    const marqueeItems = Array(6).fill(null).map((_, index) => (
        <div key={index} className="marquee-text-marquee">
            <h1>Why Capsules®?*</h1>
        </div>
    ));

    return (
        <div className="marquee-text-container">
            <div className="marquee-text-move">
                {marqueeItems}
            </div>
        </div>
    );
};

export default MarqueeText;