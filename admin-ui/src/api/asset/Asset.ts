import { Facility } from "../facility/Facility";
import { Job } from "../job/Job";
import { Contact } from "../contact/Contact";

export type Asset = {
  assetName: string | null;
  assetType: string | null;
  createdAt: Date;
  facility?: Facility | null;
  id: string;
  jobs?: Array<Job>;
  poc?: Array<Contact>;
  updatedAt: Date;
};
