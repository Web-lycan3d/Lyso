/** @format */

import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

const LandingMap = () => {
  return (
    <div className="landing-map-container">
      {/* check custom styles for button and h2 */}

      <div className="landing-map-contents">
        <h2 className="landing-h2">
          3D PRINT <span className="landing-span">YOUR SURVEY DATA</span>{" "}
        </h2>
        <div className="landing-map-flex">
          <div className="landing-map-text">
            <h2>Manufacture Physical models of your survey data in a breeze</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod.
            </span>
            <div className="landing-map-box">
              <img src="" alt="" />
            </div>{" "}
            <button className="custom-btn">
              <AiFillThunderbolt className="thunder-icon" />
              Get Started
            </button>{" "}
          </div>

          <div className="landing-map-image">
            <img
              src="https://i.ibb.co/0h7mmLn/terrain-map-indonesia-3d-map-generator-atlas-1024x742.webp"
              alt="map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMap;
