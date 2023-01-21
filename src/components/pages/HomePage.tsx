import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router';

import { Context } from '../../context/context';
import { UsersContext } from '../../context/usersContext';
import { IUser } from '../../models/UserModel';
import HomeLayout from './HomeLayout';

function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [checkedUsersById, setCheckedUsersById] = useState<number[]>([]);
  const { currentUser } = useContext(Context);

  if (!currentUser) {
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <UsersContext.Provider
        value={{
          users,
          setUsers,
          checkedUsersById,
          setCheckedUsersById,
        }}
      >
        <HomeLayout />
      </UsersContext.Provider>
    </>
  );
}

export default HomePage;
