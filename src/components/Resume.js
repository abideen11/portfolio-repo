import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/Resume.css";

import resumeJobsScreenshot from "../images/screenshot_of_resume_jobs_description.png";

const Resume = () => {
  return (
    <div id="to-resume" className="resume-div">
      <h1>Resume</h1>
      <div className="resume-div-inner">
        <div className="resume-prompt">
          <h1>
            Besides my current competency, I believe that my penchant to grow
            and challenge myself will be a valuable asset for any enterprise.
          </h1>
        </div>
        <div className="resume-screenshot-file">
          <div className="resume-screenshot">
            <img src={resumeJobsScreenshot} alt="screenshot of resume" />
          </div>
          <div className="resume-file">
            <a
              href="/files/Kareem_Software_Engineer_Resume.pdf"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFile}
                style={{ color: "white", textDecoration: "none" }}
                download
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
