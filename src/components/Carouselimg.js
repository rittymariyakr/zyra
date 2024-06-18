import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Carouselimg() {
  return (
    <div>
        <Carousel interval={2000}>

        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.arcsncurves.com/hs-fs/hubfs/product-carousel-image-01.jpg?width=850&name=product-carousel-image-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/commercem4/assets/images/galleries-1-1200x800.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tutorialrepublic.com/snippets/designs/product-list-carousel-for-ecommerce-website.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

        </Carousel>
    </div>
  )
}

export default Carouselimg