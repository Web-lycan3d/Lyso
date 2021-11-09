/** @format */

import React from "react";
import "./landingbody.styles.scss";

const LandingBody = () => {
  return (
    <div className="landing-body">
      <div className="landing-body-left">
        <h2>
          WHY <span className="span-blue"> LYSO?</span>
        </h2>
        <div className="landing-body-box">
          <p>Faster Data Acquisition</p>
          <span>
            Our high-end UAV surveying and inspection allow us to capture data
            40% faster than other traditional methods.
          </span>
        </div>{" "}
        <div className="landing-body-box">
          <p>Economical, Efficient & Safe</p>
          <span>
            Our UAV surveys are efficient, more economical and safer than
            customary manual surveys.
          </span>
        </div>
        <div className="landing-body-box">
          <p>Amplified Reliability</p>
          <span>
            The results obtained from our UAV’s are completely reliable centred
            on highly precise outcomes with high durability and extraordinary
            coverage area.
          </span>
        </div>
        <div className="landing-body-box">
          <p>Highly Accurate Survey</p>
          <span>
            We use machine learning, comprehensive UAV surveying, and mapping to
            produce highly accurate volumetric measurements and yield
            estimation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
