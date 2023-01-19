import './App.css';

import { useState } from 'react';
import { Outlet } from 'react-router';

import Header from './components/header/Header';
import { Context } from './context/context';
import { IUser } from './models/UserModel';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  return (
    <Context.Provider
      value={{
        users,
        currentUser,
        setUsers,
        setCurrentUser,
      }}
    >
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
