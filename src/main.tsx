import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './components/pages/HomePage';
import SignInForm from './components/pages/SignInForm';
import SignUpForm from './components/pages/SignUpForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signIn',
        element: <SignInForm />,
      },
      {
        path: '/signUp',
        element: <SignUpForm />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
