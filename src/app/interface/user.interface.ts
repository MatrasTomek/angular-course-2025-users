import { RoleEnum } from '../enum/role.enum';

export interface UserInterface {
  name: string;
  surname: string;
  role: RoleEnum;
  email: string;
  startDate: string;
  salary: number;
}
