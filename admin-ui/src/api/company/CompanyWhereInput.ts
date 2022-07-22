import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { FacilityListRelationFilter } from "../facility/FacilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type CompanyWhereInput = {
  companyName?: StringNullableFilter;
  contacts?: ContactListRelationFilter;
  facilities?: FacilityListRelationFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
};
