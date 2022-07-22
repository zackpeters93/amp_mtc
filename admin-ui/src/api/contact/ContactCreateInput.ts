import { AssetCreateNestedManyWithoutContactsInput } from "./AssetCreateNestedManyWithoutContactsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { FacilityCreateNestedManyWithoutContactsInput } from "./FacilityCreateNestedManyWithoutContactsInput";

export type ContactCreateInput = {
  assets?: AssetCreateNestedManyWithoutContactsInput;
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  facilities?: FacilityCreateNestedManyWithoutContactsInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
