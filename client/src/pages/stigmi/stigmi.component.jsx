import React, { Fragment } from 'react'
import landingvideo from './Artificial_intellegence_by_gleb.mp4'
import { MdKeyboardArrowDown } from "react-icons/md";
import './stigmi.styles.scss'
const Stigmi = () => {
    return (
        <Fragment>
            <div className="stigmi-1cont">
                <video autoPlay="true" loop="true" muted="true">
                    <source src={landingvideo} type="video/mp4"></source>
                </video>
                <header>
                    <span>STIGMI PLATFORM</span>
                    <span>COMING SOON</span>
                </header>
            </div>
            <div className="ly-center"><MdKeyboardArrowDown className="arrow" /></div>
            <div className="stigmi-2cont">
                <img src="https://i.ibb.co/55xSPx8/Group-9469-min.png" alt="" />
                <span>Real Time Survey Data Processing Using Our Proprietary AI/ML Systems</span>
            </div>
            <div className="stigmi-3cont">
                <img src="https://i.ibb.co/fCgSqzb/Group-9471-min.png" alt="" />
                <div className="stigmi-3cont-content">
                    <h1>STIGMI</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda ea perferendis quisquam dolore modi voluptatum odio. Omnis, similique ut?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci quia vero ad non. Adipisci non reprehenderit sequi autem vel?</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Stigmi