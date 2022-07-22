import { Facility as TFacility } from "../api/facility/Facility";

export const FACILITY_TITLE_FIELD = "address";

export const FacilityTitle = (record: TFacility): string => {
  return record.address || record.id;
};
