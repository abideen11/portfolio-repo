import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import craftchampsimg1 from "../images/Screenshot-2021-02-02-160923.png";
import flathopperimg1 from "../images/Screenshot-2021-02-02-171818.png";

const PortfolioProjects = () => {
  return (
    <div id="to-prtfl" className="div-prj">
      <h1 className="div-prjh1">Portfolio</h1>
      <div className="prj-div">
        <div className="dv-prj-div">
          <div className="d-prjdiv">
            <img src={flathopperimg1} alt="screenshot of Flathopper website" />
          </div>
          <p>Website that let users book short rental stays.</p>
          <br />
          <div
            className="d-prjdiv2"
            onClick={() => {
              window.open("https://github.com/abideen11/lodgeworkspace2");
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <br />
          <br />
          <div
            className="d-prjdiv3"
            onClick={() => {
              window.open("https://flathopperreactapp.herokuapp.com/");
            }}
          >
            Visit Website
          </div>
        </div>
        <div className="dv-prj-div">
          <div className="d-prjdiv">
            <img src={craftchampsimg1} alt="screenshot of CraftChamp website" />
          </div>
          <p>
            Website for guides on repairs, installation, carpentry and other
            projects.
          </p>
          <div
            className="d-prjdiv2"
            onClick={() => {
              window.open("https://github.com/abideen11/craftchamp-project");
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <br />
          <br />
          <div
            className="d-prjdiv3"
            onClick={() => {
              window.open("https://craftchampreactapp1.herokuapp.com/");
            }}
          >
            Visit Website
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
