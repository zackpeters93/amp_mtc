import { TestDatum as TTestDatum } from "../api/testDatum/TestDatum";

export const TESTDATUM_TITLE_FIELD = "api";

export const TestDatumTitle = (record: TTestDatum): string => {
  return record.api || record.id;
};
