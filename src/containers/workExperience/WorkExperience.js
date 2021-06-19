import React from "react";
import "./WorkExperience.css";
import Experience from "../../components/experience/Experience";
import EmploymentData from "./EmploymentData";

const WorkExperience = () => {
  let mappedExperience = EmploymentData.map((exp, index) => {
    return (
      <Experience
        logo={exp.logo}
        role={exp.role}
        company={exp.employer}
        bullets={exp.bullets}
        key={index}
      />
    );
  });

  return (
    <div className="section">
      <div className="section-title">
        <h2 className="work-title">My Work History</h2>
      </div>
      <div className="container work-history">{mappedExperience}</div>
    </div>
  );
};

export default WorkExperience;
