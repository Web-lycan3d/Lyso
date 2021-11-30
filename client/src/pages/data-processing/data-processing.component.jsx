/** @format */

import React, { Fragment, useRef, useState } from "react";
import "./data-processing.styles.scss";
import { useForm } from "react-hook-form";
import validator from "validator";
import { FiUploadCloud } from "react-icons/fi";
import { FileUpload } from "../../components/Fileupload";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Api from "../../api/Api";

const Data_Processing = () => {
  const [step, setStep] = React.useState(0);
  const [userFile, setUserFile] = useState("");
  const [fileStatus, setfileStatus] = useState(
    "Select a file to continue(.zip,.mp4,.avi,.wbem,.mkv is supported)"
  );
  const [phoneErr, setphoneErr] = useState("");
  const [fileupStatus, setfileupStatus] = useState(
    "Uploading and Saving Data please wait"
  );

  const ref = useRef();
  const scrollRef = useRef();

  const {
    watch,
    register,
    formState: { errors },
    isValid,
    handleSubmit,
  } = useForm({ mode: "all" });

  const s3 = FileUpload();

  const completeFormStep = () => {
    if (!userFile) {
      return setfileStatus("This field is required");
    }
    setStep((cur) => cur + 1);
  };
  const nextButton = () => {
    if (step >= 2) return undefined;
    else if (step === 1)
      return (
        <button
          type="button"
          className="floating-button"
          onClick={handleSubmit(submitform)}>
          Submit
        </button>
      );
    else
      return (
        <button
          type="button"
          className="floating-button"
          onClick={completeFormStep}>
          Proceed
        </button>
      );
  };
  const submitform = (userData) => {
    const validatePhone = validator.isMobilePhone(userData.phone, ["en-IN"]);
    if (validatePhone) {
      setphoneErr("");
      completeFormStep();
      s3.upload(
        {
          Key: userFile.name,
          Body: userFile,
          ACL: "public-read",
        },
        async (err, data) => {
          if (err) {
            console.log(err);
            setfileupStatus("Error please refresh and try again");
          }
          if (data) {
            userData.Objectdetails = data;
            await Api.post("/user/data/process", { userData });
          }
        }
      ).on("httpUploadProgress", (progress) => {
        const uploaded = parseInt((progress.loaded * 100) / progress.total);

        ref.current.setAttribute("value", uploaded);
        document.querySelector(".data-upvalue").innerHTML = uploaded + "%";

        document.querySelector("#emailstatus").innerHTML = "";

        if (uploaded === 100) {
          setfileupStatus("File Successfully Uploaded for Processing");
          document.querySelector("#imagestatus").style.display = "block";
          document.querySelector("#imagestatus").style.opacity = "1";
          document.querySelector("#emailstatus").innerHTML =
            "Please check Your E-Mail for Updates";
        }
      });
    } else {
      setphoneErr("Not valid");
    }
  };
  const scrollDown = () =>
    window.scrollTo({
      top: scrollRef.current.offsetTop,
      behavior: "smooth",
      // You can also assign value "auto"
      // to the behavior parameter.
    });
  const handleFiles = (e) => {
    const file = e.target.files[0];
    setUserFile(file);
    setfileStatus(file.name);
  };
  return (
    <Fragment>
      <div className="data-first-container">
        <div className="data-pro-content">
          <span>DATA</span>
          <span>PROCESSING</span>

          <p>
            Save precious processing time and improve the accuracy of your drone
            survey with our Survey Data Processing services, now more efficient
            than ever before.
          </p>
          <p>
            LYSO offers all-in-one drone survey solutions that contain all the
            resources that you need to{" "}
            <span>plan, visualize, process, and analyze aerial data.</span>
          </p>
          <button className="btn" onClick={scrollDown}>
            <BsFillLightningChargeFill /> Get Started
          </button>
        </div>
        <div className="data-pro-content">
          <img
            src="https://i.ibb.co/LQ09HBs/image-processing20191202-22367-5vroda-min.png"
            alt="error"
          />
        </div>
      </div>
      <div className="data-mid-cont">
        <img src="https://i.ibb.co/pyxX1Kc/Group-9473-min.png" alt="" />
        <p>
          We convert raw survey data recording into customised output using our
          proprietary systems as per user requirements.
        </p>
      </div>
      <div className="data-second-container" ref={scrollRef}>
        <div className="white-div">
          <img src="https://i.ibb.co/VT7gVjw/contourmapping-5-min.png" alt="" />
        </div>
        <div className="form-container">
          <form className="form" action="">
            {step === 0 && (
              <div className="form-content">
                <label htmlFor="uploadfile2">
                  <FiUploadCloud className="upload-icon" />
                  <p> Upload your file</p>
                  <span>Drag and Drop your files or browse</span>
                  {/* it was not showing me the errors so i did this  */}
                  <span className="filestatus">{fileStatus}</span>
                </label>
                <input
                  type="file"
                  required
                  accept=".mp4,.avi,.wbem,.mkv,.zip"
                  id="uploadfile2"
                  name="files"
                  onChange={(e) => handleFiles(e)}
                />

                {nextButton()}
              </div>
            )}
            {step === 1 && (
              <div className="form-content">
                <h1 className="data-h1 h13">Your Information</h1>
                <div className="user-form">
                  <div className="form-content-left">
                    <input
                      type="text"
                      placeholder="Project Name"
                      className="form-control"
                      name="projectName"
                      {...register("projectName", {
                        required: {
                          value: true,
                          message: "Please enter your project name",
                        },
                      })}
                    />
                    {errors.projectName && (
                      <p className="errors">{errors.projectName.message}</p>
                    )}
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your username",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="errors">{errors.name.message}</p>
                    )}
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please enter your email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="errors">{errors.email.message}</p>
                    )}
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="form-control"
                      name="phone"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Please enter your phone no.",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="errors">{errors.phone.message}</p>
                    )}
                    <p className="errors">{phoneErr}</p>
                  </div>
                  <div className="form-content-right">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                      name="address"
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Please enter your full address",
                        },
                      })}
                    />
                    {errors.address && (
                      <p className="errors">{errors.address.message}</p>
                    )}
                    <textarea
                      type="text"
                      placeholder="Instruction"
                      className="form-control ly-height"
                      name="instruction"
                      {...register("instruction")}
                    />
                  </div>
                </div>
                {nextButton()}
              </div>
            )}
            {step === 2 && (
              <div className="form-content">
                <div className="success-cont">
                  <img
                    src="https://i.ibb.co/hYNwtd4/Group-5520-min.png"
                    alt="error"
                    id="imagestatus"
                  />
                  <h1 className="data-h1">{fileupStatus}</h1>
                  <span className="data-upvalue"> </span>
                  <progress
                    ref={ref}
                    value="0"
                    max="100"
                    id="dataProgress"></progress>
                  <p id="emailstatus"></p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Data_Processing;
