import { AssetCreateNestedManyWithoutFacilitiesInput } from "./AssetCreateNestedManyWithoutFacilitiesInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type FacilityCreateInput = {
  address?: string | null;
  assets?: AssetCreateNestedManyWithoutFacilitiesInput;
  city?: string | null;
  contact?: ContactWhereUniqueInput | null;
  country?: string | null;
  location?: string | null;
  owner?: CompanyWhereUniqueInput | null;
  state?: string | null;
  zipCode?: string | null;
};
