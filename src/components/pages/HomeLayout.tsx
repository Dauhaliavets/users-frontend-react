import React, { useEffect } from 'react';

import { useUsersManager } from '../../hooks/useUsersManager';
import UsersTable from '../table/UsersTable';
import ToolBar from '../toolBar/ToolBar';

function HomeLayout() {
  const { fetchUsers } = useUsersManager();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <ToolBar />
      <UsersTable />
    </>
  );
}

export default HomeLayout;
