import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestResultService } from "./testResult.service";
import { TestResultControllerBase } from "./base/testResult.controller.base";

@swagger.ApiTags("testResults")
@common.Controller("testResults")
export class TestResultController extends TestResultControllerBase {
  constructor(
    protected readonly service: TestResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
