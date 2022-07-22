import { TestDatumWhereInput } from "./TestDatumWhereInput";
import { TestDatumOrderByInput } from "./TestDatumOrderByInput";

export type TestDatumFindManyArgs = {
  where?: TestDatumWhereInput;
  orderBy?: Array<TestDatumOrderByInput>;
  skip?: number;
  take?: number;
};
