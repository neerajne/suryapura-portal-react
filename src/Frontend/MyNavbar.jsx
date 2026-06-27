import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import sunlogo from "../assets/sunlogoNavbar.jpg";

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      style={{ backgroundColor: "#1A4A2C" }}
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <img
            src={sunlogo}
            alt="sun logo"
            style={{ width: "35px", height: "35px", marginRight: "8px" }}
          />
          Suryapura-Village Portal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto d-flex gap-3 align-items-center text-center"
            style={{ fontSize: "16.5px" }}
          >
            <Nav.Link className="nav-link-custom" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#about">
              About us
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#development">
              Development Work
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#education">
              Education
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#farmers">
              Farmers
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#roads-construction">
              Roads
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#panchayat">
              Panchayat
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#news">
              News
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#contact">
              Contact
            </Nav.Link>

            <NavDropdown
              align="end"
              title="Sign up"
              id="basic-nav-dropdown"
              className="signup-dropdown"
            >
              <NavDropdown.Item href="#login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
