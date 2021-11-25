import React, { Fragment } from 'react'
import { TiTick } from 'react-icons/ti'
import { BsFillLightningChargeFill } from 'react-icons/bs'


import './survey.styles.scss'

const Survey = () => {
    return (
        <Fragment className="survey">
            <div className="survey-1cont">
                <img src="https://i.ibb.co/6R4d7Yv/Mask-Group-49-min.png" alt="" />
                <header>
                    <span>SURVEY</span>
                    <p>Surveying is the precise science of determining the positions of, and the distances between, points in 2D and 3D space. Surveys provide critical information that enables informed decision making ranging from construction site planning, to design and upkeep of infrastructure, to defining land property boundaries, and more. A drone survey is simply a survey conducted from overhead using a drone.</p>
                </header>
            </div>
            <div className="survey-2cont">
                <div className="survey-2cont-content">
                    <h1>Precision Unmatched</h1>
                    <p>Our drone solutions collect accurate, geo-tagged data quickly, while photogrammetry software and LiDAR technology processes this data to deliver standardized outputs. With their ability to capture data from above, drones have been successfully integrated into our surveying operations to perform land surveys, 3D mapping, topographic surveying, and much more.</p>
                </div>
                <div className="survey-2cont-img">
                    <img src="https://i.ibb.co/hY30cz2/Group-9503-min.png" alt="" />
                </div>
            </div>
            <div className="survey-3cont">
                <img src="https://i.ibb.co/KDPPHdc/Mask-Group-55-min.png" alt="" />
                <div className="survey-3cont-content">
                    <div className="flkjjb">
                        <span>Some of the potential uses for our surveying drones include, but are not limited to:</span>
                    </div>
                    <div className="bgdfgdc">
                        <TiTick />
                        <span>Topographic mapping & photogrammetry</span>
                    </div>
                    <div className="bgdfgdc">
                        <TiTick />
                        <span>Road & highway surveys</span>
                    </div>
                    <div className="bgdfgdc">
                        <TiTick />
                        <span>Environmental, industrial & utility inspections</span>
                    </div>
                    <div className="bgdfgdc">
                        <TiTick />
                        <span>Agricultural crop monitoring and inspection</span>
                    </div>
                    <div className="bgdfgdc">
                        <TiTick />
                        <span>Surveying and mapping in hard-to-reach environments</span>
                    </div>
                    <div className="bgdfgdc">
                        <TiTick />
                        <span>Quarries & mining operations</span>
                    </div>
                </div>
            </div>
            <div className="survey-4cont">
                <span>For any queries or further information about our services</span>
                <button className="btn"><BsFillLightningChargeFill/> {" "}Contact us</button>
            </div>
        </Fragment>
    )
}

export default Survey