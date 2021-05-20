import * as React from "react";
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <div className=" flex-col justify-center items-center pointer-events-none inset-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white mb-14 font-sans font-thin">
        onmyowntime
      </h1>
      <h2 className="prose">
        stuff i, avery sommer, do on my own time 
      </h2>
    </div>
  );
};

export default Hero;
