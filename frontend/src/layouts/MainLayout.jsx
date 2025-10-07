import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
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
