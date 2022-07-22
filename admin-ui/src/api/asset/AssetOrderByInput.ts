import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetName?: SortOrder;
  assetType?: SortOrder;
  createdAt?: SortOrder;
  facilityId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
