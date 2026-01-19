import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Preloader = () => {
    useGSAP(() => {
        let splits = {};

        const ctx = gsap.context(() => {
            document.fonts.ready.then(() => {
                // --------- SPLIT TEXT CREATION ----------
                const logoEl = document.querySelector(".preloader-logo h1");
                const footerEl = document.querySelector(".preloader-footer p");

                if (!logoEl || !footerEl) return;

                splits.logoChars = new SplitText(logoEl, {
                    type: "chars",
                    charsClass: "char",
                });

                splits.footerLines = new SplitText(footerEl, {
                    type: "lines",
                    linesClass: "line",
                });

                // --------- INITIAL STATES ----------
                gsap.set(splits.logoChars.chars, { xPercent: 100 });
                gsap.set(splits.footerLines.lines, { yPercent: 100 });
                gsap.set(".preloader-progress-bar", { scaleX: 0 });

                function animateProgress(duration = 4) {
                    const tl = gsap.timeline();
                    const counterSteps = 3;
                    let currentProgress = 0;

                    for (let i = 0; i < counterSteps; i++) {
                        const finalStep = i === counterSteps - 1;
                        const targetProgress = finalStep
                            ? 1
                            : Math.min(currentProgress + Math.random() * 0.3, 0.2);
                        currentProgress = targetProgress;
                        tl.to(".preloader-progress-bar", {
                            scaleX: targetProgress,
                            duration: duration / counterSteps,
                            ease: "power2.out",
                        });
                    };
                    return tl;
                };

                // --------- TIMELINE ----------
                const tl = gsap.timeline({ delay: 0.2 });

                tl.to(splits.logoChars.chars, {
                    xPercent: 0,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power4.inOut",
                })
                    .add(animateProgress(), "<")
                    .to
                    (
                        splits.footerLines.lines,
                        {
                            yPercent: 0,
                            stagger: 0.1,
                            duration: 0.8,
                            ease: "power4.out",
                        },
                        "0.25"
                    )
                    .set(".preloader-progress", { backgroundColor: "var(--base-300)" })
                    .to(splits.logoChars.chars, {
                        xPercent: -100,
                        stagger: 0.05,
                        duration: 1,
                        ease: "power4.inOut",
                    }, "-=0.5")
                    .to
                    (
                        splits.footerLines.lines,
                        {
                            yPercent: -100,
                            stagger: 0.1,
                            duration: 0.8,
                            ease: "power4.inOut",
                        },
                        "<"
                    )
                    .to(".preloader-progress", {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    }, "-=0.25")
                    .to(".preloader-mask", {
                        scale: 5,
                        duration: 2.5,
                        ease: "power3.out"
                    }, "<")
                    .to
                    (
                        splits.footerLines.lines,
                        {
                            opacity: 0,
                        },
                    )
                    ;
            });
        });

        return () => {
            Object.values(splits).forEach(split => split.revert());
            ctx.revert();
        };
    }, []);

    return (
        <div className="preloader relative z-51">
            <div className="preloader-progress">
                <div className="preloader-progress-bar"></div>
                <div className="preloader-logo">
                    <h1 className="logo-text">Capsule</h1>
                </div>
            </div>

            <div className="preloader-mask"></div>

            <div className="preloader-content">
                <div className="preloader-footer">
                    <p>
                        Spaces unfold in light and shadow, where structure finds its quiet
                        rhythm, and time aligns harmony.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Preloader;