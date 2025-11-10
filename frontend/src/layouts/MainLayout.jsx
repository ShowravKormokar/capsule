import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { initLenis } from "../lib/lenis";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MainLayout = () => {

    // useEffect(() => {
    //     const lenis = initLenis();
    //     return () => {
    //         lenis.destroy(); // cleanup on unmount
    //     };
    // }, []);

    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
        });
    });

    return (
        <>
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Outlet /> {/* Hero, About, Contact, etc. */}
                        <div className="h-dvh border-amber-600"></div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;