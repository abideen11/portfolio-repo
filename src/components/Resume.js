import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import resumeJobsScreenshot from "../images/screenshot_of_resume_jobs_description.png";

const Resume = () => {
  return (
    <div id="to-rsme" className="div-res">
      <h1>Resume</h1>
      <div className="res-div">
        <div className="div-resdiv">
          <h1>
            Besides my current competency, I believe that my penchant to grow
            and challenge myself will be a valuable asset for any enterprise.
          </h1>
        </div>
        <div className="div-resdiv2">
          <div className="resume-screenshot">
            <img src={resumeJobsScreenshot} alt="screenshot of resume" />
          </div>
          <div className="file-icon-resume">
            <Link
              to="/files/Kareem_Software_Engineer_resume.pdf"
              target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}
              download
            >
              <FontAwesomeIcon icon={faFile} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
