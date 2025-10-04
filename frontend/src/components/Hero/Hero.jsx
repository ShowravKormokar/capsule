import React, { useRef, useEffect } from 'react';
import smoke from "../../assets/smoke_final.mp4";

const Hero = () => {
    const videoRef = useRef(null);

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 3.0;
        }
    };

    return (
        <section className="w-dvw h-dvh border p-2">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">

                {/* Background image (down layer) */}
                <div className="absolute inset-0 bg-[url('./assets/cap1.png')] bg-no-repeat bg-cover bg-center z-0"></div>

                {/* Smoke video (upper layer) */}
                <video
                    src={smoke}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none object-center opacity-40 mix-blend-hard-light "
                ></video>

                {/* Content class=" absolute object-cover hide-in-safari object-center h-full w-full opacity-0 mix-blend-hard-light  scale-[1.75]"*/}
                <div className="h-full p-4 flex flex-col justify-center">
                    <div className="relative">
                        <h1
                            className="text-[#f4efe7] text-start text-6xl mt-10 md:text-9xl font-bold tracking-wider lg:absolute lg:bottom-44 lg:left-2"
                            style={{ textShadow: '2px 2px 4px #aaa' }}
                        >
                            Capsules®
                        </h1>

                        <div className="w-full h-auto absolute top-50 flex justify-between items-end">
                            <h2
                                className="text-start lg:mt-0 text-[#f4efe7] lg:text-2xl lg:font-bold tracking-wider flex flex-col gap-1"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                <span>Closer to</span>
                                <span>Nature—Closer</span>
                                <span>to Yourself</span>
                            </h2>

                            <p
                                className="w-[20%] text-[#f4efe7] text-[0.7rem] font-normal mt-12  md:font-medium tracking-wide lg:text-end  text-justify"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                Spend unforgettable and remarkable time in the Californian desert with—Capsules.
                            </p>
                        </div>
                    </div>

                    {/* Mobile image fallback */}
                    <div className="block lg:hidden mt-10 mb-6">
                        <img
                            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fhero-mobile.png&w=2559&q=80"
                            alt="mobile bg"
                            className="w-full rounded-[2rem] object-cover shadow-[0_0_20px_rgba(255,0,0,0.15)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
