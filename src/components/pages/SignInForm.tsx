import React from 'react';
import { Button, Form } from 'react-bootstrap';

function SignInForm() {
  return (
    <Form className="align-items-center">
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control type="text" placeholder="Enter your username (login)" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default SignInForm;
