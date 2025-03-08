import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../../Assets/about/pizza.png'
import Salad from '../../Assets/about/salad.png' 
import Delivery from '../../Assets/about/delivery-bike.png'
import "../../styles/homestyle.css"

function Section2() {
    // Mock Data Cards
const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Enjoy the rich, original flavors of our handcrafted burgers, made with the finest ingredients to satisfy your cravings. Every bite is packed with mouthwatering goodness, delivering the ultimate burger experience`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `We use only the freshest, high-quality ingredients to ensure every bite is packed with deliciousness and nutrition. From farm-fresh veggies to premium meat, we craft each burger with care and passion`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Craving a burger? We deliver your favorite meals hot and fresh, straight to your doorstep in no time! Our fast and reliable service ensures you enjoy a delicious meal whenever you want`,
    },
    // Add more mock data objects as needed
  ];
  return (
    <>
    <section className='about_section'>
        <Container>
            <Row>
                <Col lg={{span: 8, offset: 2}} className='text-center'>
                <h2>The Burger Taste Better When yoou eat with your family</h2>
                <p>
                A sizzling online destination for burger lovers, featuring handcrafted patties, fresh ingredients, exclusive deals, easy ordering, and delivery.
                </p>
            <Link to="/"><button className='order_now btn_red'>
                Explore Full Menu
            </button></Link>
                </Col>
            </Row>
        </Container>
    </section>

    <section className='about_wrapper'>
    <Container>
        <Row className='justify-content-md-center'>
        {mockData.map((cardData, index) => ( 
            <Col lg={4} md={6} className='mb-4 mb-md-0'>
            <div className='about_box text-center'>
            <div className='about_icon'>
            <img src={cardData.image} className='img-fluid' alt="icon" />
            <h4>{cardData.title}</h4>
            <p>{cardData.paragraph}</p>
            </div>
            </div>

            </Col>
        ))}

        </Row>
    </Container>
    </section>

    </>
  )
}

export default Section2
