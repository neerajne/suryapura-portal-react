import "./SocialPosts.css";
import farmerPost from "../../assets/post1.jpeg";
import logo from "../../assets/sunlogoNavbar.jpg";

function FarmerPost() {
  return (
    <div
      className="social-post-card"
      style={{ backgroundImage: `url(${farmerPost})` }}
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
            Prosperous Farmers <br /> Prosperous Village
          </h2>
        </div>

        <div className="div-list">
          <ul className="social-post-list">
            <li>New Agricultural Schemes</li>
            <li>Improved Irrigation facilities</li>
            <li>Fair Market Price</li>
            <li>Technical Assistance</li>
          </ul>
        </div>


        <div className="div-footer">
          <p className="social-post-footer-title">
            Suryapura Rural development Portal
          </p>
          <p className="social-post-footer-sub">
            Supporting Farmers every step of the way
          </p>
        </div>
      </div>
    </div>
  );
}

export default FarmerPost;