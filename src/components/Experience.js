import React from "react";
import resume from "../resume.json";

function Experience() {
  return (
    <div className="experience-section">
      <h3>Experience</h3>
      {resume.work.map((work) => (
        <p className="experience">
          <strong>{work.company}</strong> {work.position} {work.startDate}{" "}
          <br />
          {work.description} <br />
          {work.highlights}{" "}
        </p>
      ))}
    </div>
  );
}

export default Experience;
