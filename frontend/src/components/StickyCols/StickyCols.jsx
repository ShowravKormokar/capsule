import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import colimg1 from "../../assets/cap1-square.jpg";
import colimg2 from "../../assets/cap2-square.jpg";
import colimg3 from "../../assets/cap3-square.jpg";

const StickyCols = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        // 1️⃣ Split text lines once DOM ready
        const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
        textElements.forEach((element) => {
            const split = new SplitText(element, { type: "lines", linesClass: "line" });
            split.lines.forEach((line) => {
                line.innerHTML = `<span>${line.textContent}</span>`;
            });
        });

        // Refresh ScrollTrigger after split
        ScrollTrigger.refresh();

        // 2️⃣ Initial state
        gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
        gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });

        // 3️⃣ Controlled phase logic using timeline (simpler and stable)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-cols",
                start: "top top",
                end: "+=500%",
                pin: true,
                scrub: 1,
            },
        });

        // PHASE 1: Reveal col-2, hide col-1
        tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-2", { x: "0%", duration: 0.8 }, "<")
            .to(".col-3", { y: "0%", duration: 0.8 }, "<")
            .to(".col-img-1 img", { scale: 1, duration: 0.8 }, "<")
            .to(".col-img-2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
            }, "<")
            .to(".col-img-2 img", { scale: 1, duration: 0.8 }, "<")

            // PHASE 2: Switch col-2 -> col-3 content
            .to(".col-2", { opacity: 0, scale: 1, duration: 0.8 })
            .to(".col-4", { y: "0%", duration: 0.8 }, "<")
            .to(".col-3 .col-content-wrapper .line span", {
                yPercent: -125,
                duration: 0.8,
            })
            .to(".col-3 .col-content-wrapper-2 .line span", {
                yPercent: 0,
                delay: 0.4,
                duration: 0.8,
            }, "<");

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    });


    return (
        <section className="sticky-cols w-screen overflow-hidden">
            <div className="sticky-cols-wrapper">
                <div className="col col-1">
                    <div className="col-content">
                        <div className="col-content-wrapper">
                            <h1 className="text-2xl font-bold leading-1">Enjoy the view
                                <br />
                                through—the wide
                                <br />
                                panoramic glass
                                <br />
                                window
                            </h1>
                            <p className="text-md font-medium"> Get closer to the desert nature than ever before
                                <br />
                                and admire this unique, breathtaking landscape.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                    <div className="col col-img-2">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="col-content-wrapper">
                        <h1 className="text-2xl font-bold leading-1">Enjoy the view
                            <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window
                        </h1>
                        <p className="text-md font-medium"> Get closer to the desert nature than ever before
                            <br />
                            and admire this unique, breathtaking landscape.
                        </p>
                    </div>
                    <div className="col-content-wrapper-2">
                        <h1>Enjoy the view
                            <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window
                        </h1>
                        <p> Get closer to the desert nature than ever before
                            <br />
                            and admire this unique, breathtaking landscape.
                        </p>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default StickyCols;