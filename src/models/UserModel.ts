interface IUser {
  _id: number;
  name: string;
  login: string;
  email: string;
  password: string;
  blockedStatus: boolean;
  lastVisit: string;
  createdAt: string;
  updatedAt: string;
}

type TUsers = IUser[];

export type { IUser, TUsers };
