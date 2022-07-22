import { AssetUpdateManyWithoutFacilitiesInput } from "./AssetUpdateManyWithoutFacilitiesInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type FacilityUpdateInput = {
  address?: string | null;
  assets?: AssetUpdateManyWithoutFacilitiesInput;
  city?: string | null;
  contact?: ContactWhereUniqueInput | null;
  country?: string | null;
  location?: string | null;
  owner?: CompanyWhereUniqueInput | null;
  state?: string | null;
  zipCode?: string | null;
};
