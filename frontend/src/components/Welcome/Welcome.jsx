import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";

const Welcome = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
                // markers: true
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            });
        });

    });

    return (
        <div className='welcome-section w-full h-dvh text-[#2A2725]'>
            <div className='flex flex-col gap-2 tracking-[-4] leading-2'>
                <div className="w-full md:text-[70px] text-4xl welcome-line md:px-7 px-6 md:py-20">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-normal tracking-wide">
                                {text}
                                <span className="clip-text-welcome md:tracking-normal tracking-wide">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;