import { TankDatum as TTankDatum } from "../api/tankDatum/TankDatum";

export const TANKDATUM_TITLE_FIELD = "imperialMetric";

export const TankDatumTitle = (record: TTankDatum): string => {
  return record.imperialMetric || record.id;
};
