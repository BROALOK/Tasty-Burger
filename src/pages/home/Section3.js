import React from 'react'
import { Container,  Col, Row } from 'react-bootstrap'
import Image1 from '../../Assets/menu/burger-11.jpg'
import Image2 from '../../Assets/menu/burger-12.jpg'
import Image3 from '../../Assets/menu/burger-13.jpg'  
import Image4 from '../../Assets/menu/burger-14.jpg'
import Image5 from '../../Assets/menu/burger-15.jpg'
import Image6 from '../../Assets/menu/burger-16.jpg'
import Image7 from '../../Assets/menu/burger-17.jpg'
import Image8 from '../../Assets/menu/burger-18.jpg'
import Cards from '../../components/Layouts/Cards'
import { Link } from 'react-router-dom'
import "../../styles/homestyle.css"

function Section3() {
  // Mock Data Cards (Vegetarian)
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Veggie",
    paragraph: "Crispy plant-based patty, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Veggie",
    paragraph: "Veggie patty, cheddar cheese, grilled mushrooms, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Green Delight",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Classic",
    paragraph: "Plant-based patty, vegan cheddar, grilled onions, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Veggie",
    paragraph: "2 veggie patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Tofu Burger",
    paragraph: "Grilled tofu, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey Veggie",
    paragraph: "Plant-based patty, smoked cheddar, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Veggie",
    paragraph: "Cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
  // Add more mock data objects as needed

  
];
// rating logical data
const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(<i key={`full${i}`} className='bi bi-star-fill'></i>);
      rating--;
    } else if (rating > 0) {
      stars.push(<i key={`half${i}`} className='bi bi-star-half'></i>);
      rating = 0;
    } else {
      stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
    }
  }
  return stars;
};



  return (
    <section className='menu_section'>
      <Container>
      <Row>
        <Col lg={{span:8, offset:2}} className='text-center' >
          <h2>OUR CRAZY BURGERS</h2>
          <p className='pera'>
          Introducing our newest burger sensation - a perfect blend of fresh ingredients, bold flavors, and irresistible taste. Try it today!
          </p>
        </Col>
      </Row>
      <Row>{mockData.map((CardData, index)=>(
        <Cards
   key={CardData.id}  // Use unique id as key
    id={CardData.id}    // Pass id to Cards component
    image={CardData.image}
    rating={CardData.rating}
    title={CardData.title}
    paragraph={CardData.paragraph}
    price={CardData.price}
    renderRatingIcons={renderRatingIcons}
        />

        ))}
      </Row>
        <Row>
          <Col lg={5} sm={6} >
          <div className='ads_mng ads_img mb-5 mb-md-0' >
          <h4 className='mb-0'>GET YOUR FREE</h4>
          <h5>CHEESE FRIES</h5>
          <Link to='/'>
          <button className='btn_red rounded-0 px-4'>
            Learn More
          </button>
          </Link>
          </div>
        </Col>

        <Col lg={7} sm={6} >
          <div className='ads_mng ads_img2' >
          <h4 className='mb-0'>GET YOUR FREE</h4>
          <h5>CHEESE FRIES</h5>
          <Link to='/'>
          <button className='btn_red rounded-0 px-4'>
            Learn More
          </button>
          </Link>
          </div>

        </Col>
        </Row>
      </Container>
    
    </section>
  )
}

export default Section3
