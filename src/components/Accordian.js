import React from "react";

import "../css/accordion.css";

function Accordion() {
  return (
    <div className="resume-section">
      <div className="accordion accordion-flush " id="accordionFlushExample">
        <div className="accordion-item">
          <button
            className="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <h1 className="accordion-header" id="flush-headingOne">
              something here
            </h1>
          </button>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse light"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
