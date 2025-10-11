import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Choose = () => {

    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });

    useGSAP(() => {

        const lines = gsap.utils.toArray(".choose-title-clip");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 75%",
                end: "bottom 100%",
                scrub: true,
                // markers: true,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Animate the div height
        tl.fromTo(
            ".title-part",
            { height: "10vh" },
            { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
        );

        // Animate text reveal — run *at the same time*
        tl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            },
            "<" // 👈 runs at the same time as the previous animation
        );

        tl.from(".choose-sec", {
            yPercent: 50,
            duration: 1,
        }, "<");
    });

    return (
        <section className="choose-section w-full h-dvh p-8 pt-10">
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle'>Discover Available Capsule<span>®</span></p>
            <div className="mt-10 title-part origin-bottom ">
                <h1 className='choose-heading text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9] font-medium tracking-tighter choose-title'>
                    <span className="choose-title-break">Choose the one<span className="choose-title-clip">Choose the one</span></span>
                </h1>
                <h1 className='choose-heading text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9] font-medium tracking-tighter choose-title'>
                    <span className="choose-title-break">you like best<span className="choose-title-clip">you like best</span></span>
                </h1>
            </div>
            <div className="choose-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-16">
                <div className='lg:w-1/2 w-full text-[#b1a696] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-10 lg:pr-16'>
                    <p>You can choose one of three premium capsule houses in our offer. Each of our capsules provides the highest quality and meets the standards adjusted to your needs. Choose the one you like.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className=" lg:w-[30%] w-[60%]">
                        <p className="text-[.7rem] text-[#eae5dd]">All Capsules® houses—has built
                            based on the same rules:</p>
                    </div>
                    <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-8">
                        <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Sustainable
                        </div>
                        <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Nature—Care
                        </div>
                        <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Smart
                        </div>
                        <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Privacy
                        </div>
                        <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Spacious
                        </div>
                        <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Glassed-in
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;