import './App.css';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="m-2">
        <Container className="d-flex gap-2">
          <Button variant="primary">SignIn</Button>
          <Button variant="primary">SignUp</Button>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Created by Dzmitry Dauhaliavets</footer>
    </div>
  );
}

export default App;
