/** @format */

import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="footer-left">
          <img src="" alt="logo" />{" "}
          <span className="footer-span">
            Copyright 2021 Bangalore India | All Rights recieved
          </span>
        </div>
        <div className="footer-right">
          <span className="footer-span span2">Blog</span>
          <span className="footer-span span2">Gallery</span>
          <span className="footer-span span2">About us</span>
          <span className="footer-span span2">Contact us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
