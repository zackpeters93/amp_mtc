import { Technician } from "../technician/Technician";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  locked: boolean | null;
  roles: Array<string>;
  technicians?: Array<Technician>;
  updatedAt: Date;
  username: string;
};
