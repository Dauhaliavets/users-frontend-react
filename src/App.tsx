import './App.css';

import { useState } from 'react';
import { createRoutesFromElements, Outlet, Route } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './components/pages/HomePage';
import SignInForm from './components/pages/SignInForm';
import SignUpForm from './components/pages/SignUpForm';
import WelcomePage from './components/pages/WelcomePage';
import { Context } from './context/context';
import { IUser } from './models/UserModel';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signIn" element={<SignInForm />} />
      <Route path="/signUp" element={<SignUpForm />} />
      <Route path="/home" element={<HomePage />} />
    </Route>,
  ),
);

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

export default router;
