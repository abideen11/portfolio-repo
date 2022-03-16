import React from "react";
import "../styles/Introduction.css";

const Introduction = () => {
  return (
    <div className="intro-div">
      <div className="intro-div-inner">
        <div
          className="intro-portfolio"
          onClick={() =>
            document
              .querySelector("#to-portfolio")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Portfolio
        </div>
        <div
          className="intro-resume"
          onClick={() =>
            document
              .querySelector("#to-resume")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Resume
        </div>
        <div
          className="intro-contact"
          onClick={() =>
            document
              .querySelector("#to-contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Connect
        </div>
      </div>

      <div className="intro-summary">
        <div className="intro-summary-inner">
          <h1>Hi</h1>
          <h1>
            My name is Abideen (Kos) Kareem and I'm a Software Engineer that
            utilizes React, Node.js, JavaScript and more to develop intuitive
            and interactive projects.
          </h1>
        </div>
        <div className="intro-buffer"></div>
      </div>

      <div
        className="intro-connect"
        onClick={() =>
          document
            .querySelector("#to-contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Let Connect!
      </div>
    </div>
  );
};

export default Introduction;
