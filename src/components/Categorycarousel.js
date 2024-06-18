import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Categorycarousel.css';

function Categorycarousel() {
  const categories = [
    { imgSrc: "/images/tools.png", alt: "First item", name: "Tools & Hardware" },
    { imgSrc: "/images/electrical.png", alt: "Second item", name: "Electrical Equipments & Supplies" },
    { imgSrc: "/images/home.png", alt: "Third item", name: "Home Appliances" },
    { imgSrc: "/images/business.png", alt: "Fourth item", name: "Business Services" },
    { imgSrc: "/images/homeandgarden.png", alt: "Fifth item", name: "Home & Garden" },
    { imgSrc: "/images/industrial.png", alt: "Sixth item", name: "Industrial Machinery" },
    { imgSrc: "/images/beauty.png", alt: "Seventh item", name: "Beauty" },
  ];

  const categories1 = [
    { imgSrc: "/images/environment.png", alt: "First item", name: "Environment" },
    { imgSrc: "/images/sports.png", alt: "Second item", name: "Sports & Entertainment" },
    { imgSrc: "/images/furniture.png", alt: "Third item", name: "Furniture" },
    { imgSrc: "/images/shoes.png", alt: "Fourth item", name: "Shoes & Accessories" },
    { imgSrc: "/images/apparel.png", alt: "Fifth item", name: "Apparel & Accessories" },
    { imgSrc: "/images/healthcare.png", alt: "Sixth item", name: "Health Care" },
    { imgSrc: "/images/construction.png", alt: "Seventh item", name: "Construction & Real Estate" },
  ];

  return (
    <>
    <div className='cat-title'>
      <h1>Explore millions of offerings tailored </h1>
      <h1>to your business needs</h1>
    </div>
    <div className='industry-list'>
      <div className='slider-inner'>
        <Row className='industry-row'>
          {categories.map((category, index) => (
            <Col className='item' key={index}>
              <div className='item-inner'>
                <img src={category.imgSrc} alt={category.alt} className='item-image'/>
                <div className='name'>
                  <span>{category.name}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className='industry-row'>
          {categories1.map((category, index) => (
            <Col className='item' key={index}>
              <div className='item-inner'>
                <img src={category.imgSrc} alt={category.alt} className='item-image'/>
                <div className='name'>
                  <span>{category.name}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    </>
  );
}

export default Categorycarousel;

