import React, { useContext } from 'react';
import { ToggleButton } from 'react-bootstrap';

import { UsersContext } from '../../context/usersContext';
import { convertDate } from '../../helpers/convertDate';
import { IUser } from '../../models/UserModel';

type PropsType = {
  user: IUser;
  handleClick: (userId: number) => void;
};

function TableRow(props: PropsType) {
  const { user, handleClick } = props;
  const { checkedUsersById } = useContext(UsersContext);

  return (
    <tr>
      <td>
        <ToggleButton
          className="mb-2"
          id={`toggle-check-${user._id}`}
          type="checkbox"
          variant="outline-primary"
          checked={checkedUsersById.includes(user._id)}
          value="1"
          onChange={() => handleClick(user._id)}
        ></ToggleButton>
      </td>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{convertDate(user.createdAt)}</td>
      <td>{convertDate(user.lastVisit)}</td>
      <td>{user.blockedStatus ? 'Blocked' : 'Unblocked'}</td>
    </tr>
  );
}

export default TableRow;
