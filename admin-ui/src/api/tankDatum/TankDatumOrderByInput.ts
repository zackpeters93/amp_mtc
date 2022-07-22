import { SortOrder } from "../../util/SortOrder";

export type TankDatumOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imperialMetric?: SortOrder;
  insulated?: SortOrder;
  roofConfig?: SortOrder;
  tankDiameter?: SortOrder;
  tankHeight?: SortOrder;
  tankShellMaterial?: SortOrder;
  tankType?: SortOrder;
  updatedAt?: SortOrder;
};
