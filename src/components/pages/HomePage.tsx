import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { TableColumnTitles } from '../../constants/tableColumnTitles';
import { Users } from '../../models/User';

function HomePage() {
  const [users, setUsers] = useState<Users>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/users');
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
      <ButtonGroup>
        <Button variant="secondary">Block</Button>
        <Button variant="primary">Unblock</Button>
        <Button variant="danger">Delete</Button>
      </ButtonGroup>
      <Table responsive>
        <thead>
          <tr>
            {TableColumnTitles.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
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
    </>
  );
}

export default HomePage;
