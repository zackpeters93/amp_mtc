import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  companyName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
