import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Burger from '../../Assets/hero/hero-2.png';
import { Link } from 'react-router-dom';
import '../../styles/homestyle.css';
function Section1() {

  return (
    <section className='hero_section'>
        <Container >
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                <div className='position-relative'>
                    <img src={Burger} className='img-fluid' alt="Hero" />
                    <div className='price_badge'>
                        <div className='badge_text'>
                            <h4 className='h4_xs'>Only</h4>
                            <h4 className='h4_xs'>$6.99</h4>
                        </div>
                    </div>
                </div>
                 </Col>
                 <Col lg={5}>
                  <div className='hero_text '>
                    <h1 className='text-white'>New Burger</h1>
                    <h2 className='text-white' >With Onion</h2>
                    <p className='text-white'>
                    Try our new delicious veggie burger! Packed with a crispy patty, fresh lettuce, juicy tomatoes, creamy cheese, and a special sauce! 
                    </p>
                    <Link><button className='order_now'>Order Now</button></Link>
                  </div>
                 </Col>
            </Row>  
          </Container>
    </section>
  )
}

export default Section1

