import React, { useMemo } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../../context/CartContext"; // Import Cart Context
import { toast, Toaster } from "react-hot-toast";
import "../../styles/homestyle.css";
import { Link } from "react-router-dom";
import "../../styles/homestyle.css";

export default function AddToCart() {
  const { cart = [], removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const handleIncrease = (id) => {
    increaseQuantity(id);
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      removeFromCart(id);
      toast.error("Item removed from cart");
    }
  };

  return (
    <>
    <Toaster />
    <Container className="py-5">
      <h1 className="text-center text-danger mb-4">Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <Card key={`cart-item-${item.id}`} className="mb-3 p-3 shadow-sm">
                <Row className="align-items-center">
                  <Col xs={3}>
                    <Card.Img variant="top" src={item.image} className="rounded img-fluid" />
                  </Col>
                  <Col xs={5}>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="text-danger fw-bold">${item.price}</Card.Text>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center justify-content-between gap-2">
                    <Button variant="warning" className="px-3" onClick={() => handleDecrease(item.id, item.quantity)}>-</Button>
                    <span className="fw-bold">{item.quantity}</span>
                    <Button variant="success" className="px-3" onClick={() => handleIncrease(item.id)}>+</Button>
                  </Col>
                </Row>
              </Card>
            ))
          ) : (
            <>
            <div className="add_to_Cart_text_mng">Oops Nothing In Your Cart!</div>
            <Link to='/'>
            <button className="order_now btn_red  add_to_Cart_mng">Add Meals</button>
            </Link>
            </>
          )}
        </Col>
        <Col md={4} className="bg-light p-4 rounded">
          <h4 className="text-center">Total Price</h4>
          <h2 className="text-danger text-center">${totalPrice.toFixed(2)}</h2>
        </Col>
      </Row>
    </Container>
    </>
  );
}
