import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import "./Header.css"
import { CiLogin } from "react-icons/ci";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 300);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className='head'>
     <Navbar collapseOnSelect expand="lg" className="header bg-body-tertiary fixed-top flex-column">
      
      <Container className='nav'>
        <Navbar.Brand href="#home"><h2><b><i>Bowbow Trading</i></b></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">       
        <Nav className="me-auto ">
        {isScrolled ? (
            <div className="search-bar-nav" >
              <input type="text" className="search-input form-control" placeholder="Search here......" />
              <Button variant="warning" className='button'><FaSearch/> Search</Button>{' '}
            </div>
          ) : null}
        </Nav>
          
          <Nav>
          <p className='mt-2'><FaBars/></p>
            <NavDropdown  title=" All Categories" id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Top Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tools & Home Development</NavDropdown.Item>  
              <NavDropdown.Item href="#action/3.3">Maintanance, Repair & Operations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Fashion & Beauty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Groceries</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Industrial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Link to={'/signin'}>
            <Nav.Link href="#deets">Sign in</Nav.Link>
            </Link> 
            <Link to={'/signup'}>
             <Button variant="warning" className='sign'><CiLogin/> Sign up</Button>{' '}
            </Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
 
    </Navbar>
    </div>
   
  )
}

export default Header