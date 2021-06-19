import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="section about">
      <div className="section-title">
        <h2 className="about-title">Hi, I'm Jacob. Nice to meet you.</h2>
      </div>
      <div className="container about">
        <div className="card mission">
          <div className="about-sub-heading">My Mission</div>
          <p className="statement">
            A skilled developer, I strive for
            <span className="keyword"> excellence</span> with every application
            I build. I value clear and open
            <span className="keyword"> communication</span>, and{" "}
            <span className="keyword">challenge</span> myself to leave all
            things better than I found them.
          </p>
        </div>
        <div className="card why-me">
          <div className="about-sub-heading">Why Pick Me?</div>
          <p className="statement">
            As a team member, I endeavor to provide{" "}
            <span className="keyword">clarity</span> to our mission and goals,
            and create <span className="keyword">coherence</span> among my
            peers. I do not hesitate to lift others as I climb. I'm quietly{" "}
            <span className="keyword">confident</span>, naturally{" "}
            <span className="keyword">curious</span>, and perpetually working to
            improve myself as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
