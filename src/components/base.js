import * as React from "react"

import NavBar from "./nav"


// markup
const Base = (props) => {
    return (
        <div>
            <div><NavBar /></div>
            {props.children}
        </div>
    );
}

export default Base
