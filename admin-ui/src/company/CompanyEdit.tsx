import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContactTitle } from "../contact/ContactTitle";
import { FacilityTitle } from "../facility/FacilityTitle";
import { JobTitle } from "../job/JobTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Company Name" source="companyName" />
        <ReferenceArrayInput
          source="contacts"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="facilities"
          reference="Facility"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FacilityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
