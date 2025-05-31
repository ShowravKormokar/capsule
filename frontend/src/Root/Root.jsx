import React from "react";
// import App from "../App";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Cards from "../components/Cards/Cards";
import Outro from "../components/Outro/Outro";

const Root = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Intro />
            <Cards />
            <Outro />
        </div>
    );
};

export default Root;