import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import resumeJobDetailScreenshot from './ScreenshotOfResumeJobDetails-2021-09-07.PNG'

export default function Resume() {
    return(
        <div id="to-rsme" className="div-res">
            <h1>Resume</h1>
            <div className="res-div">
                <div className="div-resdiv">
                    <h1>
                        Besides my current competency, I believe
                        that my penchant to grow and challenge myself 
                        will be a valuable asset for any enterprise.
                    </h1>
                </div>
                <div className="div-resdiv2">
                    <img src={resumeJobDetailScreenshot} alt="screenshot of resume" />
                    <div><Link to="/files/Kareem_Software_Engineer_resume.pdf" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }} download><FontAwesomeIcon icon={faFile} /></Link></div>
                </div>
            </div>
        </div>
    )
}