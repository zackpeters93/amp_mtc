import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comments" multiline source="comments" />
        <TextInput label="Imperial/Metric" source="imperialMetric" />
        <TextInput label="Measured Leak Rate" source="measuredLeakRate" />
        <TextInput label="Result" source="result" />
        <TextInput label="Test Length" source="testLength" />
      </SimpleForm>
    </Create>
  );
};
