import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Context } from '../../context/context';
import { useUsersManager } from '../../hooks/useUsersManager';
import UsersTable from '../table/UsersTable';
import ToolBar from '../toolBar/ToolBar';

function HomeLayout() {
  const { fetchUsers } = useUsersManager();
  const { currentUser } = useContext(Context);

  if (!currentUser) {
    return <Navigate to={'/'} />;
  }

  useEffect(() => {
    const abortController = new AbortController();
    fetchUsers();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <ToolBar />
      <UsersTable />
    </>
  );
}

export default HomeLayout;
