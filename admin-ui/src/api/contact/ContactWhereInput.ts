import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FacilityListRelationFilter } from "../facility/FacilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  assets?: AssetListRelationFilter;
  company?: CompanyWhereUniqueInput;
  email?: StringNullableFilter;
  facilities?: FacilityListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
};
