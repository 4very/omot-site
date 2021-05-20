import * as React from "react"

import NavBar from "./nav"


// markup
const Base = (props) => {
    return (
        <>
            <NavBar />
            {props.children}
        </>
    );
}

export default Base
