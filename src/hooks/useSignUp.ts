import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { BASE_URL } from '../constants/baseUrl';
import { Context } from '../context/context';
import { checkFilledFields } from '../helpers/checkFilledFields';

const useSignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string; error?: any } | null>(null);
  const { setCurrentUser } = useContext(Context);
  const navigate = useNavigate();

  const signUp = async (
    name: string,
    email: string,
    password: string,
  ): Promise<unknown> => {
    const isFilledFields = checkFilledFields({ name, email, password });

    console.log({ name, email, password });
    console.log(isFilledFields);
    if (!isFilledFields) {
      setError({ message: 'Please fill in all fields' });
      return;
    }

    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      setCurrentUser(user);
    } else {
      const errorResponse = await response.json();
      setError(errorResponse);
    }

    setIsLoading(false);
    navigate('/home');
  };

  return { signUp, isLoading, error };
};

export { useSignUp };
