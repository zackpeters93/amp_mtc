import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FacilityTitle } from "../facility/FacilityTitle";
import { JobTitle } from "../job/JobTitle";
import { ContactTitle } from "../contact/ContactTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Asset Name" source="assetName" />
        <TextInput label="Asset Type" source="assetType" />
        <ReferenceInput
          source="facility.id"
          reference="Facility"
          label="Facility"
        >
          <SelectInput optionText={FacilityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="poc"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
