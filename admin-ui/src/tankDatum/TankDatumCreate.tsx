import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TankDatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Imperial/Metric" source="imperialMetric" />
        <TextInput label="Insulated" source="insulated" />
        <TextInput label="Roof Config" source="roofConfig" />
        <TextInput label="Tank Diameter" source="tankDiameter" />
        <TextInput label="Tank Height" source="tankHeight" />
        <TextInput label="Tank Shell Material" source="tankShellMaterial" />
        <TextInput label="Tank Type" source="tankType" />
      </SimpleForm>
    </Create>
  );
};
