import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { JobCreateNestedManyWithoutAssetsInput } from "./JobCreateNestedManyWithoutAssetsInput";
import { ContactCreateNestedManyWithoutAssetsInput } from "./ContactCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  assetName?: string | null;
  assetType?: string | null;
  facility?: FacilityWhereUniqueInput | null;
  jobs?: JobCreateNestedManyWithoutAssetsInput;
  poc?: ContactCreateNestedManyWithoutAssetsInput;
};
