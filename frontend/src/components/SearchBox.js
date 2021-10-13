import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Form inline style={{ display: 'flex', margin: '10px 0' }}>
      <Form.Control type="text" placeholder="Search Products..." style={{ width: '65%' }}></Form.Control>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBox;
