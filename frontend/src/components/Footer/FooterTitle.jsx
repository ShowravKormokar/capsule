import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import "./footertitle.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FooterTitle = () => {
    const ftConRef = useRef(null);

    useGSAP(() => {
        if (!ftConRef.current) return;

        // Get the original HTML before splitting
        const originalHTML = ftConRef.current.querySelector(".footer-title h1").innerHTML;

        // Create split - exclude the sub element from being split
        const split = new SplitText(".footer-title h1", {
            type: "chars",
            charsClass: "ftChar",
            // Exclude the <sub> element from being split
            exclude: "sub"
        });

        // Wrap each character in a span for animation
        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        // Handle the sub element separately
        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            const subSpan = sub.querySelector("span");

            // Add to innerChars array
            innerChars.push(subSpan);
        }

        // Initial state - start from left (-120%)
        gsap.set(innerChars, { x: "-120%" });

        // Animation - move to normal position
        gsap.to(innerChars, {
            x: "0%",
            stagger: 0.02, // Add stagger for character-by-character reveal
            ease: "power3.out",
            scrollTrigger: {
                trigger: ftConRef.current,
                start: "top 85%",
                end: "top 70%",
                scrub: true,
                // markers: true
            }
        });

        // Cleanup - revert the split and restore original HTML
        return () => {
            split.revert();
            // Restore the original HTML with sub element
            ftConRef.current.querySelector(".footer-title h1").innerHTML = originalHTML;
        };

    }, { scope: ftConRef });

    return (
        <section ref={ftConRef} className='relative z-1 w-screen h-[50vh] border-1 border-t-[#c4c1b9]'>
            <div className='w-full flex justify-between items-center px-6 mt-8'>
                <p className='text-[#b1a696] text-[0.7rem]'>
                    Website made by—<a href="#" className='text-[#f2ede5]'>Moyra.co</a>
                </p>
                <p className='text-[#b1a696] text-[0.7rem]'>
                    This website is using <a href="#" className='text-[#f2ede5]'>cookies</a>
                </p>
                <p className='text-[#b1a696] text-[0.7rem]'>
                    All rights reserved © <a href="#" className='text-[#f2ede5]'>2025</a>
                </p>
            </div>

            <div className='footer-title w-full text-center'>
                <h1 className='text-[15vw] font-bold'>
                    Capsules<sub>®</sub>
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;