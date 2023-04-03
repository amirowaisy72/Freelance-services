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
          Email : amirowaisy72@gmail.com <br />
          Mobile : 0316-0609994
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
