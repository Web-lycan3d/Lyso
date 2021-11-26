/** @format */

import React from "react";
import { Link } from "react-router-dom";
const Landindbodyimg = ({ src, path }) => {
  return (
    <React.Fragment>
      <div className="landing-body-item">
        <img src={src} alt="delivery" />

        <div className="landing-b-item-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            natus nesciunt quos vero numquam voluptatibus molestiae soluta quis
            fuga ipsam reiciendis, alias suscipit iste in?
          </p>
          <Link to={path} className="item-tag">
            Know more
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landindbodyimg;
