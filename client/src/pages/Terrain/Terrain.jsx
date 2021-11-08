/** @format */
import React, { useState } from "react";
import "./terrain.styles.scss";
import { FiUploadCloud } from "react-icons/fi";
import validator from "validator";
import Api from "../../api/Api";
const Terrain = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [userFile, setUserFile] = useState("");
  const [fileErr, setFileErr] = useState("");
  const [phoneErr, setphoneErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userFile) {
      return setFileErr("This field is required");
    }
    const validatePhone = validator.isMobilePhone(userData.phone, ["en-IN"]);
    if (validatePhone) {
      const formData = new FormData();
      formData.append("file", userFile);

      const { data } = Api.post("/user/data", { userData, formData });
    } else {
      return setphoneErr("Not Valid");
    }
  };
  return (
    <div className="terrain-container">
      <div className="terrain-contents">
        <div className="terrain-header">
          <h2>3D PRINT TERRAIN</h2>
          <p>
            Through the exciting advancements made in 3D printing technology, we
            can now bring your survey data to life! By scanning your data, we
            are able to create 3D scaled models for visualisation and
            communication. This service works by manipulating point cloud data
            into a surface as a Digital Terrain Model (DTM) and you are finally
            provided with your very own 3D printed terrain.
          </p>
        </div>
        <div className="terrain-body">
          <div className="terrain-body-item">
            <div className="bg-no">
              <img src="https://i.ibb.co/gv2wDyT/1.png" alt="error" />
            </div>
            <p>SURVEY DATA IS SCANNED</p>
            <img
              className="terrain-img"
              src="https://i.ibb.co/G3HtX9S/Survey-And-Map-2.webp"
              alt="terrain"
            />
          </div>
          <div className="terrain-body-item">
            <div className="bg-no">
              <img src="https://i.ibb.co/DtBhKsz/2.png" alt="error" />
            </div>
            <p>VISUAL 3D MODEL IS CREATED</p>
            <img
              className="terrain-img"
              src="https://i.ibb.co/PrV436T/Cartoon-Terrain-G04-2k.webp"
              alt="terrain"
            />
          </div>
          <div className="terrain-body-item">
            <div className="bg-no">
              <img src="https://i.ibb.co/6HN6kFr/3.png" alt="error" />
            </div>
            <p>TERRAIN IS 3D PRINTED AND DELIVERED</p>
            <img
              className="terrain-img"
              src="https://i.ibb.co/GnXWQvx/touch-Terrain-logo.webp"
              alt="terrain"
            />
          </div>
        </div>
        <div className="terrain-footer">
          <form onSubmit={handleSubmit}>
            <div className="terrain-footer-contents">
              <span className="label-no">01</span>
              <label htmlFor="uploadfile">
                <FiUploadCloud className="upload-icon" />
                <p> Upload your file</p>
                <span>Drag and Drop your files or browse</span>
                <span className="file-details">{fileErr}</span>
              </label>
              <input
                type="file"
                id="uploadfile"
                onChange={(e) => {
                  setUserFile(e.target.files[0]);
                  setFileErr(e.target.files[0]?.name);
                }}
              />
            </div>
            <div className="terrain-footer-contents footer-2">
              <span className="label-no">02</span>
              <p>Your Information</p>

              <input
                type="text"
                required
                placeholder="full Name"
                minLength="4"
                name="name"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                title="minimum for 4 characters"
              />
              <input
                type="email"
                required
                placeholder="email"
                name="email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <input
                type="text"
                required
                name="phone"
                placeholder="phone"
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
              <span className="form-errors">{phoneErr}</span>

              <textarea
                type="text"
                required
                placeholder="address"
                name="address"
                onChange={(e) =>
                  setUserData({ ...userData, address: e.target.value })
                }
                cols="30"
                rows="10"></textarea>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terrain;
