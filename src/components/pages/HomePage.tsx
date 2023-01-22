import React, { useState } from 'react';

import { UsersContext } from '../../context/usersContext';
import { IUser } from '../../models/UserModel';
import HomeLayout from './HomeLayout';

function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [checkedUsersById, setCheckedUsersById] = useState<number[]>([]);

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
