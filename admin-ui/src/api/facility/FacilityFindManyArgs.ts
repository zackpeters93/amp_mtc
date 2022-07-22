import { FacilityWhereInput } from "./FacilityWhereInput";
import { FacilityOrderByInput } from "./FacilityOrderByInput";

export type FacilityFindManyArgs = {
  where?: FacilityWhereInput;
  orderBy?: Array<FacilityOrderByInput>;
  skip?: number;
  take?: number;
};
