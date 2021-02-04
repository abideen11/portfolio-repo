import { faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return(
        <div className="div-ftr">
            <div className="ftr-div"></div>
            <div className="ftr-div2">
                <div title="LinkedIn" className="dv-ftr" onClick={() => {window.open("https://www.linkedin.com/in/abideenkareem/")}}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div title="GitHub" className="dv-ftr2" onClick={() => {window.open("https://github.com/abideen11")}}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div title="Medium" className="dv-ftr3" onClick={() => {window.open("https://medium.com/@abideenkareem")}}>
                    <FontAwesomeIcon icon={faMediumM} />
                </div>
                <div className="dv2-ftr-hr">
                    <hr />
                </div>
                <div className="dv2-ftr-div">
                    <p>Designed & Developed by Abideen Kareem</p>
                </div>
            </div>
            <div className="ftr-div3"></div>
        </div>
    )
}