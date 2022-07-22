import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TestDatumWhereUniqueInput } from "../testDatum/TestDatumWhereUniqueInput";

export type JobWhereInput = {
  asset?: AssetWhereUniqueInput;
  bonusAllocation?: StringNullableFilter;
  businessUnit?: StringNullableFilter;
  client?: CompanyWhereUniqueInput;
  comments?: StringNullableFilter;
  id?: StringFilter;
  jobStatus?: "Option1";
  jobType?: StringNullableFilter;
  leadTechnician?: StringNullableFilter;
  quote?: StringNullableFilter;
  report?: StringNullableFilter;
  testData?: TestDatumWhereUniqueInput;
  testResults?: StringNullableFilter;
  tickets?: StringNullableFilter;
};
