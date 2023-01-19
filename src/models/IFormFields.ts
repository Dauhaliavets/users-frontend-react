interface IFormFields {
  name: string;
  email?: string | undefined;
  password: string;
  [key: string]: string | undefined;
}

export type { IFormFields };
