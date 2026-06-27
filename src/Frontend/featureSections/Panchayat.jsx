import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DevelopmentWork.css";
import panchayat from "..//../assets/panchayat.jpg";
function Panchayat() {
  return (
    <Card className="future-card">
      <Card.Img variant="top" src={panchayat} />
      <Card.Body>
        <Card.Title className="future-card-title">Panchayat</Card.Title>
        <Card.Text className="future-card-text">
          Panchayat members, meetings, and other services
        </Card.Text>
        <Link to="/development-works" className="future-card-link">
          View More <FaArrowRight />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Panchayat;
