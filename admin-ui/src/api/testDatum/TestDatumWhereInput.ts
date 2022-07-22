import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type TestDatumWhereInput = {
  api?: StringNullableFilter;
  contents?: StringNullableFilter;
  id?: StringFilter;
  imperialMetric?: StringNullableFilter;
  jobs?: JobListRelationFilter;
  productLevel?: StringNullableFilter;
  productTemp?: StringNullableFilter;
  specificGravity?: StringNullableFilter;
  status?: "Option1";
};
