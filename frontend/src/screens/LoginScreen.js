import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FromContainer from '../components/FormContainer';
import { NavLink } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <FromContainer>
      <h1>Sign In</h1>
      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer? <NavLink to="/register">Register</NavLink>
        </Col>
      </Row>
    </FromContainer>
  );
};

export default LoginScreen;
