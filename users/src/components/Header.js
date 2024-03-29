import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          Email : info@expertsgraphics.com <br />
          Mobile : +1 (210) 888-9286
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">Order/Quote</Nav.Link>
            <Nav.Link as={Link} to="/">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
