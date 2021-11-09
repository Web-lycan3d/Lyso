/** @format */

import React from "react";
import { Link } from "react-router-dom";
const LandingFooter = () => {
  return (
    <div className="landing-footer">
      <p className="p-blog">Blog</p>
      <div className="landing-footer-contents">
        <div className="landing-footer-box">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
            alt=""
          />
          <div className="landing-footer-text">
            <h2>Discover what's happening now in the world of</h2>{" "}
            <span className="footer-date">Date 12/08/1995</span>
            <span>
              We offer end to end solutions by providing survey, inspection &
              asset monitoring for industries such as <Link>Read more</Link>
            </span>
          </div>
        </div>
        <div className="landing-footer-box">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
            alt=""
          />
          <div className="landing-footer-text">
            <h2>Discover what's happening now in the world of</h2>
            <span className="footer-date">Date 12/08/1995</span>
            <span>
              We offer end to end solutions by providing survey, inspection &
              asset monitoring for industries such as <Link>Read more</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
