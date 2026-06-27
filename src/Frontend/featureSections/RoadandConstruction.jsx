import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./RoadandConstruction.css";
import road from "..//../assets/road.png";
function RoadandConstruction() {
  return (
    <Card className="future-card">
      <Card.Img variant="top" src={road} />
      <Card.Body>
        <Card.Title className="future-card-title">
          Road & Construction
        </Card.Title>
        <Card.Text className="future-card-text">
          Roads, bridges, and other construction works
        </Card.Text>
        <Link to="/development-works" className="future-card-link">
          View More <FaArrowRight />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default RoadandConstruction;
