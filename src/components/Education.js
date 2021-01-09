import React from "react";
import resume from "../resume.json";

function Education() {
  return (
    <div className="education-section">
      <h3>Education</h3>
      <br />
      {resume.education.map((educationInfo) => (
        <p>
          {educationInfo.institution} {educationInfo.area}{" "}
          {educationInfo.studyType} {educationInfo.endDate}
        </p>
      ))}
    </div>
  );
}

export default Education;
