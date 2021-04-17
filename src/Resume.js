import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import resumescreenshot1 from './Screenshot-2021-02-02-175809.png'

export default function Resume() {
    return(
        <div className="div-res">
            <div className="res-div"></div>
            <div className="res-div2">
                <div className="res-div2-h1"><h1>Resume</h1></div>
                <div className="dv2-res-div">
                    <img src={resumescreenshot1} alt="screenshot of resume" />
                    <div><Link to="/files/Kareem_Software_Engineer_resume.doc" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }} download><FontAwesomeIcon icon={faFile} /></Link></div>
                </div>
                <div className="dv2-res-div2">
                    <h1>
                        Besides my current competency, I believe
                        that my penchant to grow and challenge myself 
                        will be a valuable asset for any enterprise.
                    </h1>
                </div>
            </div>
            <div className="res-div3"></div>
        </div>
    )
}