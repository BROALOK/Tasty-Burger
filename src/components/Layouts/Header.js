import React from 'react'
import "../../styles/headerstyle.css"
import {Container,Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png';

function Header() {
  
  return (
    
   <header>

    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='logo'>
            <img src={logo} alt="burger-logo" className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shopping</Nav.Link>          
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <div className='card'>
              <i className="bi bi-bag fs-5"></i>
              <em className='roundpoint'>2</em>
              </div>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </header>
   
  )
}

export default Header
