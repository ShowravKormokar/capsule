import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MainLayout = () => {
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
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;