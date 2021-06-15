import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-header">Hi, I'm Jacob. Nice to meet you.</h2>
      <p className="about-pgh">
        I'm a Full Stack Software Developer who loves designing and building
        beautiful, precise applications, from front to back. A veteran of the
        armed forces, my unique background and experience define who I am as a
        developer. I value clear and open{" "}
        <span className="keyword"> communication</span>, strive for 
        <span className="keyword"> excellence</span> with every application I
        build, and <span className="keyword">challenge</span> myself to leave
        all things better than I found them. As a team member, I endeavor to
        bring clarity to our mission and goals, and coherency among my peers. I
        do not hesitate to lift others as I climb. I'm quietly confident,
        naturally curious, and perpetually working to improve myself as a
        developer, one application at a time.
      </p>
    </div>
  );
};

export default About;
