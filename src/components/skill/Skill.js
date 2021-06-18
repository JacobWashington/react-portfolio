import React from 'react';
import "./Skill.css";

const Skill = (props) => {
    return (
        <div className="skill-container">
            <img src={props.tech.logo} className="skill-logo"/>
        </div>
    );
}

export default Skill;
