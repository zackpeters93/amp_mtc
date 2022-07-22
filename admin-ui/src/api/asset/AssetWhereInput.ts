import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";

export type AssetWhereInput = {
  assetName?: StringNullableFilter;
  assetType?: StringNullableFilter;
  facility?: FacilityWhereUniqueInput;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  poc?: ContactListRelationFilter;
};
