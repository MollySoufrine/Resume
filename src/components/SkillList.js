import React from "react";
import resume from "../resume.json";
function Skills() {
  return (
    <div className="skill-section">
      <h3>Technical Skills</h3>
      {resume.skills.map((skills) => (
        <li>{skills}</li>
      ))}
    </div>
  );
}

export default Skills;
