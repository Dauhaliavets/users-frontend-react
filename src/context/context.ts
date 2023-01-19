import { createContext } from 'react';

import { IContext } from '../models/ContextModel';

const Context = createContext<IContext>({
  isAuth: false,
  users: [],
  setIsAuth: () => false,
  setUsers: () => {},
});

export { Context };
