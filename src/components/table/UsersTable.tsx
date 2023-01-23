import React, { useContext, useState } from 'react';
import { Table, ToggleButton } from 'react-bootstrap';

import { TableColumnTitles } from '../../constants/tableColumnTitles';
import { UsersContext } from '../../context/usersContext';
import TableRow from './TableRow';

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
            ></ToggleButton>
          </th>
          {TableColumnTitles.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow key={user._id} user={user} handleClick={handleClick} />
        ))}
      </tbody>
    </Table>
  );
}

export default UsersTable;
