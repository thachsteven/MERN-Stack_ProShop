import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h1 className="mt-3">Latest Products</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Product />
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
