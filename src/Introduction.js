import React from 'react'

export default function Introduction() {
    return(
        <div className="div-intro">
            <div className="dv-intro-div">
                <div className="d-intro" onClick={() => document.querySelector("#to-prtfl").scrollIntoView({ behavior: 'smooth' })}>Portfolio</div>
                <div className="d-intro2" onClick={() => document.querySelector("#to-rsme").scrollIntoView({ behavior: 'smooth' })}>Resume</div>
                <div className="d-intro3" onClick={() => document.querySelector("#to-cnt").scrollIntoView({ behavior: 'smooth' })}>Connect</div>
            </div>
            <div className="dv-intro">
                <h1>Hi</h1>
                <h1>
                    My name is Abideen (Kos) Kareem and I'm a 
                    Software Engineer that utilizes React,
                    Node.js, JavaScript and more to develop
                    intuitive and interactive projects.
                </h1>
            </div>
            <div className="dv-intro-cnt" onClick={() => document.querySelector("#to-cnt").scrollIntoView({ behavior: 'smooth' })}>Let Connect!</div>
        </div>
    )
}