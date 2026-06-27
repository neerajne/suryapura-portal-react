import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Farmers.css";
import farmers from "..//../assets/farmers.jpg";

function Farmers() {
  return (
    <Card className="future-card">
      <Card.Img variant="top" src={farmers} />
      <Card.Body>
        <Card.Title className="future-card-title">Farmers</Card.Title>
        <Card.Text className="future-card-text">
          Information about farming, government schemes, and market prices
        </Card.Text>
        <Link to="/development-works" className="future-card-link">
          View More <FaArrowRight />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Farmers;
