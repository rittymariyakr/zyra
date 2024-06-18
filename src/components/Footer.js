import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
import './Footer.css';

function Footer() {
  return (
<footer className="footer">
    <Container>
    <Row>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Customer Service</h4>
        <ul>
          <li><a href="/help">Help Center</a></li>
          <li><a href="/returns">Returns</a></li>
          <li><a href="/shipping">Shipping Information</a></li>
          <li><a href="/faq">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/cookies">Cookies Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul className="social-media">
          <li><a href="https://facebook.com" className="icon"><FaFacebookF/></a></li>
          <li><a href="https://twitter.com" className="icon"><FaTwitter/></a></li>
          <li><a href="https://instagram.com" className="icon"><FaInstagram/></a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>1234 Street Name, City, Country</p>
        <p>Phone: +123 456 7890</p>
        <p>Email: support@ecommerce.com</p>
      </div>
      <div className="footer-section">
        <h4>Payment Methods</h4>
        <div className="payment-icons">
          <FaCcVisa className="payment-icon" />
          <FaCcMastercard className="payment-icon" />
          <FaCcPaypal className="payment-icon" />
        </div>
      </div>
    </Row>

    <Row>
        <Col className='text-center py-3'> Copyright &copy; Bowbow Trading</Col>
    </Row>
    </Container>
</footer>
  )
}

export default Footer