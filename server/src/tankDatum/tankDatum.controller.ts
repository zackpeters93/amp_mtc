import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TankDatumService } from "./tankDatum.service";
import { TankDatumControllerBase } from "./base/tankDatum.controller.base";

@swagger.ApiTags("tankData")
@common.Controller("tankData")
export class TankDatumController extends TankDatumControllerBase {
  constructor(
    protected readonly service: TankDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
