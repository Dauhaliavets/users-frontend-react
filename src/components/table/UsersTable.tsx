import React, { useContext, useState } from 'react';
import { Table, ToggleButton } from 'react-bootstrap';

import { TableColumnTitles } from '../../constants/tableColumnTitles';
import { UsersContext } from '../../context/usersContext';

function UsersTable() {
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const { users, checkedUsersById, setCheckedUsersById } = useContext(UsersContext);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setCheckedUsersById(users.map((user) => user._id));
    if (isCheckAll) {
      setCheckedUsersById([]);
    }
  };

  const handleClick = (userId: number) => {
    if (checkedUsersById.includes(userId)) {
      const updatedUsersId = checkedUsersById.filter((item) => item !== userId);
      setCheckedUsersById(updatedUsersId);
      setIsCheckAll(false);
    } else {
      const updatedUsersId = [...checkedUsersById, userId];
      if (updatedUsersId.length === users.length) {
        setIsCheckAll(true);
      }
      setCheckedUsersById([...checkedUsersById, userId]);
    }
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>
            <ToggleButton
              className="mb-2"
              id="toggle-all-check"
              type="checkbox"
              variant="outline-primary"
              checked={isCheckAll}
              value="1"
              onChange={() => handleSelectAll()}
            >
              {isCheckAll ? 'UnCheck All' : 'Check All'}
            </ToggleButton>
          </th>
          {TableColumnTitles.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={user._id}>
              <td>
                <ToggleButton
                  className="mb-2"
                  id={`toggle-check-${index}`}
                  type="checkbox"
                  variant="outline-primary"
                  checked={checkedUsersById.includes(user._id)}
                  value="1"
                  onChange={() => handleClick(user._id)}
                >
                  {checkedUsersById.includes(user._id) ? 'UnCheck' : 'Check'}
                </ToggleButton>
              </td>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.updatedAt}</td>
              <td>{user.blockedStatus ? 'Blocked' : 'Unblocked'}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UsersTable;
