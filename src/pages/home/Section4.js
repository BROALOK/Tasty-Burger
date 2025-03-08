import React from 'react'
import { Container,  Col, Row } from 'react-bootstrap'
import promotionimage from '../../Assets/promotion/pro.png'
import '../../styles/homestyle.css'
function Section4() {
  return (
  <>
      <section className='promotion_section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6} className='txet-center mb-5 mb-lg-0'>
          <img src={promotionimage} className='img-fluid' alt="promotion" />
           </Col>
           <Col lg={6} className='px-5'>
            <h2>Nothing brings people together like a good burger</h2>
            <p>
            A perfect bite, packed with juicy flavors, turns any moment into a celebration. Whether shared with friends or enjoyed solo, a great burger always satisfies.</p>
                <ul>
                  <li>
                    <p>
                    Fresh ingredients, sizzling patties, and mouthwatering sauces create an unforgettable taste. Every burger is crafted to perfection, bringing joy in every bite.
                    </p>
                  </li>
                  <li>
                    <p>
                    From classic favorites to bold new flavors, there’s something for everyone. Pair it with crispy fries and a refreshing drink for the ultimate meal experience.
                    </p>
                  </li>
                  <li>
                    <p>
                    Order now and enjoy hot, fresh, and delicious burgers delivered straight to your door. Because great taste should never have to wait!
                    </p>
                  </li>
                </ul>
           </Col>
        </Row>
      </Container>
      </section>

      {/*bg parallax scroll */}
      <section className='bg_parallax_scroll'></section>

    </>
  )
}

export default Section4
