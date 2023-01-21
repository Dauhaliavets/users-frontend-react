import { createContext } from 'react';

import { IUsersContext } from '../models/UsersContextModel';

const UsersContext = createContext<IUsersContext>({
  users: [],
  setUsers: () => {},
  checkedUsersById: [],
  setCheckedUsersById: () => {},
});

export { UsersContext };
