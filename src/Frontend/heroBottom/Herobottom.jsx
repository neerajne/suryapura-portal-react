import React from "react";
import "./HeroBottom.css";
// import education from "./education.png"; // apna image path
import familyLogo from "../../assets/familyLogo.webp";
import developmentLogo from "../../assets/developmentLogo.png";
import schoolLogo from "../../assets/schoolLogo.png";
import roadLogo from "../../assets/roadLogo.jpg";
import villageLogo from "../../assets/villageLogo.webp";
const Herobottom = () => {
  return (
    <div className="hero-bottom">
      <div className="feature-card">
        <img src={familyLogo} alt="icon" />
        <div>
          <p>3500+ Families</p>
        </div>
      </div>

      <div className="feature-card">
        <img src={developmentLogo} alt="icon" />
        <div>
          <p>12+ Development Plans</p>
        </div>
      </div>

      <div className="feature-card">
        <img src={schoolLogo} alt="icon" />
        <div>
          <p>8 Schools 2 Colleges</p>
        </div>
      </div>

      <div className="feature-card">
        <img src={roadLogo} alt="icon" />
        <div>
          <p>25km+ Road Construction</p>
        </div>
      </div>

      <div className="feature-card">
        <img src={villageLogo} alt="icon" />
        <div>
          <p>100% Digital Panchayat</p>
        </div>
      </div>
    </div>
  );
};

export default Herobottom;
