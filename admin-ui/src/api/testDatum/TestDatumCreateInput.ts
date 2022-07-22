import { JobCreateNestedManyWithoutTestDataInput } from "./JobCreateNestedManyWithoutTestDataInput";

export type TestDatumCreateInput = {
  api?: string | null;
  contents?: string | null;
  imperialMetric?: string | null;
  jobs?: JobCreateNestedManyWithoutTestDataInput;
  productLevel?: string | null;
  productTemp?: string | null;
  specificGravity?: string | null;
  status?: "Option1" | null;
};
