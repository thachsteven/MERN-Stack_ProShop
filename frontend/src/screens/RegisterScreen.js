import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Email Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an Account? <NavLink to="/login">Login</NavLink>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
