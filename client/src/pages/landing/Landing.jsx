/** @format */

import React, { useEffect } from "react";
import "./landing.styles.scss";
import { AiFillThunderbolt } from "react-icons/ai";
import LandingBody from "../../components/landingCom/LandingBody";
import LandingFooter from "../../components/landingCom/LandingFooter";
import LandingMap from "../../components/landingCom/LandingMap";
import { Toaster } from "react-hot-toast";
import InternetStaus from "../../components/InternetStaus";

const Landing = () => {
  InternetStaus();

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
          <div className="landing-header">
            <div className="landing-text-box">
              <h2>
                DATA <span> PROCESSING </span>
              </h2>
              <button className="custom-btn">
                <AiFillThunderbolt className="thunder-icon" />
                Start now
              </button>
            </div>
            <p className="vertical-line"></p>
            <div className="landing-text-box">
              <h2>
                SURVEY <span> SERVICES </span>
              </h2>
              <button className="custom-btn">
                <AiFillThunderbolt className="thunder-icon" /> Know more
              </button>
            </div>
          </div>
        </div>
      </div>
      <LandingBody />
      <LandingMap />
      <LandingFooter />
      <Toaster />
    </React.Fragment>
  );
};
export default Landing;
