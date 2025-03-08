import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../Assets/blog/review-author-1.jpg";
import User2 from "../../Assets/blog/review-author-2.jpg";
import User3 from "../../Assets/blog/review-author-3.jpg";
import User4 from "../../Assets/blog/review-author-5.jpg";

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  " Absolutely love the burgers! Always fresh, juicy, and full of flavor. The delivery was super fast, and everything arrived hot. My new favorite burger spot! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                "Ordered through the app and got 20% off! The burger was delicious, and the fries were perfectly crispy. Super easy and convenient!"
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                "Best burgers in town! The quality is unbeatable, and the flavors are just right. Quick delivery and excellent service. Highly recommend!"
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User4} className="img-fluid" alt="User-4" />
                </div>
                <p>
                "Tried their signature burger, and it was amazing! Juicy patty, fresh toppings, and perfectly seasoned. Plus, delivery in under 30 minutes—awesome!" 
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
