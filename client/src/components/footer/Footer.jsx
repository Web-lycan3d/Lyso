/** @format */

import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="footer-left">
          <img src="https://i.ibb.co/f0Ggrj7/lyso-min.png" alt="logo" />{" "}
          <span className="footer-span">
            Copyright 2021 Bangalore India | All Rights recieved
          </span>
        </div>
        <div className="footer-right">
          <span className="footer-span span2">
            {" "}
            <Link className="no-dec" to="">
              Blog
            </Link>{" "}
          </span>
          <span className="footer-span span2">
            {" "}
            <Link className="no-dec" to="/about">
              About us
            </Link>{" "}
          </span>
          <span className="footer-span span2">
            {" "}
            <Link className="no-dec" to="/contact">
              Contact us
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
