import { Asset } from "../asset/Asset";
import { Company } from "../company/Company";
import { TestDatum } from "../testDatum/TestDatum";

export type Job = {
  asset?: Asset | null;
  bonusAllocation: string | null;
  businessUnit: string | null;
  client?: Company | null;
  comments: string | null;
  createdAt: Date;
  id: string;
  jobStatus?: "Option1" | null;
  jobType: string | null;
  leadTechnician: string | null;
  quote: string | null;
  report: string | null;
  testData?: TestDatum | null;
  testResults: string | null;
  tickets: string | null;
  updatedAt: Date;
};
