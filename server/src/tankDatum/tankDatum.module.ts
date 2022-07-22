import { Module } from "@nestjs/common";
import { TankDatumModuleBase } from "./base/tankDatum.module.base";
import { TankDatumService } from "./tankDatum.service";
import { TankDatumController } from "./tankDatum.controller";
import { TankDatumResolver } from "./tankDatum.resolver";

@Module({
  imports: [TankDatumModuleBase],
  controllers: [TankDatumController],
  providers: [TankDatumService, TankDatumResolver],
  exports: [TankDatumService],
})
export class TankDatumModule {}
