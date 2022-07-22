import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestResultWhereInput = {
  comments?: StringNullableFilter;
  id?: StringFilter;
  imperialMetric?: StringNullableFilter;
  measuredLeakRate?: StringNullableFilter;
  result?: StringNullableFilter;
  testLength?: StringNullableFilter;
};
