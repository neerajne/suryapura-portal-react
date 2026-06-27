import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import developmentwork from "../../assets/developmentwork.png";
import "./DevelopmentWork.css";

function DevelopmentWorks() {
  return (
    <Card className="future-card">
      <Card.Img variant="top" src={developmentwork} />
      <Card.Body>
        <Card.Title className="future-card-title">Development Works</Card.Title>
        <Card.Text className="future-card-text">
          Information about ongoing development works in the village
        </Card.Text>
        <Link to="/development-works" className="future-card-link">
          View More <FaArrowRight />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DevelopmentWorks;
