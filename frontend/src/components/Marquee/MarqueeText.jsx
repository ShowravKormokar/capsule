import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './marqueetext.css';

const MarqueeText = () => {
    const animationRef = useRef(null);
    const isForwardRef = useRef(true);
    const starRotationRef = useRef(0); // Track current rotation

    useEffect(() => {
        // Start with default forward animation
        const startMarqueeAnimation = (direction = 'forward') => {
            // Kill any existing animation first
            if (animationRef.current) {
                animationRef.current.kill();
            }

            const duration = 10; // Fixed duration (lower = faster)
            const repeatDelay = 0;

            if (direction === 'forward') {
                animationRef.current = gsap.to(".marquee-text-marquee", {
                    x: '-200%',
                    duration: duration,
                    repeat: -1,
                    ease: "none",
                    modifiers: {
                        x: gsap.utils.unitize(x => parseFloat(x) % 100)
                    }
                });

                // Scroll down: rotate clockwise 90deg from current position
                gsap.to(".star-rotate", {
                    rotation: `+=110`, // Rotate clockwise 90 degrees
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else {
                animationRef.current = gsap.to(".marquee-text-marquee", {
                    x: '0%',
                    duration: duration,
                    repeat: -1,
                    ease: "none",
                    modifiers: {
                        x: gsap.utils.unitize(x => parseFloat(x) % 100)
                    }
                });

                // Scroll up: rotate anti-clockwise 90deg from current position
                gsap.to(".star-rotate", {
                    rotation: `-=110`, // Rotate anti-clockwise 90 degrees
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        // Start initial animation
        startMarqueeAnimation('forward');
        isForwardRef.current = true;

        const handleWheel = (event) => {
            const newDirection = event.deltaY > 0 ? 'forward' : 'reverse';

            // Only change direction if it's different from current
            if ((newDirection === 'forward' && !isForwardRef.current) ||
                (newDirection === 'reverse' && isForwardRef.current)) {
                isForwardRef.current = newDirection === 'forward';
                startMarqueeAnimation(newDirection);
            }
        };

        // Add wheel event listener
        window.addEventListener("wheel", handleWheel);

        // Cleanup function
        return () => {
            window.removeEventListener("wheel", handleWheel);
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);

    // Create multiple marquee items
    const marqueeItems = Array(6).fill(null).map((_, index) => (
        <div key={index} className="marquee-text-marquee">
            <h1>Why Capsules®?<span className='star-rotate'>*</span></h1>
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