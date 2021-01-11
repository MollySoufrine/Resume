import React from "react";
import "../css/basics.css";
import resume from "../resume";

function BasicData() {
  return (
    <div className="basics-section">
      {resume.basics.map((basic) => (
        <h1 className="basics-name">{basic.name}</h1>
      ))}
      {resume.basics.map((basic) => (
        <h3 className="basic-info">
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
        </h3>
      ))}

      {resume.summary.map((summary) => (
        <div className="summary-section">
          <li>{summary}</li>
        </div>
      ))}
    </div>
  );
}
export default BasicData;
