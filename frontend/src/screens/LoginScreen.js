import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FromContainer from '../components/FormContainer';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Meta from '../components/Meta';

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      history.goBack();
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FromContainer>
      <Meta title="ProShop | Sign In" />
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
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
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
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
