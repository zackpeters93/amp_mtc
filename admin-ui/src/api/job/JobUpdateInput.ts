import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { TestDatumWhereUniqueInput } from "../testDatum/TestDatumWhereUniqueInput";

export type JobUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  bonusAllocation?: string | null;
  businessUnit?: string | null;
  client?: CompanyWhereUniqueInput | null;
  comments?: string | null;
  jobStatus?: "Option1" | null;
  jobType?: string | null;
  leadTechnician?: string | null;
  quote?: string | null;
  report?: string | null;
  testData?: TestDatumWhereUniqueInput | null;
  testResults?: string | null;
  tickets?: string | null;
};
