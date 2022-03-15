import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/PortfolioProjects.css";

import craftchampsimg1 from "../images/Screenshot-2021-02-02-160923.png";
import flathopperimg1 from "../images/Screenshot-2021-02-02-171818.png";

const PortfolioProjects = () => {
  return (
    <div id="to-portfolio" className="projects-div">
      <h1 className="projects-title">Portfolio</h1>
      <div className="projects-div-inner">
        <div className="project-part">
          <div className="project-image">
            <img src={flathopperimg1} alt="screenshot of Flathopper website" />
          </div>
          <p>Website that let users book short rental stays.</p>
          <br />
          <div
            className="project-repository"
            onClick={() => {
              window.open("https://github.com/abideen11/lodgeworkspace2");
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <br />
          <br />
          <div
            className="project-link"
            onClick={() => {
              window.open("https://flathopperreactapp.herokuapp.com/");
            }}
          >
            Visit Website
          </div>
        </div>

        <div className="project-part">
          <div className="project-image">
            <img src={craftchampsimg1} alt="screenshot of CraftChamp website" />
          </div>
          <p>
            Website for guides on repairs, installation, carpentry and other
            projects.
          </p>
          <div
            className="project-repository"
            onClick={() => {
              window.open("https://github.com/abideen11/craftchamp-project");
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <br />
          <br />
          <div
            className="project-link"
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
