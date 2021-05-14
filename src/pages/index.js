import * as React from "react"

import ParticlesComp from "../components/particles"
import * as indexStyles from "../components/index.module.scss" 

// markup
const IndexPage = () => {
  return (
    <div className={indexStyles.test}>
      <ParticlesComp />
    </div>
    
  );
}

export default IndexPage
