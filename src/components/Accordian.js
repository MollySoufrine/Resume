import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./SkillList";
import "../css/accordion.css";

function Accordion() {
  return (
    <div className="resume-section">
      <div className="accordion accordion-flush " id="accordionFlushExample">
        <div className="accordion-item">
          <h1 className="accordion-header" id="flush-headingOne">
            RESUME
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <p className="view-resume">Click here to view</p>
            </button>
          </h1>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse light"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <Education />
              <Experience />
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
