import { createContext } from 'react';

import { IContext } from '../models/ContextModel';

const Context = createContext<IContext>({
  currentUser: null,
  users: [],
  setCurrentUser: () => {},
  setUsers: () => {},
});

export { Context };
