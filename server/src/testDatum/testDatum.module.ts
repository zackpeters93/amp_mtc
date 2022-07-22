import { Module } from "@nestjs/common";
import { TestDatumModuleBase } from "./base/testDatum.module.base";
import { TestDatumService } from "./testDatum.service";
import { TestDatumController } from "./testDatum.controller";
import { TestDatumResolver } from "./testDatum.resolver";

@Module({
  imports: [TestDatumModuleBase],
  controllers: [TestDatumController],
  providers: [TestDatumService, TestDatumResolver],
  exports: [TestDatumService],
})
export class TestDatumModule {}
