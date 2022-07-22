import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TankDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Imperial/Metric" source="imperialMetric" />
        <TextField label="Insulated" source="insulated" />
        <TextField label="Roof Config" source="roofConfig" />
        <TextField label="Tank Diameter" source="tankDiameter" />
        <TextField label="Tank Height" source="tankHeight" />
        <TextField label="Tank Shell Material" source="tankShellMaterial" />
        <TextField label="Tank Type" source="tankType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
