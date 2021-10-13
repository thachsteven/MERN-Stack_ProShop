import React from 'react';
import { Card } from 'react-bootstrap';

const Product = () => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Img src="./images/camera.jpg" variant="top" />
        <Card.Body>
          <Card.Title as="div">Cannon EOS 80D DSLR</Card.Title>
          <Card.Text as="div">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </Card.Text>
          <Card.Text as="h3">$800</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
