import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TechnicianWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
