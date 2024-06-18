import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Row,Col } from 'react-bootstrap'
import './Cards.css'

function Cards() {

  return (
    <div className='card'>
        <Row className='rows'> 
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71kxX+vFv+L._SL1500_.jpg" />
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            Fastrack New Limitless X2 Smartwatch|1.91" UltraVU with Rotating Crown|60 Hz Refresh Rate|Advanced Chipset|SingleSync BT Calling|NitroFast Charge
            </Card.Text>
            <Button variant="primary">Buy now</Button>
             </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71g09REHnkL._SL1500_.jpg" />
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            Noise Halo Plus 1.46" Super AMOLED Display Elite Smart Watch, Bluetooth Calling, Stainless Steel Build, Always on Display, Upto 7 Days Battery (Elite Black)
            </Card.Text>
            <Button variant="primary">Buy now</Button>
             </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41tPVIL61kL._AC_UF480,480_SR480,480_.jpg" />
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            Noise Newly Launched Endeavour Rugged Design 1.46" AMOLED Display Smart Watch, BT Calling, SoS Feature, Rapid Health & 100+ Sports Modes- (Vintage Brown)
            </Card.Text>
            <Button variant="primary">Buy now</Button>
             </Card.Body>
          </Card>
          </Col>
        </Row>

        <Row>
          <br/>
          <br/>
        </Row>
    </div>
  )
}

export default Cards