import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Welcome = () => {

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 80%",
                end: "bottom 40%",
                scrub: true,
                // markers: true
            },
        });

        lines.forEach((line) => {
            tl.to(line, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "none" });
        });

    });

    return (
        <div className='welcome-section my-36 mx-10 text-[#2A2725] '>
            <div className='flex flex-col gap-2 tracking-[-4] leading-2'>
                <div className=" text-[70px] welcome-line leading-[5px]">
                    <p className="welcome-text flex flex-col gap-[-2px]">
                        <span className="relative block text-darkBrown">
                            Welcome to a world of wild California
                            <span className="clip-text-welcome">Welcome to a world of wild California</span>
                        </span>

                        <span className="relative block text-darkBrown">
                            desert with Capsules®, where you will
                            <span className="clip-text-welcome">desert with Capsules®, where you will</span>
                        </span>

                        <span className="relative block text-darkBrown">
                            discover exquisite nature observing it
                            <span className="clip-text-welcome">discover exquisite nature observing it</span>
                        </span>

                        <span className="relative block text-darkBrown">
                            from capsule houses, nestled in the
                            <span className="clip-text-welcome">from capsule houses, nestled in the</span>
                        </span>

                        <span className="relative block text-darkBrown">
                            one of the most breathtaking
                            <span className="clip-text-welcome">one of the most breathtaking</span>
                        </span>

                        <span className="relative block text-darkBrown">
                            destination on the United States.
                            <span className="clip-text-welcome">destination on the United States.</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;