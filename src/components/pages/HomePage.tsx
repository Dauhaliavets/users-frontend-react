import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router';

import { BASE_URL } from '../../constants/baseUrl';
import { Context } from '../../context/context';
import { TUsers } from '../../models/UserModel';
import UsersTable from '../table/UsersTable';
import ToolBar from '../toolBar/ToolBar';

function HomePage() {
  const [users, setUsers] = useState<TUsers>([]);

  const { currentUser } = useContext(Context);

  if (!currentUser) {
    return <Navigate to={'/'} />;
  }

  useEffect(() => {
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

    fetchUsers();
  }, []);

  return (
    <>
      <ToolBar />
      <UsersTable users={users} />
    </>
  );
}

export default HomePage;
