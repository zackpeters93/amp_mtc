import { Asset } from "../asset/Asset";
import { Company } from "../company/Company";
import { Facility } from "../facility/Facility";

export type Contact = {
  assets?: Array<Asset>;
  company?: Company | null;
  createdAt: Date;
  email: string | null;
  facilities?: Array<Facility>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
