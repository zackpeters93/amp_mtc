import { JobUpdateManyWithoutTestDataInput } from "./JobUpdateManyWithoutTestDataInput";

export type TestDatumUpdateInput = {
  api?: string | null;
  contents?: string | null;
  imperialMetric?: string | null;
  jobs?: JobUpdateManyWithoutTestDataInput;
  productLevel?: string | null;
  productTemp?: string | null;
  specificGravity?: string | null;
  status?: "Option1" | null;
};
