import React from "react";
import Skill from "../../components/skill/Skill";
import SkillsData from "./SkillsData";
import "./Tech.css";

const Tech = () => {
  let mappedSkill = SkillsData.map((skill, index) => {
    return <Skill tech={skill} key={index} />;
  });

  return (
    <div className="section">
      <div className="section-title">
        <h2 className="tech-title">Dev Tools</h2>
      </div>
      <div className="container tech">{mappedSkill}</div>
    </div>
  );
};

export default Tech;
