import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { CompanyTitle } from "../company/CompanyTitle";

export const FacilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="assets"
          reference="Asset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetTitle} />
        </ReferenceArrayInput>
        <TextInput label="City" source="city" />
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <TextInput label="Country" source="country" />
        <TextInput label="Location" source="location" />
        <ReferenceInput source="company.id" reference="Company" label="Owner">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="State" source="state" />
        <TextInput label="Zip Code" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
