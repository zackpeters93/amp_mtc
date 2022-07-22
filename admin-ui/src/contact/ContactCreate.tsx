import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { FacilityTitle } from "../facility/FacilityTitle";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assets"
          reference="Asset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="facilities"
          reference="Facility"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FacilityTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
