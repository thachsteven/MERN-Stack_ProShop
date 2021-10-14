import React from 'react';
import { Col, ListGroup, Row, Image, Form, Card, Button } from 'react-bootstrap';

const CartScreen = (props) => {
  console.log('props', props);
  return (
    <>
      <Row className="mt-3">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col md={2}>
                  <Image src="/images/phone.jpg" alt="phone" fluid />
                </Col>
                <Col md={3}>Logitech G-series</Col>
                <Col md={2}>$49</Col>
                <Col md={2}>
                  <Form.Control type="number" value="1" min="1" max="100"></Form.Control>
                </Col>
                <Col md={3}>
                  <i className="fas fa-trash"></i>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>SUBTOTAL (2) ITEMS</h3>
                $49
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="button" className="btn-block">
                  Process To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
