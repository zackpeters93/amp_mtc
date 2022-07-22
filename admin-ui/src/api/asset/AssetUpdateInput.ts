import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { JobUpdateManyWithoutAssetsInput } from "./JobUpdateManyWithoutAssetsInput";
import { ContactUpdateManyWithoutAssetsInput } from "./ContactUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  assetName?: string | null;
  assetType?: string | null;
  facility?: FacilityWhereUniqueInput | null;
  jobs?: JobUpdateManyWithoutAssetsInput;
  poc?: ContactUpdateManyWithoutAssetsInput;
};
