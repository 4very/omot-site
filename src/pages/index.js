import * as React from "react";

import Base from "../components/base";
import Photopreview from "../components/photopreview";
import Hero from "../components/hero";
import ParticlesComp from "../components/particles";
import Blogpreview from "../components/blogpreview";

const IndexPage = () => {
  return (
    <>
      <Base>
        <ParticlesComp />
        <Hero />
        <div className="left-0 top-full absolute bg-background w-full">
          <Photopreview />
          <Blogpreview />
        </div>
      </Base>
    </>
  );
};

export default IndexPage;
