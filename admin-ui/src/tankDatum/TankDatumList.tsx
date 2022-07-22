import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TankDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tank Data"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
