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
            smooth: 2,
            effects: true,
        });
    });

    return (
        <>
            <Navbar />
            <main>
                <Outlet /> {/* This will render Hero, About, Contact, etc. */}
            </main>
        </>
    );
};

export default MainLayout;
