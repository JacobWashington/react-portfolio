import React from "react";
import avatar from "../../images/Avatar-Maker.svg";
import coding from "../../images/freelance.svg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="section">
      <div className="container landing">
        <p className="lc-title">Jacob Washington</p>
        <p className="lc-subtitle">Full Stack Developer</p>
        <p className="lc-heading">
          I create beautiful, simple applications from front to back.
        </p>
        <img className="avatar" src={avatar} alt="avatar" />
        <img className="coding" src={coding} alt="coding" />
      </div>
    </div>
  );
};

export default Landing;
