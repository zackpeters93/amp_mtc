import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { TESTDATUM_TITLE_FIELD } from "./TestDatumTitle";

export const TestDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="API" source="api" />
        <TextField label="Contents" source="contents" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Imperial/Metric" source="imperialMetric" />
        <TextField label="Product Level" source="productLevel" />
        <TextField label="Product Temp" source="productTemp" />
        <TextField label="Specific Gravity" source="specificGravity" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Job" target="TestDatumId" label="Jobs">
          <Datagrid rowClick="show">
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Bonus Allocation" source="bonusAllocation" />
            <TextField label="Business Unit" source="businessUnit" />
            <ReferenceField
              label="Client"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Job Status" source="jobStatus" />
            <TextField label="Job Type" source="jobType" />
            <TextField label="Lead Technician" source="leadTechnician" />
            <TextField label="Quote" source="quote" />
            <TextField label="Report" source="report" />
            <ReferenceField
              label="Test Data"
              source="testdatum.id"
              reference="TestDatum"
            >
              <TextField source={TESTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Test Results" source="testResults" />
            <TextField label="Tickets" source="tickets" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
