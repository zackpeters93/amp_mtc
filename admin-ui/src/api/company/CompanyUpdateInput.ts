import { ContactUpdateManyWithoutCompaniesInput } from "./ContactUpdateManyWithoutCompaniesInput";
import { FacilityUpdateManyWithoutCompaniesInput } from "./FacilityUpdateManyWithoutCompaniesInput";
import { JobUpdateManyWithoutCompaniesInput } from "./JobUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyName?: string | null;
  contacts?: ContactUpdateManyWithoutCompaniesInput;
  facilities?: FacilityUpdateManyWithoutCompaniesInput;
  jobs?: JobUpdateManyWithoutCompaniesInput;
};
