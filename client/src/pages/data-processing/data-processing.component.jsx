import React, { Fragment, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import './data-processing.styles.scss'
import { useForm } from 'react-hook-form'
import { FiUploadCloud } from "react-icons/fi";


const Data_Processing = () => {
    const [step, setStep] = React.useState(0);
    const { watch, register, formState: { errors }, isValid , handleSubmit } = useForm({ mode: 'all' });
    const completeFormStep = () => {
        setStep(cur => cur + 1);
    }
    const nextButton = () => {
        if (step >= 3) return undefined;
        else if (step === 2) return (<button type="button" className="floating-button" onClick={handleSubmit(submitform)} >Submit</button>);
        else return (<button type="button" className="floating-button" onClick={completeFormStep}>Proceed</button>)
    }
    const submitform = (data) => {
        console.log(data)
        completeFormStep();
    }
    return (
        <Fragment>
            <div className="data-first-container">
                <div className="data-pro-content">
                    <h1>DATA PROCESSING</h1>
                    <p>Save precious processing time and improve the accuracy of your drone survey with our Survey Data Processing services, now more efficient than ever before. LYSO offers all-in-one drone survey solutions that contain all the resources that you need to plan, visualize, process, and analyze aerial data.</p>
                </div>
                <div className="data-pro-content">
                    <img src="https://i.ibb.co/DD9pzTf/Upload-Illustration-2x-min.png" alt="" />
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
                                    {errors.files && <p className="errors">Please select a file</p> }
                                </label>
                                <input type="file" accept=".mp4,.avi,.wbem,.mkv" id="uploadfile2" name="files" {...register('files', {
                                    required : true
                                })} />
                                
                                {nextButton()}
                            </div>
                        )}
                        {step === 1 && (
                            <div className="form-content">
                                <div className="sec-cont">
                                    <div className="mode ly-dark">
                                        <img src="https://i.ibb.co/QYKKbzx/Group-5532-min.png" alt="" />
                                        <h5>Expert Assistance</h5>
                                        <p>Utilizing this service, your survey data is securely given to in-house experts who have the experience to correctly calibrate and process the data. The processing is therefore handled professionally and is returned to you with all the necessary requirements.</p>
                                    </div>
                                    <div className="mode">
                                        <img src="https://i.ibb.co/w6Pfys1/Group-5531-min.png" alt="" />
                                        <h5>AI Data Processing</h5>
                                        <p>This soon-to-be featured service will involve quick and easy uploading of your data to an automated cloud data processing service that allows users to take advantage of artificial intelligence (AI) and deep learning to perform tasks and process the required information with instantaneous results.</p>
                                        <span>coming soon</span>
                                    </div>
                                </div>
                                {nextButton()}
                            </div>
                        )}
                        {step === 2 && (
                            <div className="form-content">
                                <p>Your Information</p>
                                <div className="user-form">
                                    <div className="form-content-left">
                                        <input type="text" placeholder="Project Name" className="form-control" name="projectName" {...register('projectName', {
                                            required: {
                                                value: true,
                                                message: "Please enter your project name"
                                            }
                                        })} />
                                        {errors.projectName && <p className="errors">{errors.projectName.message}</p>}
                                        <input type="text" placeholder="Full Name" className="form-control" name="username" {...register('username', {
                                            required: {
                                                value: true,
                                                message: "Please enter your username"
                                            }
                                        })} />
                                        {errors.username && <p className="errors">{errors.username.message}</p>}
                                        <input type="email" placeholder="Email" className="form-control" name="email" {...register('email', {
                                            required: {
                                                value: true,
                                                message: "Please enter your email"
                                            }
                                        })} />
                                        {errors.email && <p className="errors">{errors.email.message}</p>}
                                        <input type="tel" placeholder="Phone" className="form-control" name="phone" {...register('phone', {
                                            required: {
                                                value: true,
                                                message: "Please enter your phone no."
                                            }
                                        })} />
                                        {errors.phone && <p className="errors">{errors.phone.message}</p>}
                                    </div>
                                    <div className="form-content-right">
                                        <input type="text" placeholder="Address" className="form-control" name="address" {...register('address', {
                                            required: {
                                                value: true,
                                                message: "Please enter your full address"
                                            }
                                        })} />
                                        {errors.address && <p className="errors">{errors.address.message}</p>}
                                        <input type="text" placeholder="Instruction" className="form-control ly-height" name="instruction" {...register('instruction')} />
                                    </div>
                                </div>
                                {nextButton()}
                            </div>
                        )}
                        {step === 3 && (
                            <div className="form-content">
                                <div className="success-cont">
                                    <img src="https://i.ibb.co/hYNwtd4/Group-5520-min.png" alt="" />
                                    <h1>File Successfully Uploaded for Processing</h1>
                                    <p>Please check Your E-Mail for Updates</p>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Data_Processing
