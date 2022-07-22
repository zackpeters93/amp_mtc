import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TestResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Test Results"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Imperial/Metric" source="imperialMetric" />
        <TextField label="Measured Leak Rate" source="measuredLeakRate" />
        <TextField label="Result" source="result" />
        <TextField label="Test Length" source="testLength" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
