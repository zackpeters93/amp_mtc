import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TankDatumWhereInput = {
  id?: StringFilter;
  imperialMetric?: StringNullableFilter;
  insulated?: StringNullableFilter;
  roofConfig?: StringNullableFilter;
  tankDiameter?: StringNullableFilter;
  tankHeight?: StringNullableFilter;
  tankShellMaterial?: StringNullableFilter;
  tankType?: StringNullableFilter;
};
