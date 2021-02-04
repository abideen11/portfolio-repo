import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import craftchampsimg1 from './Screenshot-2021-02-02-160923.png'
import flathopperimg1 from './Screenshot-2021-02-02-171818.png'

export default function PortfolioProjects() {
    return(
        <div className="div-prj">
            <div className="prj-div"></div>
            <div className="prj-div2">
                <h1>Portfolio</h1>
                <div className="dv2-prj-div">
                    <div className="d2-prjdiv"><img src={flathopperimg1} alt="screenshot of Flathopper website" /></div>
                    <p>
                        Website that let users book short 
                        rental stays.
                    </p>
                    <br />
                    <div className="d2-prjdiv3" onClick={() => {window.open("https://github.com/abideen11/lodgeworkspace2")}}><FontAwesomeIcon icon={faGithub} /></div>
                    <br />
                    <br />
                    <div className="d2-prjdiv4" onClick={() => {window.open("https://flathopperreactapp.herokuapp.com/")}}>Visit Website</div>
                </div>
                <div className="dv2-prj-div2">
                    <div className="d2-prjdiv2"><img src={craftchampsimg1} alt="screenshot of CraftChamp website" /></div>
                    <p>
                        Website for guides on repairs, 
                        installation, carpentry and other projects.
                    </p>
                    <div className="d2-prjdiv3" onClick={() => {window.open("https://github.com/abideen11/craftchamp-project")}}><FontAwesomeIcon icon={faGithub} /></div>
                    <br />
                    <br />
                    <div className="d2-prjdiv4" onClick={() => {window.open("https://craftchampreactapp1.herokuapp.com/")}}>Visit Website</div>
                </div>
            </div>
            <div className="prj-div3"></div>
        </div>
    )
}