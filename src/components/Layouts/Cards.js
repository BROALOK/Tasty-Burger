import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';  // Import Cart Context
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';

function Cards({ id, image, title, paragraph, rating, price, renderRatingIcons }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name: title, price, image });
    toast.success("Item added to cart!");
  };

  return (
    <>
    <Toaster/>
    <Col sm={0} lg={4} xl={3} className='mb-4'>
      <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
          <Card.Img variant="top" src={image} />
        </div> 
        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='item_rating'>{renderRatingIcons(rating)}</div>
            <div className='wishlist'>
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className='d-flex align-items-center justify-content-between'>
            <div className='menu_price'>
              <h5 className='mb-0'>${price}</h5>
            </div>
            <div className='add_to_cart'>
              <Link onClick={handleAddToCart} className="btn_red">
                <i className="bi bi-bag"> Add To Cart</i>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
}

export default Cards;
