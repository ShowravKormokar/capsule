import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gallery.css';

import gbg1 from '../../assets/background1.png';
import gbg2 from '../../assets/background2.png';
import gbg3 from '../../assets/background3.png';
import gbg4 from '../../assets/background4.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const pageRef = useRef(null);

    useEffect(() => {

        // document.fonts.ready.then(() => {
        // Create new timeline
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-page4",
                start: "10% 10%",
                end: "220% 30%",
                scrub: 1,
                pin: true,
            }
        });

        // Add background color animation
        tl4.to(".gallery-page4", {
            backgroundColor: "#181717",
        }, 'start');

        gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3", {
            opacity: 1,
            x: 0
        });

        // Animation sequence
        tl4.to(".gallery-box h3", {
            opacity: 0,
        }, 'a')
            .to(".gallery-page4 .gallery-background", {
                width: "calc(100vw - 1rem)",
                height: "calc(100vh - 1rem)",
                borderRadius: "3.5rem",
                y: -40,
            }, 'a')
            .to(".gallery-page4 .gallery-background img", {
                transform: "scale(1)",
            }, 'a')
            .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")

            .to("#gallery-second", {
                transform: "translate(-50%, -56%)",
            }, 'b')
            .to("#gallery-second img", {
                transform: "scale(1)",
            }, 'b')
            .to(".gallery-page4 .gallery-background", {
                scale: 0.9,
                opacity: 0,
                y: -50
            }, 'b')
            .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")
            .to("#gallery-third", {
                transform: "translate(-50%, -56%)",
            }, 'c')
            .to("#gallery-third img", {
                transform: "scale(1)",
            }, 'c')
            .to("#gallery-second", {
                scale: 0.9,
                opacity: 0,
            }, 'c')
            .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0");

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Generate repeating Capsules® elements
    const generateCapsules = (quantity = 6) => {
        const capsules = [];
        for (let i = 1; i <= quantity; i++) {
            capsules.push(
                <h3 key={i} style={{ "--index": i }} className='tracking-tighter'>
                    Capsules®
                </h3>
            );
        }
        return capsules;
    };

    return (
        <section className="gallery-page4" ref={pageRef}>
            <div className="gallery-slider">
                <div
                    className="gallery-box"
                    style={{ "--time": "40s", "--quantity": 6 }}
                >
                    {generateCapsules(6)}
                </div>
            </div>

            <div className="gallery-background">
                <img src={gbg1} alt="Classic Capsule" />
                <div className="gallery-topText">
                    <h4>ClassicCapsule®</h4>
                    <h3>(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <h3>Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate retreat in a desert landscape</h3>
                </div>
            </div>

            <div id="gallery-second" className="gallery-background2">
                <img src={gbg2} alt="Terrace Capsule" />
                <div className="gallery-topText">
                    <h4>Terrace Capsule®</h4>
                    <h3>(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <h3>Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate
                        retreat in a desert landscape</h3>
                </div>
            </div>

            <div id="gallery-third" className="gallery-background2">
                <img src={gbg3} alt="Desert Capsule" />
                <div className="gallery-topText">
                    <h4>Desert Capsule®</h4>
                    <h3>(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <h3>Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate
                        retreat in a desert landscape</h3>
                </div>
            </div>
        </section>
    );
};

export default Gallery;