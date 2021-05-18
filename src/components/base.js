import * as React from "react"

import NavBar from "./nav"
import ParticlesComp from "./particles"


// markup
const Base = (props) => {
    return (
        <>
            <ParticlesComp />
            <NavBar />
            {props.children}
        </>
    );
}

export default Base
