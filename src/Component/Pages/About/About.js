import React from "react";
import "./about.css";
import about from "../../../Assets/Images/about.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="row row-cols-md-2 justify-content-center align-items-center">
          <div className="about-text">
            <h3>About Us</h3>
            <p>
              The best apple brand in the world. We have always been honest. We
              are confident in ourselves. We always try to give you the right
              services.Learn more about us. And you can let us know if you have
              any questions
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img className="img-fluid" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
