import { Job } from "../job/Job";

export type TestDatum = {
  api: string | null;
  contents: string | null;
  createdAt: Date;
  id: string;
  imperialMetric: string | null;
  jobs?: Array<Job>;
  productLevel: string | null;
  productTemp: string | null;
  specificGravity: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
