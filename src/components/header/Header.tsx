import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Context } from '../../context/context';

function Header() {
  const { currentUser } = useContext(Context);
  return (
    <header className="m-2">
      <Container className="d-flex flex-row-reverse gap-2">
        {currentUser ? (
          <Link to={'..'}>
            <Button variant="danger">Log out</Button>
          </Link>
        ) : (
          <>
            <Link to={'/signIn'}>
              <Button variant="primary">SignIn</Button>
            </Link>
            <Link to={'/signUp'}>
              <Button variant="primary">SignUp</Button>
            </Link>
          </>
        )}
      </Container>
    </header>
  );
}

export default Header;
