import { Dispatch, SetStateAction } from 'react';

import { IUser } from './UserModel';

interface IContext {
  currentUser: IUser | null;
  users: IUser[];
  setCurrentUser: Dispatch<SetStateAction<IUser | null>>;
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}
export type { IContext };
