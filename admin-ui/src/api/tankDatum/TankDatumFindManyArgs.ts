import { TankDatumWhereInput } from "./TankDatumWhereInput";
import { TankDatumOrderByInput } from "./TankDatumOrderByInput";

export type TankDatumFindManyArgs = {
  where?: TankDatumWhereInput;
  orderBy?: Array<TankDatumOrderByInput>;
  skip?: number;
  take?: number;
};
