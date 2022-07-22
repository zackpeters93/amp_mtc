import { Contact } from "../contact/Contact";
import { Facility } from "../facility/Facility";
import { Job } from "../job/Job";

export type Company = {
  companyName: string | null;
  contacts?: Array<Contact>;
  createdAt: Date;
  facilities?: Array<Facility>;
  id: string;
  jobs?: Array<Job>;
  updatedAt: Date;
};
