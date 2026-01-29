import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import acImg1 from "../../assets/activities-1.png";
import acImg2 from "../../assets/activities-2.png";
import acImg3 from "../../assets/activities-3.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        // ✅ TARGET ONLY INNER IMAGES (NOT OUTER DIV)
        const images = gsap.utils.toArray(".image-item");

        const totalWidth =
            imgConRef.current.scrollWidth - containerRef.current.offsetWidth;

        let lastScroll = window.scrollY;
        let velocity = 0;

        // ✅ Horizontal scroll animation (unchanged)
        gsap.to(imgConRef.current, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-10% 10%",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
                // invalidateOnRefresh: true,
                // markers: true,

                // onUpdate: () => {
                //     const currentScroll = window.scrollY;
                //     velocity = currentScroll - lastScroll;
                //     lastScroll = currentScroll;

                //     // ✅ Smooth limited movement (no gap, no break)
                //     const move = gsap.utils.clamp(
                //         -60,
                //         60,
                //         velocity * 2.2
                //     );

                //     images.forEach((img, index) => {
                //         gsap.to(img, {
                //             x: move * (index % 2 === 0 ? 1 : -1),
                //             duration: 0.4,
                //             ease: "power3.out",
                //             overwrite: "auto"
                //         });
                //     });
                // }
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className='relative w-full h-dvh overflow-hidden'
        >
            <div
                ref={imgConRef}
                className="absolute top-0 left-0 h-full flex items-center justify-start gap-2 p-2 overflow-hidden"
            >
                {/* Image 1 */}
                <div className="flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <img
                        src={acImg1}
                        alt="Activity 1"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                </div>

                {/* Image 2 */}
                <div className="flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <img
                        src={acImg2}
                        alt="Activity 2"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                </div>

                {/* Image 3 */}
                <div className="flex-shrink-0 w-[80vw] h-full overflow-hidden">
                    <img
                        src={acImg3}
                        alt="Activity 3"
                        className="image-item w-full h-full object-cover rounded-[2.5rem]"
                    />
                </div>

                {/* Extra space */}
                {/* <div className="flex-shrink-0 w-[2%]"></div> */}
            </div>
        </section>
    );
};

export default Showcase;