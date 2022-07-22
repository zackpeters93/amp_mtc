import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comments" multiline source="comments" />
        <TextInput label="Imperial/Metric" source="imperialMetric" />
        <TextInput label="Measured Leak Rate" source="measuredLeakRate" />
        <TextInput label="Result" source="result" />
        <TextInput label="Test Length" source="testLength" />
      </SimpleForm>
    </Edit>
  );
};
