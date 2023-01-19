import { Dispatch, SetStateAction } from 'react';

import { IUser } from './UserModel';

interface IContext {
  isAuth: boolean;
  users: IUser[];
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}
export type { IContext };
