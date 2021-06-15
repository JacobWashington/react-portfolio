import React from 'react';
import "./Education.css"
import Experience from "../../components/experience/Experience";
import USArmy from "../../images/logos/us-army.svg"

const Education = () => {
    let list = [
        "Led and mentored new recruits as they entered the 14th Engineer Battalion",
        "Devised a training plan and constructed training resources for soldiers using mine detection equipment in support of Operation Enduring Freedom",
        "Served as an integral member of a team, successfully conducting over 3000 hours of combat operations in support of Operation Enduring Freedom"
    ]
    return (
        <div className="edu-container">
            <Experience logo={USArmy} role="Combat Engineer" company="US Army" bullets={list}/>
        </div>
    );
}

export default Education;
