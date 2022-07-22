import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "bonusAllocation";

export const JobTitle = (record: TJob): string => {
  return record.bonusAllocation || record.id;
};
