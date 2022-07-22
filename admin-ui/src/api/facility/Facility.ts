import { Asset } from "../asset/Asset";
import { Contact } from "../contact/Contact";
import { Company } from "../company/Company";

export type Facility = {
  address: string | null;
  assets?: Array<Asset>;
  city: string | null;
  contact?: Contact | null;
  country: string | null;
  createdAt: Date;
  id: string;
  location: string | null;
  owner?: Company | null;
  state: string | null;
  updatedAt: Date;
  zipCode: string | null;
};
