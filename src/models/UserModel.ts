interface IUser {
  _id: number;
  name: string;
  login: string;
  email: string;
  password: string;
  blockedStatus: boolean;
  createdAt: string;
  updatedAt: string;
}

type TUsers = IUser[];

export type { IUser, TUsers };
