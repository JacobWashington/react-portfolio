import React from 'react';
import Skill from "../../components/skill/Skill";
import SkillsData from "./SkillsData";
import "./Tech.css";

const Tech = () => {
    let mappedSkill = SkillsData.map((skill, index) => {
        return (
            <Skill tech={skill} key={index} />
        )
    })

    return (
        <div className="container tech">
            {mappedSkill}
        </div>
    );
}

export default Tech;
