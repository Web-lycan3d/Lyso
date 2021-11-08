import React, { Fragment } from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import './contact.styles.scss'

const Contact = () => {
    return (
        <Fragment>
            <div className="contact-container">
                <div className="contact-left">
                    <h1>We'd love to hear from <span>you.</span></h1>
                    <img src="https://i.ibb.co/F4zkJnm/Lyso-Map-min.png" alt="" />
                </div>
                <div className="contact-right">
                    <h2>Contact us</h2>
                    <form action="" className="contact-form">
                        <div className="form-container">
                            <label for="firstname" className="contact-label">First Name</label>
                            <input type="text" id="first_name" placeholder="Enter your first Name" name="firstname" className="inputlist1" ></input>
                        </div>
                        <div className="form-container">
                            <label for="lastname" className="contact-label">last Name</label>
                            <input type="text" id="last_name" placeholder="Enter your last Name" name="lastname" className="inputlist1" ></input>
                        </div>
                        <div className="form-container">
                            <label for="email" className="contact-label">Email</label>
                            <input type="text" id="email" placeholder="Enter your email" name="email" className="inputlist1" ></input>
                        </div>
                        <div className="form-container">
                            <label for="phone" className="contact-label">Phone</label>
                            <input type="text" id="phone" placeholder="Enter your number" name="phone" className="inputlist1" ></input>
                        </div>
                        <div className="form-container2">
                            <label for="message" className="contact-label" id="message" placeholder="Enter your message" name="message">Message</label>
                            <input type="text" id="message" placeholder="Enter your message" name="message" className="inputlist2" ></input>
                        </div>
                        <button className="btn btn-blue">Submit{" "} <BsArrowRightShort /></button>
                    </form>
                    <div className="contact-details">
                        <div className="contact-content">
                            <span>EMAIL US</span>
                            <p>Contactus@lyso.in</p>
                        </div>
                        <div className="contact-content">
                            <span>PHONE NO.</span>
                            <p>+91 9591807979</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
