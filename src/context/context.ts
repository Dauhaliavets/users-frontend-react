import { createContext } from 'react';

import { IContext } from '../models/ContextModel';

const Context = createContext<IContext>({
  currentUser: null,
  setCurrentUser: () => {},
});

export { Context };
