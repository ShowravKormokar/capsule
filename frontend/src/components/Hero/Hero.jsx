import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import mobileHeroBg from "../../assets/hero-mobile.png"
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });

    if (!isMobHero) {
        useGSAP(() => {
            gsap.to(".hero-section .hero-img", {
                yPercent: 10,
                scale: 1.1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                    // markers: true
                }
            });
        });
    }

    return (
        <section className="hero-section w-dvw h-dvh md:p-2 p-2.5 mb-20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <div className="responsive-mobile">
                    {/* Background image (down layer) */}
                    <div className="hero-img absolute inset-0 bg-[url('./assets/cap1.png')] bg-no-repeat bg-cover bg-center z-0 md:block hidden" />

                    {/* Mobile image fallback */}
                    <div className="block lg:hidden mt-10 mb-6">
                        <img
                            src={mobileHeroBg}
                            alt="mobile bg"
                            className="w-full rounded-[2rem] object-cover shadow-[0_-25px_45px_-10px_rgba(255,0,0,0.15)]"
                        />
                    </div>

                    {/* Smoke video (upper layer) */}
                    <video
                        src={smoke}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 md:w-full md:h-full object-cover z-10 pointer-events-none object-center opacity-50 mix-blend-hard-light md:top-0 top-[30%] h-[57%]  rounded-[2rem] md:px-0 px-4"
                    ></video>
                </div>
                <div className="h-full p-4 flex flex-col md:justify-center">
                    <div className="relative">
                        <h1
                            className="text-[#f4efe7] text-start text-6xl mt-10 md:text-9xl font-bold tracking-wider lg:absolute lg:bottom-44 lg:left-2"
                            style={{ textShadow: '2px 2px 4px #aaa' }}
                        >
                            Capsules®
                        </h1>

                        <div className="w-full h-auto absolute md:top-56 top-30 flex md:flex-row flex-col md:justify-between md:items-end">
                            <h2
                                className="text-start lg:mt-0 md:text-[#f4efe7] text-[#b1a696] text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                <span>Closer to</span>
                                <span>Nature—Closer</span>
                                <span>to Yourself</span>
                            </h2>

                            <p
                                className="md:w-[20%] w-[80%] text-[#f4efe7] text-[0.7rem] font-bold  md:font-medium tracking-wide lg:text-end mt-2 text-justify"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                Spend unforgettable and remarkable time in the Californian desert with—Capsules.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
