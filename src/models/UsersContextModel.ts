import { Dispatch, SetStateAction } from 'react';

import { IUser } from './UserModel';

interface IUsersContext {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  checkedUsersById: number[];
  setCheckedUsersById: Dispatch<SetStateAction<number[]>>;
}
export type { IUsersContext };
