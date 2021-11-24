/** @format */
import React, { useRef, useState } from "react";
import "./terrain.styles.scss";
import { FiUploadCloud } from "react-icons/fi";
import validator from "validator";
import Api from "../../api/Api";
import { FileUpload } from "../../components/Fileupload";
import { useHistory } from "react-router-dom";

//initlalizing s3 bucket
const s3 = FileUpload();

const Terrain = () => {
  const ref = useRef();
  const ref2 = useRef();
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [userFile, setUserFile] = useState("");
  const [fileErr, setFileErr] = useState("Drag and Drop your files or browse");
  const [phoneErr, setphoneErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userFile) {
      return setFileErr("This field is required");
    }
    const validatePhone = validator.isMobilePhone(userData.phone, ["en-IN"]);
    if (validatePhone) {
      setphoneErr("");

      const filePath = userFile.name;
      s3.upload(
        {
          Key: filePath,
          Body: userFile,
          ACL: "public-read",
        },
        (err, data) => {
          if (err) {
            setFileErr("Error please refresh and try again");
          }
          if (data) {
            userData.Objectdetails = data;
            Api.post("/user/data", { userData });
          }
        }
      ).on("httpUploadProgress", (progress) => {
        const uploaded = parseInt((progress.loaded * 100) / progress.total);

        if (ref) {
          ref.current.setAttribute("value", uploaded);
        }
        if (uploaded === 100) {
          setFileErr("File uploaded successfully");
          ref2.current.setAttribute("disabled", false);
          setTimeout(() => {
            history.push("/?uploaded=" + true);
          }, 2000);
        } else {
          ref2.current.setAttribute("disabled", true);
          setFileErr("Uploading Please wait");
        }
      });
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
                <span className="file-details">{fileErr}</span>

                {userFile ? (
                  <span>
                    {fileErr !== "Uploading Please wait" &&
                      fileErr !== "File uploaded successfully" &&
                      "Click continue to upload"}
                    {fileErr === "File uploaded successfully" && "Thank You"}
                  </span>
                ) : (
                  <span>Supported Format .mp4 .avi .mkv .webm</span>
                )}
                {userFile && (
                  <progress
                    ref={ref}
                    value="0"
                    max="100"
                    id="progressBar"></progress>
                )}
              </label>
              <input
                type="file"
                accept=".mp4,.avi,.wbem,.mkv,.zip"
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
              <button ref={ref2} type="submit">
                {fileErr === "Uploading Please wait" ? (
                  <div className="btn-flex">
                    <div className="btn-loading"></div>Uploading
                  </div>
                ) : fileErr === "File uploaded successfully" ? (
                  "Uploaded"
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terrain;
