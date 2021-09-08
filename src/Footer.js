import { faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <div className="div-ftr">
            <div className="ftr-div">
                <div className="ftr-dv" onClick={() => {window.open("https://www.linkedin.com/in/abideenkareem/")}}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className="ftr-dv2" onClick={() => {window.open("https://github.com/abideen11")}}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="ftr-dv3" onClick={() => {window.open("https://medium.com/@abideenkareem")}}>
                    <FontAwesomeIcon icon={faMediumM} />
                </div>
            </div>
            <div className="ftr-div2">
                <p>Designed & Developed by Abideen Kareem</p>
            </div>
        </div>
    )
}