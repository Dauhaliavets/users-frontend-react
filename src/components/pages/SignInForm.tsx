import React, { FormEvent, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

import { useSignIp } from '../../hooks/useSignIn';

function SignInForm() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn, isLoading, error } = useSignIp();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn(name, password);
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
        Log In
      </Button>
      {error ? <Alert variant={'danger'}>{error.message}</Alert> : ''}
    </Form>
  );
}

export default SignInForm;
