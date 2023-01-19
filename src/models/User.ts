interface User {
  _id: number;
  name: string;
  login: string;
  email: string;
  password: string;
  blockedStatus: boolean;
  createdAt: string;
  updatedAt: string;
}

type Users = User[];

export type { User, Users };
