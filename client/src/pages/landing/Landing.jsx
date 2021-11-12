/** @format */

import React from "react";
import "./landing.styles.scss";
import { AiFillAppstore } from "react-icons/ai";
import LandingBody from "../../components/landingCom/LandingBody";
import LandingFooter from "../../components/landingCom/LandingFooter";

const Landing = () => {
  const query = window.Qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  if (query.uploaded) {
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.history.pushState({}, "", "/");
    }, 500);
  }

  return (
    <React.Fragment>
      <div className="landing-container">
        <div className="landing-contents">
          <div className="landing-text-box">
            <h2>DATA PROCESSING</h2>
            <span>
              Save precious processing time and improve the accuracy of your
              drone survey with our Survey Data Processing services, now more
              efficient than ever before. LYSO offers all-in-one drone survey
              solutions that contain all the resources that you need to plan,
              visualize, process, and analyze aerial data.
            </span>
          </div>
          <div className="landing-text-box">
            <h2>SURVEY</h2>
            <span>
              Save precious processing time and improve the accuracy of your
              drone survey with our Survey Data Processing services, now more
              efficient than ever before. LYSO offers all-in-one drone survey
              solutions that contain all the resources that you need to plan,
              visualize, process, and analyze aerial data.
            </span>
          </div>
          <div className="landing-header-footer">
            <h3>
              SECTORS <span className="span-blue"> WE SERVICE</span>{" "}
            </h3>
            <div className="header-footer-contents">
              <div className="icon-box">
                <AiFillAppstore className="landing-icon" />
                <span>Delivery</span>
              </div>
              <div className="icon-box">
                <AiFillAppstore className="landing-icon" />
                <span>Energy</span>
              </div>
              <div className="icon-box">
                <AiFillAppstore className="landing-icon" />
                <span>Environment</span>
              </div>
              <div className="icon-box">
                <AiFillAppstore className="landing-icon" />
                <span>Insfrastructure</span>
              </div>
              <div className="icon-box">
                <AiFillAppstore className="landing-icon" />
                <span>Surveilance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingBody />
      <LandingFooter />
    </React.Fragment>
  );
};
export default Landing;
