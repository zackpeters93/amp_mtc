import { ContactCreateNestedManyWithoutCompaniesInput } from "./ContactCreateNestedManyWithoutCompaniesInput";
import { FacilityCreateNestedManyWithoutCompaniesInput } from "./FacilityCreateNestedManyWithoutCompaniesInput";
import { JobCreateNestedManyWithoutCompaniesInput } from "./JobCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyName?: string | null;
  contacts?: ContactCreateNestedManyWithoutCompaniesInput;
  facilities?: FacilityCreateNestedManyWithoutCompaniesInput;
  jobs?: JobCreateNestedManyWithoutCompaniesInput;
};
