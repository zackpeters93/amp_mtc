import { TechnicianUpdateManyWithoutUsersInput } from "./TechnicianUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  locked?: boolean | null;
  password?: string;
  roles?: Array<string>;
  technicians?: TechnicianUpdateManyWithoutUsersInput;
  username?: string;
};
