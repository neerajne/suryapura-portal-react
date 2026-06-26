import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Educationcard.css";
import education from "..//../assets/education2.png"
function Educationcard() {
  return (
    <Card className="future-card" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={education} />
      <Card.Body>
        <Card.Title className="future-card-title">Education</Card.Title>
        <Card.Text className="future-card-text">
          Information related to schools, scholarships, and education
        </Card.Text>
        <Link to="/education-works" className="future-card-link">
          View More <FaArrowRight />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Educationcard;
