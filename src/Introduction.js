import React from 'react'

export default function Introduction() {
    return(
        <div className="div-intro">
            <div className="intro-div">
                <div className="dv-intro-div">
                    <div className="d-intro" onClick={() => window.scrollTo({top: 520, behavior: 'smooth'})}>Portfolio</div>
                    <div className="d-intro2" onClick={() => window.scrollTo({top: 1270, behavior: 'smooth'})}>Resume</div>
                    <div className="d-intro3" onClick={() => window.scrollTo({top: 1870, behavior: 'smooth'})}>Connect</div>
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
                <span className="dv-intro-span" onClick={() => window.scrollTo({top: 1870, behavior: 'smooth'})}>Let Connect!</span>
            </div>
            {/* <div className="mobile-intro-div">
                <div className="dv-intro-div">
                    <div className="d-intro" onClick={() => window.scrollTo({top: 520, behavior: 'smooth'})}>Portfolio</div>
                    <div className="d-intro2" onClick={() => window.scrollTo({top: 1270, behavior: 'smooth'})}>Resume</div>
                    <div className="d-intro3" onClick={() => window.scrollTo({top: 1870, behavior: 'smooth'})}>Connect</div>
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
                <span className="dv-intro-span" onClick={() => window.scrollTo({top: 1870, behavior: 'smooth'})}>Let Connect!</span>
            </div> */}
        </div>
    )
}