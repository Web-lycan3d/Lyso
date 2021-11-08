/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  const [sectorDrowpDown, setsectorDrowpDown] = useState(false);
  const [serviceDrowpDown, setserviceDrowpDown] = useState(false);

  const handleSectorDropDown = () => {
    setsectorDrowpDown(true);
  };
  const handleServiceDropDown = () => {
    setserviceDrowpDown(true);
  };
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="brand-logo">
          <img src="" alt="" />
        </div>
        <div className="nav-items">
          <ul className="main-ul">
            <li
              className="main-li li-service"
              onClick={() => {
                setsectorDrowpDown(false);
                setserviceDrowpDown(!serviceDrowpDown);
              }}>
              Services
              <div
                className={
                  serviceDrowpDown
                    ? "dropdown-service dropdown-service-active"
                    : "dropdown-service"
                }>
                <ul className="service-ul">
                  <li className="service-li" onClick={handleServiceDropDown}>
                    LiDAR
                  </li>
                  <li className="service-li" onClick={handleServiceDropDown}>
                    Photogrammertry
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="main-li li-sector"
              title="Sectors"
              onClick={() => {
                setserviceDrowpDown(false);
                setsectorDrowpDown(!sectorDrowpDown);
              }}>
              Sectors
              <div
                className={
                  sectorDrowpDown
                    ? "dropdown-sector dropdown-sector-active"
                    : "dropdown-sector"
                }>
                <ul className="sector-ul">
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/1?type=Mining"> Energy</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/2?type=Seed Plantation">Enviroment</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/3?type=Medical Delivery">Delivery</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/4?type=Construction">Infrastructure</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/5?type=Security">Survelience</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="main-li">3D Printing Services</li>
            <li className="main-li">Survey Data Processing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
