import React from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import './overlay.css'

const MapLink = () => {
    useGSAP(() => {
        const cursor = document.querySelector("#cursor");
        const linkA = document.querySelector("#link-a");

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0
        });

        linkA.addEventListener("mouseenter", () => {
            cursor.textContent = "Show the map";
            gsap.to(cursor, { opacity: 1, duration: 0.2 });
        });

        linkA.addEventListener("mouseleave", () => {
            gsap.to(cursor, { opacity: 0, duration: 0.2 });
        });

        document.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.08,
                ease: "power3.out",
                overwrite: "auto"
            });
        });
    });


    return (
        <>
            {/* Cursor at top level */}
            <div id="cursor" className="custom-cursor" />

            <section className="w-screen relative h-[90vh] bg-[#181717] flex justify-center items-center text-center">
                <div>
                    <p className="text-[0.7rem] font-bold text-[#a79c8d] choose-subtitle">
                        Closer than you think
                    </p>

                    <h1 className="text-[5vw] leading-15 tracking-tight mt-5 text-[#f4efe7]">
                        Our Capsules® are located<br />
                        near Los Angeles with easy<br />
                        <a
                            href="#"
                            id="link-a"
                            className="text-[#b1a696] underline"
                        >
                            access by road.
                        </a>
                    </h1>
                </div>
            </section>
        </>
    );
};

export default MapLink;