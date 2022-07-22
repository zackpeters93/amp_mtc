import { AssetUpdateManyWithoutContactsInput } from "./AssetUpdateManyWithoutContactsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { FacilityUpdateManyWithoutContactsInput } from "./FacilityUpdateManyWithoutContactsInput";

export type ContactUpdateInput = {
  assets?: AssetUpdateManyWithoutContactsInput;
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  facilities?: FacilityUpdateManyWithoutContactsInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
