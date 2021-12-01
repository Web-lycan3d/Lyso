/** @format */

import React from "react";

import Landindbodyimg from "./Landindbodyimg";
import "./landingbody.styles.scss";

const LandingBody = () => {
  return (
    <div className="landing-body-container">
      <div className="landing-body-contents">
        <h2 className="landing-h2">
          SECTORS <span className="landing-span">WE SERVICE</span>{" "}
        </h2>
        <div className="landing-body-items">
          <Landindbodyimg
            text="Delivery"
            src="https://i.ibb.co/XJzB8sr/2021-02-04-T165145-Z-2126501675-MT1-CVMD41217305-RTRMADP-3-FEATURE-VACCINE-DRONE-1-min-1.webp"
            path="/sector/1?type=Mining"
          />
          <Landindbodyimg
            text="Surveilance"
            src="https://i.ibb.co/TkKWyDQ/jared-murray-NSuufgf-BME-unsplash-min-1.webp"
            path="/sector/4?type=Construction"
          />
          <Landindbodyimg
            text="infrastructure"
            src="https://i.ibb.co/NrF7Mr2/daniel-bernard-s67-PZz8-Xt3c-unsplash-1-min-1.webp"
            path="/sector/5?type=Security"
          />
          <Landindbodyimg
            text="Enviroment"
            src="https://i.ibb.co/rmm5d58/neostalgic-Dz-Uxa-Wweq-XI-unsplash-min-1.webp"
            path="/sector/2?type=Seed Plantation"
          />
          <Landindbodyimg
            text="Energy"
            src="https://i.ibb.co/hZMwZnf/1-min-1.webp"
            path="/sector/3?type=Medical Delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
