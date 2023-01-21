import { useContext, useState } from 'react';

import { BASE_URL } from '../constants/baseUrl';
import { Context } from '../context/context';
import { UsersContext } from '../context/usersContext';
import { useSignOut } from './useSignOut';

const useUsersManager = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { signOut } = useSignOut();
  const { setUsers, checkedUsersById, setCheckedUsersById } = useContext(UsersContext);
  const { currentUser } = useContext(Context);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      if (response.ok) {
        const users = await response.json();
        setUsers(users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUsers = async (userIds: number[], blockedStatus: boolean) => {
    setIsLoading(true);
    setError(null);

    const promises = userIds.map((userId) =>
      fetch(`${BASE_URL}/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blockedStatus }),
      }),
    );

    await Promise.allSettled(promises);
    await fetchUsers();

    if (currentUser) {
      if (userIds.includes(currentUser._id)) {
        signOut();
      }
    }

    setIsLoading(false);
  };

  const deleteUsers = async (userIds: number[]) => {
    setIsLoading(true);
    setError(null);

    const promises = userIds.map((userId) =>
      fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );

    await Promise.allSettled(promises);
    await fetchUsers();

    if (currentUser) {
      if (userIds.includes(currentUser._id)) {
        signOut();
      }
    }

    const updatedUserIds = userIds.filter((id) => !checkedUsersById.includes(id));
    setCheckedUsersById(updatedUserIds);
    setIsLoading(false);
  };

  return { fetchUsers, updateUsers, deleteUsers, isLoading, error };
};

export { useUsersManager };
