/** @format */

import React from "react";

import Landindbodyimg from "./Landindbodyimg";
import "./landingbody.styles.scss";

const LandingBody = () => {
  return (
    <div className="landing-body-container">
      <div className="landing-body-contents">
        <h2>
          SECTORS <span>WE SERVICE</span>{" "}
        </h2>
        <div className="landing-body-items">
          <Landindbodyimg
            src="https://i.ibb.co/55LtcWP/Group-9519.webp"
            path="/sector/1?type=Mining"
          />
          <Landindbodyimg
            src="https://i.ibb.co/S7CL5W7/Group-9522.webp"
            path="/sector/4?type=Construction"
          />
          <Landindbodyimg
            src="https://i.ibb.co/5WGdvHG/Group-9523.webp"
            path="/sector/5?type=Security"
          />
          <Landindbodyimg
            src="https://i.ibb.co/xXcpjVn/Group-9521.webp"
            path="/sector/2?type=Seed Plantation"
          />
          <Landindbodyimg
            src="https://i.ibb.co/Lx5SK28/Group-9520.webp"
            path="/sector/3?type=Medical Delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
