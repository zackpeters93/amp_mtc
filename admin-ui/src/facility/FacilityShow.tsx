import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FACILITY_TITLE_FIELD } from "./FacilityTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const FacilityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <ReferenceField label="Owner" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="State" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip Code" source="zipCode" />
        <ReferenceManyField
          reference="Asset"
          target="FacilityId"
          label="Assets"
        >
          <Datagrid rowClick="show">
            <TextField label="Asset Name" source="assetName" />
            <TextField label="Asset Type" source="assetType" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Facility"
              source="facility.id"
              reference="Facility"
            >
              <TextField source={FACILITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
