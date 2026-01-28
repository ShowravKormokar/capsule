import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
// If the constants file still has the old names:
import { chooseLinesSM as activitiesLinesSM } from "../../constants/welcome"; import './activities.css';
import { activitiesLinesLG } from "../../constants/activites"; import './activities.css';

const Activities = () => {
    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const activitiesLines = isMobD ? activitiesLinesSM : activitiesLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".activities-title-clip");

        const activitiesTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".activities-section",
                start: "top 100%",
                end: "bottom 130%",
                scrub: true,
                markers: true,
            },
        });

        activitiesTl.from(".activities-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Animate the div height
        if (!isMobD) {
            activitiesTl.fromTo(
                ".activities-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        // Animate text reveal — run *at the same time*
        activitiesTl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            },
            "<" // 👈 runs at the same time as the previous animation
        );

        if (!isMobD) {
            activitiesTl.from(".activities-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }
    });

    return (
        <section className="activities-section w-full h-[110vh] p-8 pt-16">
            <p className='text-[.7rem] font-bold text-[#eae5dd] activities-subtitle'>Ready for an advanture?</p>
            <div className="lg:mt-10 mt-7 activities-part origin-bottom">
                {activitiesLines.map((line, index) => (
                    <h1 key={index} className={`activities-heading text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9]`} font-medium tracking-tighter>
                        <span className={`activities-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                            {line}
                            <span className={`activities-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                                {line}
                            </span>
                        </span>
                    </h1>
                ))}
            </div>
            <div className="activities-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                <div className='lg:w-1/2 w-full'>
                    <div className="lg:w-[30%] w-[60%]">
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
                <div className='lg:w-1/2 w-full text-[#b1a696] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-10'>
                    <p>We want to make sure your stay is exciting and enjoyable. That’s why we offer a variety of activities with different levels of engagement. Whether you seek
                        thrills or tranquility, there’s something for everyone to make your desert stay truly memorable.</p>
                </div>
            </div>
        </section>
    );
};

export default Activities;