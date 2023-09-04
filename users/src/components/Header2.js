import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const Header2 = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
            <Container fluid>
                <Navbar.Brand as={Link} to="" href="#"><img src="Web logo.png"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} href="#action2" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="#action3" to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} href="#action4" to="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={Link} href="#action5" to="/contactus">Contact Us</Nav.Link>
                        <Nav.Link as={Link} href="#action6" to="/order">Order Now</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button as={Link} to="/faq" variant="outline-success">FAQ</Button>
                        <Button as={Link} to="/order" className='mx-2' variant="outline-success">GET A QUOTE</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header2