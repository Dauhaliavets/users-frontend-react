import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { UsersContext } from '../../context/usersContext';
import { useUsersManager } from '../../hooks/useUsersManager';

function ToolBar() {
  const { checkedUsersById } = useContext(UsersContext);
  const { updateUsers, deleteUsers } = useUsersManager();

  const handleBlock = () => {
    updateUsers(checkedUsersById, true);
  };

  const handleUnBlock = () => {
    updateUsers(checkedUsersById, false);
  };

  const handleDelete = () => {
    deleteUsers(checkedUsersById);
  };

  return (
    <ButtonGroup>
      <Button variant="secondary" onClick={handleBlock}>
        Block
      </Button>
      <Button variant="primary" onClick={handleUnBlock}>
        Unblock
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </ButtonGroup>
  );
}

export default ToolBar;
