import { Dispatch, SetStateAction } from 'react';

import { IUser } from './UserModel';

interface IContext {
  currentUser: IUser | null;
  setCurrentUser: Dispatch<SetStateAction<IUser | null>>;
}
export type { IContext };
