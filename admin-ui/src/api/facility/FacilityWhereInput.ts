import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type FacilityWhereInput = {
  address?: StringNullableFilter;
  assets?: AssetListRelationFilter;
  city?: StringNullableFilter;
  contact?: ContactWhereUniqueInput;
  country?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  owner?: CompanyWhereUniqueInput;
  state?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
