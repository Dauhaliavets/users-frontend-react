import React, { FormEvent, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

import { useSignUp } from '../../hooks/useSignUp';

function SignUpForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signUp, isLoading, error } = useSignUp();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signUp(name, email, password);
  };

  return (
    <Form
      className="d-flex flex-column p-8 w-75 mx-auto"
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
      noValidate
    >
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label className="d-flex">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username (login)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3 w-100" controlId="formEmail">
        <Form.Label className="d-flex">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group className="mb-3 w-100" controlId="formPassword">
        <Form.Label className="d-flex">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button
        className="align-self-end flex px-4 mb-4"
        variant="primary"
        type="submit"
        disabled={isLoading}
      >
        Registration
      </Button>
      {error ? <Alert variant={'danger'}>{error.message}</Alert> : ''}
    </Form>
  );
}

export default SignUpForm;
