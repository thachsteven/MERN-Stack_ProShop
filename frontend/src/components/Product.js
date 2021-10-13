import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { LinkContainer } from 'react-router-bootstrap';

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <LinkContainer style={{ cursor: 'pointer' }} to={`/product/${product._id}`}>
          <Card.Img src={product.image} alt={product.name} variant="top" />
        </LinkContainer>
        <Card.Body>
          <LinkContainer style={{ cursor: 'pointer' }} to={`/product/${product._id}`}>
            <Card.Title as="div">{product.name}</Card.Title>
          </LinkContainer>
          <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
