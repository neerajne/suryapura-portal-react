import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import developmentwork from "../../assets/developmentwork.png";
import "./DevelopmentWork.css";
import digitalIdentity from "..//../assets/digitalIdentity.png";
function DigitalIdentity() {
  return (
    <Card className="future-card" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={digitalIdentity} />
      <Card.Body>
        <Card.Title className="future-card-title">Digital Identity</Card.Title>
        <Card.Text className="future-card-text">
          Create your Digital ID and become a part of us
        </Card.Text>
        <Link to="/development-works" className="future-card-link">
          View More <FaArrowRight />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DigitalIdentity;
