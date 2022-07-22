import { TestResult as TTestResult } from "../api/testResult/TestResult";

export const TESTRESULT_TITLE_FIELD = "imperialMetric";

export const TestResultTitle = (record: TTestResult): string => {
  return record.imperialMetric || record.id;
};
