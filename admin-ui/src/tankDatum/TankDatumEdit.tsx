import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TankDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Imperial/Metric" source="imperialMetric" />
        <TextInput label="Insulated" source="insulated" />
        <TextInput label="Roof Config" source="roofConfig" />
        <TextInput label="Tank Diameter" source="tankDiameter" />
        <TextInput label="Tank Height" source="tankHeight" />
        <TextInput label="Tank Shell Material" source="tankShellMaterial" />
        <TextInput label="Tank Type" source="tankType" />
      </SimpleForm>
    </Edit>
  );
};
