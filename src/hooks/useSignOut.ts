import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { Context } from '../context/context';

const useSignOut = () => {
  const { setCurrentUser } = useContext(Context);
  const navigate = useNavigate();

  const signOut = (): void => {
    setCurrentUser(null);
    navigate('/');
  };

  return { signOut };
};

export { useSignOut };
