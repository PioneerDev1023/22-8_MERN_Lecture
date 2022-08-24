import React from 'react';
import Logo from '../../assets/images/logo.svg';
import Cart from '../../assets/images/Add to cart.svg';
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div className='header-section'>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo-img' src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><img src={Cart} /></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className='nav-btn'>Become a Local Expert</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className='nav-btn login-btn'>Login</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className='nav-btn'>Signup</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}