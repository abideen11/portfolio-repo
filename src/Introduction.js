import React from 'react'

export default function Introduction() {
    return(
        <div className="div-intro">
            <div className="intro-div">
                <div className="dv-intro-div">
                    <div className="d-intro" onClick={() => window.scrollTo(0,520)}>Portfolio</div>
                    <div className="d-intro2" onClick={() => window.scrollTo(0,1270)}>Resume</div>
                    <div className="d-intro3" onClick={() => window.scrollTo(0,1870)}>Connect</div>
                </div>
                <div className="dv-intro">
                    <h1>Hi</h1>
                    <h1>
                        My name is Abideen (Kos) Kareem and I'm a 
                        Software Engineer that utilizes React,
                        Node.js, JavaScript and more to develop
                        immersive and interactive projects.
                    </h1>
                </div>
                <span onClick={() => window.scrollTo(0,1870)}>Let Connect!</span>
            </div>
        </div>
    )
}