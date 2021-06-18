import React from 'react';
import "./Education.css"
import EducationData from "./EducationData";
import Experience from "../../components/experience/Experience";

const Education = () => {

    let mappedExperience = EducationData.map((exp, index) => {
        return (
            <Experience
            logo={exp.logo}
            role={exp.role}
            company={exp.employer}
            bullets={exp.bullets}
            key={index}
          />
        )
    })

    return (
        <div className="container edu">
            {mappedExperience}
        </div>
    );
}

export default Education;
