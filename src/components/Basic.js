import React from "react";
import "../css/basics.css";
import resume from "../resume";

function BasicData() {
  return (
    <div className="basics-section">
      {resume.basics.map((basic) => (
        <h2>{basic.name}</h2>
      ))}
      {resume.basics.map((basic) => (
        <p>
          {basic.label} <br />
          {basic.email} <br />
          <a
            className="pure-button fab fa-linkedin"
            href="https://www.linkedin.com/in/molly-soufrine-449b811a6/"
          ></a>
          {"  "}
          <a
            className="pure-button fab fa-github"
            href="https://github.com/MollySoufrine?tab=repositories"
          >
            <br />
          </a>
        </p>
      ))}

      {resume.basics.map((basic) => (
        <div className="summary-section">
          <p>{basic.summary}</p>
        </div>
      ))}
    </div>
  );
}
export default BasicData;
