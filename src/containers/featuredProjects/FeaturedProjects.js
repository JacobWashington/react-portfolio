import React from "react";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  return (
    <div className="section featured-projects">
      <div className="container fp">
        <div className="section-title">
          <h2 className="fp-title">My Recent Work</h2>
        </div>
        <div className="section-heading">
          <p className="fp-heading">
            Here are a few projects I've worked on recently. Want to see more?{" "}
            <a href="mailto:jacobwashington.dev@gmail.com">Email me.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
