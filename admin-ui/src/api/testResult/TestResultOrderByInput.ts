import { SortOrder } from "../../util/SortOrder";

export type TestResultOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imperialMetric?: SortOrder;
  measuredLeakRate?: SortOrder;
  result?: SortOrder;
  testLength?: SortOrder;
  updatedAt?: SortOrder;
};
