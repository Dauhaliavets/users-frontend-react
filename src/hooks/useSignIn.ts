import { useContext, useState } from 'react';

import { BASE_URL } from '../constants/baseUrl';
import { Context } from '../context/context';
import { checkFilledFields } from '../helpers/checkFilledFields';
import { IUser } from '../models/UserModel';

const useSignIp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string; error?: any } | null>(null);
  const { setCurrentUser } = useContext(Context);

  const signIn = async (name: string, password: string): Promise<unknown> => {
    const isFilledFields = checkFilledFields({ name, password });

    if (!isFilledFields) {
      setError({ message: 'Please fill in all fields' });
      return;
    }

    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log('user: ', user);
      console.log('setCurrentUser: ', setCurrentUser);
      setCurrentUser(user);
    } else {
      const errorResponse = await response.json();
      console.log('errorResponse: ', errorResponse);
      setError(errorResponse);
    }

    setIsLoading(false);
  };

  return { signIn, isLoading, error };
};

export { useSignIp };
