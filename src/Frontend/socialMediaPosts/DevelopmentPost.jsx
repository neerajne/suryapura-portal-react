import React from 'react'
import "./SocialPosts.css";
import logo from "../../assets/sunlogoNavbar.jpg";
import socialPost3 from  "../../assets/socialPost3.png"
function DevelopmentPost() {
  return (
    <div
      className="social-post-card"
      style={{ backgroundImage: `url(${socialPost3})` }}
    >
      <div className="social-post-overlay"></div>

      <div className="social-post-content">
        <div className="div-brand">
          <img src={logo} alt="logo" className="social-post-logo" />
          <div className="social-post-brand-text">
            <span className="social-post-brand-name">Suryapura</span>
            <span className="social-post-brand-tagline">
              Rural development portal
            </span>
          </div>
        </div>

        <div className="div-heading">
          <h2 className="social-post-title">
            Education for a<br /> Brighter Tommorow
          </h2>
        </div>

        <div className="div-list">
          <ul className="social-post-list">
            <li>Better Schools</li>
            <li>Digital Learning</li>
            <li>Scholarship Programs</li>
            <li>
              Every Child Will Move
              <br />
              Forward
            </li>
          </ul>
        </div>

        <div className="div-footer">
          <p className="social-post-footer-title">
            Suryapura Rural development Portal
          </p>
          <p className="social-post-footer-sub">
            An Educated Village is a Developed Village
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentPost;

