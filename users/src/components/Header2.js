import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyles = {
    backgroundColor: isScrolled || isMobileMenuOpen ? "#242047" : "transparent",
    position: "fixed",
    width: "100%",
    zIndex: "999",
    transition: "background-color 0.3s",
    height: isScrolled || isMobileMenuOpen ? "100px" : "auto",
  };

  const navTextStyles = {
    color: isScrolled || isMobileMenuOpen ? "white" : "white",
    transition: "color 0.3s",
  };

  const buttonStyles = {
    color: isScrolled || isMobileMenuOpen ? "white" : "white",
    borderColor: isScrolled || isMobileMenuOpen ? "white" : "white",
    backgroundColor: "transparent",
  };

  const navbarCollapseStyles = {
    backgroundColor: isMobileMenuOpen ? "#242047" : "transparent", // Apply background color to navbar content when mobile menu is open
  };

  return (
    <div className="header">
      <Navbar
        style={navbarStyles}
        variant="dark"
        expand="lg"
        sticky="top"
        expanded={isMobileMenuOpen} // Set expanded prop based on mobile menu state
      >
        <Container fluid style={navbarCollapseStyles}>
          <Navbar.Brand as={Link} to="" href="#" style={{ marginTop: "-10px" }}>
            <img
              src="Web logo.png"
              alt="Logo"
              className="logo-img"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu state
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" style={navTextStyles}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services" style={navTextStyles}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio" style={navTextStyles}>
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus" style={navTextStyles}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/order" style={navTextStyles}>
                Order Now
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                as={Link}
                to="/faq"
                variant="outline-success"
                style={buttonStyles}
              >
                FAQ
              </Button>
              <Button
                as={Link}
                to="/order"
                className="mx-2"
                variant="outline-success"
                style={buttonStyles}
              >
                GET A QUOTE
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header2;
