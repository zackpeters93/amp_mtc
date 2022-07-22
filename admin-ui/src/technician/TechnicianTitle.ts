import { Technician as TTechnician } from "../api/technician/Technician";

export const TECHNICIAN_TITLE_FIELD = "id";

export const TechnicianTitle = (record: TTechnician): string => {
  return record.id || record.id;
};
