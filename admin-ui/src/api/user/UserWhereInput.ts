import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TechnicianListRelationFilter } from "../technician/TechnicianListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  technicians?: TechnicianListRelationFilter;
  username?: StringFilter;
};
