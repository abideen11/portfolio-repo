import {
  faGithub,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-div-inner">
        <div
          className="footer-linkedin"
          title="LinkedIn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/abideenkareem/");
          }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div
          className="footer-github"
          title="GitHub"
          onClick={() => {
            window.open("https://github.com/abideen11");
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div
          className="footer-medium"
          title="Medium"
          onClick={() => {
            window.open("https://medium.com/@abideenkareem");
          }}
        >
          <FontAwesomeIcon icon={faMediumM} />
        </div>
      </div>
      <div className="footer-credit">
        <p>Designed & Developed by Abideen Kareem</p>
      </div>
    </div>
  );
};

export default Footer;
