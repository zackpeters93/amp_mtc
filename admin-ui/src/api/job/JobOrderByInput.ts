import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  assetId?: SortOrder;
  bonusAllocation?: SortOrder;
  businessUnit?: SortOrder;
  clientId?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobStatus?: SortOrder;
  jobType?: SortOrder;
  leadTechnician?: SortOrder;
  quote?: SortOrder;
  report?: SortOrder;
  testDataId?: SortOrder;
  testResults?: SortOrder;
  tickets?: SortOrder;
  updatedAt?: SortOrder;
};
