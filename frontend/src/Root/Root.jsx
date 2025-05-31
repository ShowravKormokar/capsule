import React from "react";
// import App from "../App";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Cards from "../components/Cards/Cards";

const Root = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Intro />
            <Cards />
        </div>
    );
};

export default Root;