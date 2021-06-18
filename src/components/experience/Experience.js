import React from "react";
import { useState } from "react";
import "./Experience.css";

const Experience = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  let bullet = props.bullets.map((bullet, index) => {
    return (
      <li className="exp-bullet statement" key={index}>
        {bullet}
      </li>
    );
  });

  return (
    <div className={clicked ? "card back" : "card"} onClick={handleClick}>
      <div className={clicked ? "card-front inactive" : "card-front"}>
        <div className="co-logo-container">
          <img className="co-logo" src={props.logo} width="100%" />
        </div>
        <div className="role">{props.role}</div>
        <div className="co-title">{props.company}</div>
      </div>
      <div className={clicked ? "card-back" : "card-back inactive"}>
        <ul className="exp-bullets">{bullet}</ul>
      </div>
    </div>
  );
};

export default Experience;
