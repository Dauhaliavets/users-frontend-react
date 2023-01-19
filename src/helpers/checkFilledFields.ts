import { IFormFields } from '../models/IFormFields';

const checkFilledFields = (fields: IFormFields): boolean => {
  for (const key in fields) {
    if (fields[key]) {
      if (!(fields[key] as string).length) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

export { checkFilledFields };
