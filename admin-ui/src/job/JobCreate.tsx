import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AssetTitle } from "../asset/AssetTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { TestDatumTitle } from "../testDatum/TestDatumTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <TextInput label="Bonus Allocation" source="bonusAllocation" />
        <TextInput label="Business Unit" source="businessUnit" />
        <ReferenceInput source="company.id" reference="Company" label="Client">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Comments" multiline source="comments" />
        <SelectInput
          source="jobStatus"
          label="Job Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Job Type" source="jobType" />
        <TextInput label="Lead Technician" source="leadTechnician" />
        <TextInput label="Quote" source="quote" />
        <TextInput label="Report" source="report" />
        <ReferenceInput
          source="testdatum.id"
          reference="TestDatum"
          label="Test Data"
        >
          <SelectInput optionText={TestDatumTitle} />
        </ReferenceInput>
        <TextInput label="Test Results" source="testResults" />
        <TextInput label="Tickets" source="tickets" />
      </SimpleForm>
    </Create>
  );
};
