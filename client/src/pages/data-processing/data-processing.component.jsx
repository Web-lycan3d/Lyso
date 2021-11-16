/** @format */

import React, { Fragment, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./data-processing.styles.scss";
import { useForm } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";
import { FileUpload } from "../../components/Fileupload";
import Api from "../../api/Api";
import doneImg from "./done.png";

const Data_Processing = () => {
  const [step, setStep] = React.useState(0);
  const [userFile, setUserFile] = useState("");
  const [fileStatus, setfileStatus] = useState("Select a file to continue");

  const [fileupStatus, setfileupStatus] = useState(
    "Uploading and Saving Data please wait"
  );

  const ref = useRef();

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
    if (step >= 3) return undefined;
    else if (step === 2)
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
        document.querySelector("#emailstatus").innerHTML =
          "Please check Your E-Mail for Updates";
      }
    });
  };

  const handleFiles = (e) => {
    const file = e.target.files[0];
    setUserFile(file);
    setfileStatus(file.name);
  };
  return (
    <Fragment>
      <div className="data-first-container">
        <div className="data-pro-content">
          <h1>DATA PROCESSING</h1>
          <p>
            Save precious processing time and improve the accuracy of your drone
            survey with our Survey Data Processing services, now more efficient
            than ever before. LYSO offers all-in-one drone survey solutions that
            contain all the resources that you need to plan, visualize, process,
            and analyze aerial data.
          </p>
        </div>
        <div className="data-pro-content">
          <img
            src="https://i.ibb.co/DD9pzTf/Upload-Illustration-2x-min.png"
            alt="error"
          />
        </div>
      </div>
      <div className="start-now">
        <p>Start Now</p>
        <MdKeyboardArrowDown className="down-arrow" />
      </div>
      <div className="data-second-container">
        <div className="blue-div"></div>
        <div className="white-div"></div>
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
                  accept=".mp4,.avi,.wbem,.mkv"
                  id="uploadfile2"
                  name="files"
                  onChange={(e) => handleFiles(e)}
                />

                {nextButton()}
              </div>
            )}
            {step === 1 && (
              <div className="form-content">
                <h1 className="data-h1 h12">Select Mode of File Processing</h1>
                <div className="sec-cont">
                  <div className="mode ly-dark">
                    <img
                      src="https://i.ibb.co/QYKKbzx/Group-5532-min.png"
                      alt="error"
                    />
                    <h5>Expert Assistance</h5>
                    <p>
                      Utilizing this service, your survey data is securely given
                      to in-house experts who have the experience to correctly
                      calibrate and process the data. The processing is
                      therefore handled professionally and is returned to you
                      with all the necessary requirements.
                    </p>
                  </div>
                  <div className="mode">
                    <img
                      src="https://i.ibb.co/w6Pfys1/Group-5531-min.png"
                      alt=""
                    />
                    <h5>AI Data Processing</h5>
                    <p>
                      This soon-to-be featured service will involve quick and
                      easy uploading of your data to an automated cloud data
                      processing service that allows users to take advantage of
                      artificial intelligence (AI) and deep learning to perform
                      tasks and process the required information with
                      instantaneous results.
                    </p>
                    <span>coming soon</span>
                  </div>
                </div>
                {nextButton()}
              </div>
            )}
            {step === 2 && (
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
                      name="username"
                      {...register("username", {
                        required: {
                          value: true,
                          message: "Please enter your username",
                        },
                      })}
                    />
                    {errors.username && (
                      <p className="errors">{errors.username.message}</p>
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
            {step === 3 && (
              <div className="form-content">
                <div className="success-cont">
                  <img src={doneImg} alt="error" id="imagestatus" />
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
