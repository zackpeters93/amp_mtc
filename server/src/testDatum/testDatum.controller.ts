import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestDatumService } from "./testDatum.service";
import { TestDatumControllerBase } from "./base/testDatum.controller.base";

@swagger.ApiTags("testData")
@common.Controller("testData")
export class TestDatumController extends TestDatumControllerBase {
  constructor(
    protected readonly service: TestDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
