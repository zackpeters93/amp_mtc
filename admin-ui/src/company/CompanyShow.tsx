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

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { TESTDATUM_TITLE_FIELD } from "../testDatum/TestDatumTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Company Name" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Contact"
          target="CompanyId"
          label="Contacts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Facility"
          target="CompanyId"
          label="Facilities"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="City" source="city" />
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <ReferenceField
              label="Owner"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="State" source="state" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Zip Code" source="zipCode" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Job" target="CompanyId" label="Jobs">
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
