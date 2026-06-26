import Button from "react-bootstrap/Button";
import "./hero.css";
import heroImage from "../assets/herobg.jpeg"; // 🔁 update path to match where you saved the sunrise/man image

function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Empowered Village,{" "}
          <span className="hero-title-accent">Prosperous Suryapura</span>
        </h1>

        <div className="hero-wrapper">
          <p className="hero-commitment-label">Our Commitment —</p>

          <ul className="hero-commitment-list">
            <li >Development</li>
            <li>Education</li>
            <li>Farms</li>
            <li>Infrastructure</li>
            <li>Transparent Governance</li>
          </ul>
        </div>

        <div className="hero-buttons" style={{ display: "flex", gap: "10px" }}>
          <Button className="btn-explore" size="lg">
            Explore Our Village
          </Button>
          <Button className="btn-projects" size="lg">
            View Development Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
