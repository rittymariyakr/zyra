import React from 'react'
import './Banner.css'
import {Button,Card ,Row,Col}from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import Carouselimg from './Carouselimg';
import Cards from './Cards';
import Footer from './Footer';
import Categorycarousel from './Categorycarousel';
import Cardlist from './Cardlist';


function Banner() {

  return (
    <div className='main'>
    <div className="background-container">
      <div className="overlay">
        <strong><b>
        <h1 className="heading">The Leading ecommerce Platform for</h1>
        <h1 className="heading"> Tools and Groceries</h1>
        </b></strong>  
        <form>
        <input type="text" className="search-input form-control" placeholder="Search here......" />
        <Button variant="warning" className='button'><FaSearch/> Search</Button>{' '}
        </form>
      </div>
    </div>

    <Row className='inmain'> 

    <Col>
    {[
        'Secondary'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' , height: '18rem'}}
          className="mb-2 text-align-center"
        >
          <Card.Body>
            <Card.Title> Assured quality and transactions </Card.Title>
            <Card.Text>
            Ensure production quality from verified suppliers, with your 
            orders protected from payment to delivery.
            </Card.Text>
            <Card.Link href="#">See more</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Col>

    <Col>
    {[
        'Secondary'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' , height: '18rem'}}
          className="mb-2 text-align-center"
        >
          <Card.Body>
            <Card.Title> One-stop trading solution </Card.Title>
            <Card.Text>
            Order seamlessly from product/supplier search to order 
            management, payment, and fulfillment.
            </Card.Text>
            <Card.Link href="#">See more</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Col>

    <Col>
    {[
        'Secondary'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' , height: '18rem'}}
          className="mb-2 text-align-center"
        >
          <Card.Body>
            <Card.Title> Millions of business offerings </Card.Title>
            <Card.Text>
            Explore products and suppliers for your business from millions
            of offerings worldwide
            </Card.Text>
            <Card.Link href="#">See more</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Col>

    <Col>
    {[
        'Secondary'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' , height: '18rem'}}
          className="mb-2 text-align-center"
        >
          <Card.Body>
            <Card.Title> Tailored trading experience </Card.Title>
            <Card.Text>
             Get curated benefits, such as exclusive discounts, enhanced protection,
             and extra support, to help grow your business every step of the way.
            </Card.Text>
            <Card.Link href="#">See more</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Col>
  
    </Row>
    <Carouselimg/>
    <Categorycarousel/>
    <Cardlist/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default Banner