import * as React from "react";

import Base from "../components/base";
import Blogpreview from "../components/blogpreview";
import Hero from "../components/hero";
import ParticlesComp from "../components/particles";

// markup
const IndexPage = () => {
  return (
    <>
      <Base>
        <ParticlesComp />
        <Hero />
        <div className="left-0 top-full absolute">
          <Blogpreview />
        </div>
      </Base>
    </>
  );
};

export default IndexPage;
