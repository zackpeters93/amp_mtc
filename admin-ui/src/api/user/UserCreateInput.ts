import { TechnicianCreateNestedManyWithoutUsersInput } from "./TechnicianCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  locked?: boolean | null;
  password: string;
  roles: Array<string>;
  technicians?: TechnicianCreateNestedManyWithoutUsersInput;
  username: string;
};
