import { User } from "../user/User";

export type Technician = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: User | null;
};
