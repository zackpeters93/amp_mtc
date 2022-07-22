import { Module } from "@nestjs/common";
import { TechnicianModuleBase } from "./base/technician.module.base";
import { TechnicianService } from "./technician.service";
import { TechnicianController } from "./technician.controller";
import { TechnicianResolver } from "./technician.resolver";

@Module({
  imports: [TechnicianModuleBase],
  controllers: [TechnicianController],
  providers: [TechnicianService, TechnicianResolver],
  exports: [TechnicianService],
})
export class TechnicianModule {}
